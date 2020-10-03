import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';


export default function MatrixFilter(props){
//Fabric UI
        let allCohorts = [];
        const dropdownStyles = {
            dropdown: { width: 200 }
        };
        const options = [
            { key: 'gender_gt', text: 'gender_gt' },
            { key: 'makeup_eyeMakeup', text: 'makeup_eyeMakeup' },
          ];
        const stackTokens = { childrenGap: 20 };

//data    
        const selectedCellsArr = props.selectedCellsArr;
        const selectedCellsErrRate = props.selectedCellsErrRate;
        const data = props.heatData;
        const treeData = props.treeData;
        const cohorts = props.cohorts;
        const tempCohorts = props.tempCohorts;
        const cCohort = props.currentCohort;
        const [selectedCells, setClickedCells] = useState(selectedCellsArr);
        const [selectedCellsErr, setSelectedCellsErr] = useState(selectedCellsErrRate);
        const [matrixData, setMatrixData] = useState(data);
        const [currentCohort, setCurrentCohort] = useState(cCohort);
        const [tCohorts, setTempCohorts] = useState(tempCohorts);
        const ref = useRef();
        
       // console.log(_clickedCells);

//graph width, height
        const margin = {top:40, right:50, bottom:70, left:50, sm: 2};
        const width = 800 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
        const padding = 0.01;
        
// calculate width and height
        const v1 = [];
        const v2 = [];
        data.forEach(element => v1.push(element.value1));
        data.forEach(element => v2.push(element.value2));
        const value1 = [...new Set(v1)];
        const value2 = [...new Set(v2)];
        const gridSizeRate= (value2.length < 4) ? 0.2 : 1;
        const gridSize = Math.floor((width/value2.length)*gridSizeRate);
        const _width = gridSize * (value2.length);
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
            .style("fill", function(d) { return (d.isClick === undefined || d.isClick === false) ? "blue" : "red"})
            .on("click", function(d, i){
                //cal clicked cell info
                let isClick = (d.isClick === undefined || d.isClick === false) ? true : false;
                d.isClick = isClick;

                //add clicked cell
                let _clickedCells = [];
                for(let i = 0; i < data.length; i++){
                    if(data[i].isClick === true){
                        _clickedCells.push(data[i])
                    }
                }

                //cal and add error rate
                let allErrArr = [];
                let allDataArr = [];
                for(let i = 0; i < _clickedCells.length; i++){
                    allDataArr.push(_clickedCells[i].data.length)
                    allErrArr.push(_clickedCells[i].error)
                }
                let dataSum = allDataArr.reduce(function add(a,b){
                    return a + b
                }, 0)

                let errSum = allErrArr.reduce(function add(a,b){
                    return a + b
                }, 0)

                let errorRate = ((errSum/dataSum) * 100).toFixed(2);
                let result = (_clickedCells.length === 0 || errorRate === "NaN") ? 1.7 : errorRate;
                setSelectedCellsErr(result);
                props.onCellClickErr(result);

                console.log(errSum)
                console.log(dataSum)
                console.log(errorRate)
                console.log(selectedCellsErrRate)

                let updatedData = data;

                //update data
                setMatrixData(updatedData);
                nodeStateChange(updatedData)
                setClickedCells(_clickedCells)
                props.onCellClick(_clickedCells)
                props.onClickCohortInfo(true)

                //cell color
                d3.selectAll(".cell")
                .style("fill", function(d) { return (d.isClick === undefined || d.isClick === false) ? "blue" : "red"})
            })

            function nodeStateChange(updatedData){
                // setClickedCells(clickedCells);
                // props.onCellClick(clickedCells)
                setMatrixData(updatedData);
                props.onChangeMatrixData(updatedData);
    
                // let _clicked = true;
                // props.onClickCohortInfo(_clicked)
            }
      
           // console.log(data)
            // .style("opacity", "0")

            // for(let i =0; i < cohorts.length; i++){
            //     allCohorts.push(
            //         <option value={cohorts[i].name} key={cohorts[i].id}>{cohorts[i].name}</option>
            //     )
            // }
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
                                        <div className="font-size-10 regular">Error coverate (%)</div>
                                        <div className="font-size-28 bold">{selectedCellsArr.length}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="metric-area">
                                <div className="flex-container padding-xxsm">
                                    <div id="metric-bar" className="datavis-7-bg">
                                    </div>
                                    <div className="padding-xxsm">
                                        <div className="font-size-10 regular">Error rate (%)</div>
                                        <div className="font-size-28 bold datavis-7">{selectedCellsErr}</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="metric-area">
                                <div className="flex-container padding-xxsm">
                                <div id="metric-bar" className="datavis-1-bg"></div>
                                    <div className="padding-xxsm">
                                        <div className="font-size-10 regular">Correct (Num.)</div>
                                        <div className="font-size-28 bold flex-container">
                                            <div className="datavis-1">{cohorts[0].success}</div>
                                            <div>/{treeData.size}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="metric-area">
                                <div className="flex-container padding-xxsm">
                                    <div id="metric-bar" className="datavis-7-bg"></div>
                                    <div className="padding-xxsm">
                                        <div className="font-size-10 regular">Incurrect (Num.)</div>
                                        <div className="font-size-28 bold flex-container">
                                            <div className="datavis-7">{cohorts[0].error}</div>
                                            <div>/{treeData.size}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="padding-left-sm padding-top-xlg">
                        <div className="font-size-14">
                            {/* <select className="defaultButton" name="baseCohort" id="baseCohort" value={features[0]} 
                            onChange=
                            {function(e){
                                this.setState({baseCohort: e.target.value})
                            }.bind(this)}>
                            {allCohorts}
                            //</select> */}
                            <Stack horizontal tokens={stackTokens} verticalAlign="start">
                                <Dropdown
                                    placeholder="makeup_eyeMakeup"
                                    label="X-Axis: Feature 1"
                                    defaultSelectedKeys={['makeup_eyeMakeup']}
                                    options={options}
                                    styles={dropdownStyles}
                                />
                                 <Dropdown
                                    placeholder="gender_gt"
                                    label="Y-Axis: Feature 2"
                                    defaultSelectedKeys={['gender_gt']}
                                    options={options}
                                    styles={dropdownStyles}
                                />
                            </Stack>
                        </div>
                        <div className="padding-top-md">
                            <svg className="absolute" ref={ref}/>
                        </div>
                    </div>
                </div>
            </div>
        )
}