import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';
import { nodeColor, nodeColor1, nodeHighlight, treeBg, pill } from '../../Constant'
import Tree_FaceAPI from '../../data/Tree_FaceAPI';

export default function Treemap (props){
//console.log(props)
const data = props.isNodeClicked;
const treeData = props.treeData;
const d3Transform = props.d3Transform;
const cohorts = props.cohorts;
const tempCohorts = props.tempCohorts;
const cCohort = props.currentCohort;
const allErrorSum = Tree_FaceAPI().error

const [selectedCluster, setCluster] = useState(data);
const [ancesterCluster, setAncester] = useState(treeData)
const [transform, setTransform] = useState(d3Transform)
const [selectedClusterInfo, setSelectedClusterInfo] = useState(cohorts)
const [currentCohort, setCurrentCohort] = useState(cCohort)

const ref = useRef();
    useEffect(() => {

        setCurrentCohort(tempCohorts[0])
        props.onChangeCurrentCohort(tempCohorts[0])

        //treemap setting
        let i = 0;
        const width = 929;
        const height = 535;
        const root = d3.hierarchy(treeData);
        const dx = 70;
        const dy = 140;
        const margin = { top:50, botton:50, left:50, right:50 };
        const tree = d3.tree().nodeSize([dx, dy]);
        const radius = 25;
        const minErrorRate = 4;
        let _transform ={};
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
            .style("background-color", treeBg)

        svgTree.selectAll(".canvas1").remove()
        const g = svgTree.append("g")
            .attr("class", "canvas1")

        let zoom = d3.zoom()
            .scaleExtent([1/3, 4])
            .on("zoom", zoomed);

        function zoomed() {
                g.attr("transform", d3.event.transform);
                //console.log(transform)
                _transform = d3.event.transform;
                //console.log(_transform)
        }

        svgTree.call(zoom);
        svgTree.call(zoom.transform, d3.zoomIdentity.translate(transform.x, transform.y).scale(transform.k));

        const link = g
            .append("g")
            .selectAll("path")
            .data(root.links())
            .enter()

        const node = g
            .append("g")
            .selectAll("g")
            .data(root.descendants())
            .enter()
            .append("g")
            .attr("transform", d => `translate(${d.x},${d.y})`)

        link
            .append("path")
            .attr("fill", "none")
            //.attr("stroke", "#E1E1E1")
            //.attr("stroke", function(d) { return (d.target.data.ancestor === true) ? nodeColor(((d.target.data.error/d.source.data.size) * 100).toFixed(1)) : "#E1E1E1"})
            .attr("stroke", function(d) { return (d.target.data.ancestor === true) ? nodeHighlight : "#E1E1E1"})
            .attr( "d", d3.linkVertical().x(d => d.x).y(d => d.y))
            .attr("stroke-width", d => d.source.data.size*0.02)
            // .attr("fake", d=> console.log(d.source.data.size));
        
        node
            .append("circle")
            .attr("class", "node nodeID ")
            .attr("fill", "#ffffff") //D2D4D6
            .attr("stroke", function(d, i){return (d.data.error < minErrorRate) ? "#B2B7BD" : nodeColor1(((d.data.error/d.data.size) * 100).toFixed(1))})
            .attr("stroke-width", 2)
            .attr("r", radius)
           // .attr("fake", d=> console.log(d));

        node
            .append("circle")
            .attr("class", "nodeStroke")
            .attr("fill", "none") //D2D4D6
            .attr("stroke", function(d, i){return (d.data.error < minErrorRate) ? "#B2B7BD" : nodeColor1(((d.data.error/d.data.size) * 100).toFixed(1))})
            .attr("stroke-width", function(d, i){return (d.data.ancestor === true || i === 0) ? 5 : 0})
            .attr("r", radius * 1.1)

        node
            .append("circle")
            .attr("class", "clickedNode")
            .attr("fill", "none") //D2D4D6
            .style("stroke-dasharray", ("3, 3")) 
            .attr("stroke", function(d, i){return (d.data.ancestor === true|| i === 0) ? nodeHighlight : "none"})
            .attr("stroke-width", function(d, i){return (d.data.ancestor === true || i === 0) ? 2 : 0})
            .attr("r", radius * 1.4)

        let rectHeight = function(r){
                let h = r
                let min = 3
                if (h > 0 && h < 1) {
                    let t0, t1 = Math.pow(12 * h * Math.PI, 1 / 3);
                    for (let i = 0; i < 10; ++i) {
                    t0 = t1;
                    t1 = (Math.sin(t0) - t0 * Math.cos(t0) + 2 * h * Math.PI) / (1 - Math.cos(t0));
                    }
                    h = (1 - Math.cos(t1 / 2)) / 2;
                }
                return (h < min) ? min : h;
        }

        let calHeight = function(d){
            let side = radius;
            let height = side * (d.data.error/allErrorSum);
            return height
        }

        node
            .append("clipPath")
            .attr('id', function(d, i){return "clip" + i})
            .attr("class", "mask")
            .append('rect')
            .attr("x", function(d){return radius * (-1)})
            .attr("width", function(d){return radius * 2})
            .attr("y", function(d, i){return (radius-2*rectHeight(calHeight(d)))})
            .attr("height", function(d, i){return 2*rectHeight(radius)})

        node
            .append("circle")
            .attr("class", "mask")
            .attr("clip-path", function(d, i) { return "url(#clip" + i + ")"})
            .attr("fill", function(d, i) { return (d.data.error < minErrorRate) ? "#B2B7BD" : nodeColor1(((d.data.error/d.data.size) * 100).toFixed(1))})
            //.attr("opacity", function(d, i) { return (d.data.error/d.data.size) * 1.6 + 0.1})
            .attr("r", radius*0.96)
            // .attr("fake", d => console.log(d)); 

        d3.selectAll(".node").attr("nodeID", function(d, i) {return "nodeID#" + i})

        node
            .append("text")
            .style("font-size", 12)
            .style("opacity", function(d, i){return (d.data.ancestor === true && i !== 0) ? 1 : 0;})
            .attr("y", d => (-d.y/d.depth)*0.5)
            // .attr("x", d => (-d.x/d.depth)*0.5)
            .attr("text-anchor", "middle")
            .text(d => {return (d.data.PredictionPath === undefined) ? "sdfasd" : d.data.PredictionPath.split(",").pop()})
            .call(getTextBox);
        
        node.filter(function(d) {return (!d.image)}).insert("rect","text")
            .style("opacity", function(d, i){return (d.data.ancestor === true && i !== 0) ? 1 : 0;})
            .attr("rx", 15)
            .attr("ry", 15)
            .attr("x", function(d){return d.bbox.x - pill.txtPaddingX/2})
            .attr("y", function(d){return d.bbox.y - pill.txtPaddingY/2})
            .attr("width", function(d){return d.bbox.width + pill.txtPaddingX})
            .attr("height", function(d){return d.bbox.height + pill.txtPaddingY})
            .style("stroke", pill.stroke)
            .style("stroke-width", 1)
            .style("fill", "#FFFFFF");

        function getTextBox(selection){
            selection.each(function(d) { d.bbox = this.getBBox(); })
        }

        node
            .append("text")
            .attr("class", "nodeError")
            //.style("opacity", function(d, i){return (d.data.ancestor === true && i !== 0) ? 1 : 0;})
            .attr("y", 5)
            // .attr("x", d => (-d.x/d.depth)*0.5)
            .attr("text-anchor", "middle")
            .text(d => {return (d.data.PredictionPath === undefined) ? "nodata" : d.data.error})

        node
            .on("click", function(d, i){
                console.log(d)
                let ancestors = [d.data.id];
                let clickedNode = d.data;
                let ancestor = (d.parent === null)? d : d.parent;
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
                    if(o.children !== undefined){
                        for(let n in o.children){
                            setAncestors(o.children[n])
                        }
                    }
                }
                setAncestors(_data)
                
                //metrix of clicked node
                const _coverage = ((d.data.error/allErrorSum) * 100).toFixed(2);
                const _errorRate = ((d.data.error/d.data.size) * 100).toFixed(2);
                const _success = d.data.success;
                const _error = d.data.error;
                const _filter = d.data.PredictionPath.split(",");
                let _tempCohorts = [
                        {id:0, saved:tempCohorts[0].name, name:tempCohorts[0].name, parent:'Treemap', meta:'metadata', filter:_filter, coverage: _coverage, errorRate: _errorRate, success:_success, error:_error},
                        {id:1, saved:tempCohorts[1].name, name:tempCohorts[1].name, parent:'Heatmap', meta:'metadata', filter:_filter, coverage: tempCohorts[1].coverage, errorRate:tempCohorts[1].errorRate, success:tempCohorts[1].success, error:tempCohorts[1].error}
                    ]
                let isClicked = (data === "false") ? "true" : "false";
                clusterChange(isClicked, _data, _transform, _tempCohorts)
            })
            test(cCohort)
    }, [data, treeData, d3Transform, tempCohorts, cCohort]);

    function test(test){
        return test
    }

    function clusterChange(isClicked, _data, _transform, _tempCohorts){
        setCluster(isClicked)
        setAncester(_data)
        setTransform(_transform)
        setSelectedClusterInfo(_tempCohorts)
        props.onClusterClick(isClicked)
        props.onChangeTreeData(_data)
        props.onChangeTransfrom(_transform)
        props.onUpdateTempCohort(_tempCohorts)
        props.onClickCohortInfo(true)
    }
 
return(
    <div>
    <div id="Treemap">
        <svg className="absolute" ref={ref} />
        <div className="overview absolute padding-sm txt-left">
            <div className="flex-container padding-top-sm">
                <div className="metric-area">
                    <div className="flex-container padding-xxsm">
                        <div id="metric-bar" className="black"></div>
                        <div className="padding-xxsm">
                            <div className="font-size-10 regular">Error coverage (%)</div>
                            <div className="font-size-28 bold">{tempCohorts[0].coverage}</div>
                        </div>
                    </div>
                </div>
                <div className="metric-area">
                    <div className="flex-container padding-xxsm">
                        <div id="metric-bar" className="datavis-7-bg">
                        </div>
                        <div className="padding-xxsm">
                            <div className="font-size-10 regular">Error rate (%)</div>
                            <div className="font-size-28 bold datavis-7">{tempCohorts[0].errorRate}</div>
                        </div>
                    </div>
                </div>
                <div className="metric-area">
                    <div className="flex-container padding-xxsm">
                       <div id="metric-bar" className="black"></div>
                        <div className="padding-xxsm">
                            <div className="font-size-10 regular">Correct/All (Num.)</div>
                            <div className="font-size-28 bold flex-container">
                                <div className="BodyText-M365">{tempCohorts[0].success}/</div>
                                <div className="Datavis-Unkownstatus">{treeData.size}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="metric-area">
                    <div className="flex-container padding-xxsm">
                        <div id="metric-bar" className="datavis-7-bg"></div>
                        <div className="padding-xxsm">
                            <div className="font-size-10 regular">Incorrect/All (Num.)</div>
                            <div className="font-size-28 bold flex-container">
                                <div className="datavis-7">{tempCohorts[0].error}/</div>
                                <div className="Datavis-Unkownstatus">{treeData.size}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)}