import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';

export default function Treemap (props){
console.log(props)
const data = props.isNodeClicked;
const treeData = props.treeData;
const [selectedCluster, setCluster] = useState(data);
const [ancesterCluster, setAncester] = useState(treeData)

console.log(treeData)

const ref = useRef();

useEffect(() => {
    let i = 0;
    const width = 700;
    const height = 600;
    const root = d3.hierarchy(treeData);
    const dx = 50;
    const dy = 100;
    const margin = {top:50, botton:50, left:50, right:50};
    const tree = d3.tree().nodeSize([dx, dy]);
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
        .attr("transform", `translate(${(width / 2)},${margin.top})`)

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
        .attr("class", "node nodeID")
        .attr("fill", function(d){return (d.data.ancestor === true || d.data.ancestor === undefined) ? "green" : "yellow";})
        .attr("r", 22)
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
            let ancestors = [d.data.name];
            let ancestor = (d.parent === null)? null : d.parent;
            //finding ancestors
            let setParent = function(o){
                ancestors.push(o.data.name)
                if(o.parent !== null){
                    setParent(o.parent)
                }
            }
            setParent(ancestor)
            console.log(ancestors)
            //checking if the clicked node and childrens
            let _data = treeData;
            let setAncestors = function(o){
                let includedParent = ancestors.includes(o.name)
                //console.log({"ancestors":ancestors, "o.name":o.name, "include":includedParent})
                o["ancestor"] = includedParent;
                if(o.children != undefined){
                    for(let n in o.children){
                        setAncestors(o.children[n])
                    }
                }
            }
            setAncestors(_data)
            console.log(_data)
            
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
            <div id="Treemap">
                <svg
                ref={ref}
                />
                </div>
            </div>
        )
}