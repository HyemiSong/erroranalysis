import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';

export default function Treemap (props){
//console.log(props)
const data = props.isNodeClicked;
const treeData = props.treeData;
const [selectedCluster, setCluster] = useState(data);
const [ancesterCluster, setAncester] = useState(treeData)

console.log(treeData)

const ref = useRef();

useEffect(() => {
    let i = 0;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const root = d3.hierarchy(treeData);
    const dx = 70;
    const dy = 60;
    const margin = {top:50, botton:50, left:50, right:50};
    const tree = d3.tree().nodeSize([dx, dy]);
    const radius = 25;
    tree(root)

    let x0 = Infinity;
    let x1 = -x0;
    root.each(d => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
    });

    const svgTree = d3.select(ref.current)
        .style("width", width)
        .style("height", height)

    svgTree.selectAll(".canvas").remove()
    const g = svgTree
        .append("g")
        .attr("class", "canvas")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("transform", `translate(${(width / 1.5)},${margin.top})`)

    const link = g
        .append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-width", 1)
        .selectAll("path")
        .data(root.links())
        .enter()
        .append("path")
        .attr( "d", d3.linkVertical().x(d => d.x).y(d => d.y));

    const node = g
        .append("g")
        .selectAll("g")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("transform", d => `translate(${d.x},${d.y})`);
    
    node
        .append("circle")
        .attr("class", "node nodeID ")
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .attr("r", radius)
        //.attr("fake", d=> console.log(d));

    let rectHeight = function(r){
            let h = r;
            if (h > 0 && h < 1) {
                let t0, t1 = Math.pow(12 * h * Math.PI, 1 / 3);
                for (let i = 0; i < 10; ++i) {
                  t0 = t1;
                  t1 = (Math.sin(t0) - t0 * Math.cos(t0) + 2 * h * Math.PI) / (1 - Math.cos(t0));
                }
                h = (1 - Math.cos(t1 / 2)) / 2;
              }
              return h;
     }
     //console.log(rectHeight(10))

    node
     .append("clipPath")
     .attr('id', function(d, i){return "clip" + i})
     .attr("class", "mask")
     .append('rect')
     .attr("x", function(d){return radius * (-1)})
     .attr("width", function(d){return radius * 2})
     .attr("y", function(d, i){return radius-rectHeight(10)})
     .attr("height", function(d, i){return 2*rectHeight(10)})
    
    node
        .append("circle")
        .attr("class", "mask")
        .attr("clip-path", function(d, i) { return "url(#clip" + i + ")"})
        .attr("fill", function(d){return (d.data.ancestor === true || d.data.ancestor === undefined) ? "green" : "yellow";})
        .attr("r", radius)
        //.attr("fake", d=> console.log(d));

    d3.selectAll(".node").attr("nodeID", function(d,i) {return "nodeID#" + i})
    

    node
        .append("text")
        .attr("dy", "0.31em")
        .attr("x", d => (d.children ? -6 : 6))
        .attr("text-anchor", d => (d.children ? "end" : "start"))
        .text(d => d.data.name)
        .select(function() {
            return this.parentNode.insertBefore(this.cloneNode(true), this);
        })
        .attr("stroke", "white")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3);
    
    node
        .on("click", function(d, i){
            let ancestors = [d.data.id];
            let clickedNode = d.data;
            let ancestor = (d.parent === null)? null : d.parent;
            //finding ancestors
            let setParent = function(o){
                ancestors.push(o.data.id)
                if(o.parent !== null){
                    setParent(o.parent)
                }
            }
            setParent(ancestor)
            //console.log(ancestors)
            //checking if the clicked node and childrens
            let _data = treeData;
            let setAncestors = function(o){
                let includedParent = ancestors.includes(o.id)
                //console.log({"ancestors":ancestors, "o.name":o.name, "include":includedParent})
                o["ancestor"] = includedParent;
                o["clickedNode"] = clickedNode;
                if(o.children != undefined){
                    for(let n in o.children){
                        setAncestors(o.children[n])
                    }
                }
            }
            setAncestors(_data)
            //console.log(_data)
            
            let isClicked = (data === "false") ? "true" : "false";
            clusterChange(isClicked, _data)
        })

}, [data, treeData]);

function clusterChange(isClicked, _data){
    setCluster(isClicked);
    setAncester(_data)
    props.onClusterClick(isClicked)
    props.onChangeTreeData(_data)
}
        return(
            <div>
            <div id="Treemap" className="padding-sm">
                <svg
                ref={ref}
                />
                </div>
            </div>
        )
}