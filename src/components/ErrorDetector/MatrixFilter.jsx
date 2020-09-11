import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';
import Mockup from '../../image/Heatmap.png';


export default function MatrixFilter(props){
//console.log(props)
        // const selectedCellsArr = props.selectedCellsArr;
        // const data = props.heatData;
        // const [selectedCells, setClickedCells] = useState(selectedCellsArr);
        // const [matrixData, setMatrixData] = useState(data);
        // let clickedCells = [];

        // const ref = useRef();

        // const margin = {top:40, right:50, bottom:70, left:50};
        // const width = 700 - margin.left - margin.right;
        // const height = 300 - margin.top - margin.bottom;
        
        // // calculate width and height based on window size
        // const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        // const times = d3.range(24);
        // const _width = width
        // const gridSize = Math.floor(width/ times.length);
        // const _height = gridSize * (days.length);

        // // linear colour scale
        // const colours1 = d3.scaleLinear()
        // .domain(d3.range(1, 11, 1))
        // .range(["#87cefa", "#86c6ef", "#85bde4", "#83b7d9", "#82afce", "#80a6c2", "#7e9fb8", "#7995aa", "#758b9e", "#708090"]);

        // const colours2 = d3.scaleLinear()
        // .domain(d3.range(1, 11))
        // .range(["#ffdbc5", "#cf1b1b"]);

        // useEffect(() => {
        //     const svg = d3.select(ref.current)
        //     svg
        //     .attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom)
        //     .append("g")
        //     .attr("transform",
        //     "translate(" + margin.left + "," + margin.top + ")");
            
        //     const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        //     const myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]
            
        //     const xAxis= d3.scaleBand();
        //     xAxis
        //     .range([ 0, _width ])
        //     .domain(times)
        //     .padding(0.01);
        //     svg
        //     .append("g")
        //     .attr("transform", "translate(0," + _height + ")")
        //     .call(d3.axisBottom(xAxis))

        //     const yAxis= d3.scaleBand();
        //     yAxis
        //     .range([_height, 0])
        //     .domain(days)
        //     .padding(0.01);
        //     svg
        //     .append("g")
        //     .attr("transform",
        //     "translate(" + _width + "," + 0 + ")")
        //     .call(d3.axisRight(yAxis))
             
        //   const nest = d3.nest()
        //     .key(function(d) { return d.location; })
        //     .entries(data);
      
        //   // array of locations in the data
        //   const locations = nest.map(function(d) { return d.key; });
        //   //const currentLocationIndex = 0;
        //   let selectLocation = nest.find(function(d) {
        //     return d.key == "location one";
        //   });
          
        //   // add id & clicked
        //   selectLocation.values.map(function(d, i){d.id = "id#"+i})

        //   // final data
        //   let _data = selectLocation.values;
        //   const g = svg
        //     .append("g")
        //     .attr("class", "canvas")
          
        //   const cell = g
        //     .append("g")
        //     .selectAll("g")
        //     .data(_data)
        //     .enter()
        
        //   cell
        //       .append("rect")
        //       .attr("x", function(d) { return (d.hour-1) * gridSize; })
        //       .attr("y", function(d) { return (d.day-1) * gridSize; })
        //       .attr("class", "cell")
        //       .attr("width", xAxis.bandwidth())
        //       .attr("height", yAxis.bandwidth())
        //       .style("stroke", "white")
        //       .style("stroke-width", 1)
        //       .style("stroke-opacity", 0.6)
        //       .style("fill", function(d) { return (d.clicked === false || d.clicked === undefined) ? colours1(d.value) : "red" })
        //       //.attr("fake", d=> console.log(d))
        //       .on("click", function(d){
        //           // clickedCells.push(d)
        //           // console.log(clickedCells)

        //           // update attr status to clicked = true
        //           for(let i=0; i < _data.length; i++){
        //             if(_data[i].id === d.id){
        //               _data[i].clicked = true;
        //             }else{
        //               _data[i].clicked = false;
        //             }
        //           }
        //           let updatedData = _data;
        //           nodeStateChange(svg, d, updatedData)
                  
        //           // cell color
        //           d3.selectAll(".cell")
        //           .style("fill", function(d) { return (d.clicked === true) ? "red" : colours1(d.value)})
                  
        //           // toggle
        //       })
        //       //console.log(_data)
        // }, [selectedCellsArr, data]);

        // function nodeStateChange(svg, d, updatedData){
        //     // setClickedCells(clickedCells);
        //     // props.onCellClick(clickedCells)
        //     setMatrixData(updatedData);
        //     props.onChangeMatrixData(updatedData);

        //     let _clicked = true;
        //     //props.onClickCohortInfo(_clicked)
        // }

        return(
            <div>
                <div id="Matrixfilter">
                <img src={Mockup} alt="" className="heatmapMockup padding-top-xxsm" 
                ></img>
                {/* <div>
                    <select name="feature" id="feature1" value="feature" 
                        onChange={function(e){
                            //this.props.onChange(e.target.value)
                        }.bind(this)}
                        >
                        <option value="No Feature">No Feature</option>
                        <option value="Feature 1">Feature 1</option>
                    </select>
                    <select name="feature" id="feature2" value="feature" 
                        onChange={function(e){
                            //this.props.onChange(e.target.value)
                        }.bind(this)}
                        >
                        <option value="No Feature">No Feature</option>
                        <option value="Feature 1">Feature 2</option>
                    </select>
                </div>

                <svg
                ref={ref}
                /> */}
                </div>               
            </div>
        )
}