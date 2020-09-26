import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';

export default function MatrixFilter(props){
//data    
        const selectedCellsArr = props.selectedCellsArr;
        const data = props.heatData;
        const cohorts = props.cohorts;
        const tempCohorts = props.tempCohorts;
        const cCohort = props.currentCohort;
        const [selectedCells, setClickedCells] = useState(selectedCellsArr);
        const [matrixData, setMatrixData] = useState(data);
        const [currentCohort, setCurrentCohort] = useState(cCohort)
        const [tCohorts, setTempCohorts] = useState(tempCohorts)
        const ref = useRef();
       
//graph width, height
        const margin = {top:40, right:50, bottom:70, left:50, sm: 2};
        const width = 250 - margin.left - margin.right;
        const height = 250 - margin.top - margin.bottom;
        const padding = 0.01;
        
// calculate width and height
        const v1 = [];
        const v2 = [];
        data.forEach(element => v1.push(element.value1));
        data.forEach(element => v2.push(element.value2));
        const value1 = [...new Set(v1)];
        const value2 = [...new Set(v2)];
        const gridSize = Math.floor(width/value2.length);
        const _width = width;
        const _height = gridSize * (value1.length);
// console.log(value2)
// graph
        useEffect(() => {
            setCurrentCohort(tempCohorts[1])
            props.onChangeCurrentCohort(tempCohorts[1])
// svg creation
            const svg = d3.select(ref.current)
            svg
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// xAxis creation
            const xAxis = d3.scaleBand();
            xAxis
            .range([ 0, _width ])
            .domain(value2)
            .padding(padding);
            
            svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + _height + ")")
            .call(d3.axisBottom(xAxis))
// yAxis creation
            const yAxis = d3.scaleBand()
            yAxis
            .range([_height, 0])
            .domain(value1)
            .padding(padding);

            svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + 0 + ")")
            .call(d3.axisLeft(yAxis))
// heatmap
            const g = svg
            .append("g")
            .attr("class", "canvas")

            const cell = g
            .append("g")
            .selectAll("g")
            .data(data)
            .enter()

            cell
            .append("rect")
            .attr("x", function(d){return (value1.includes(d.value1))? (value1.indexOf(d.value1) * gridSize) + margin.left + margin.sm : 0; })
            .attr("y", function(d){return (value2.includes(d.value2))? value2.indexOf(d.value2) * gridSize : 0; })
            .attr("class", "cell")
            .attr("width", xAxis.bandwidth())
            .attr("height", yAxis.bandwidth())
            .style("stroke", "white")
            .style("stroke-width", 1)
            .style("stroke-opacity", 0.6)
            .style("fill", "blue")
            // .style("opacity", "0")

        }, [selectedCellsArr, data, cCohort, cohorts, tempCohorts]);

        return(
            <div>
                <div id="Matrixfilter">
                    <div className="overview absolute padding-sm txt-left">
                        <div className="flex-container padding-top-sm">
                            <div className="metric-area">
                                <div className="flex-container padding-xxsm">
                                    <div id="metric-bar" className="black"></div>
                                    <div className="padding-xxsm">
                                        <div className="font-size-10 regular">Selected Cells</div>
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
                                <div id="metric-bar" className="datavis-1-bg"></div>
                                    <div className="padding-xxsm">
                                        <div className="font-size-10 regular">Success (Num.)</div>
                                        <div className="font-size-28 bold flex-container">
                                            <div className="datavis-1">{tempCohorts[0].success}</div>
                                            {/* <div>/{treeData.size}</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="metric-area">
                                <div className="flex-container padding-xxsm">
                                    <div id="metric-bar" className="datavis-7-bg"></div>
                                    <div className="padding-xxsm">
                                        <div className="font-size-10 regular">Error (Num.)</div>
                                        <div className="font-size-28 bold flex-container">
                                            <div className="datavis-7">{tempCohorts[0].error}</div>
                                            {/* <div>/{treeData.size}</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding-left-md padding-top-xlg">
                    <svg className="absolute leftRightCenter" ref={ref}/>  
                    </div>
                </div>
            </div>
        )
}