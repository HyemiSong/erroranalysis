import React, {useRef, useState, useEffect} from 'react';
import * as d3 from 'd3';

export default function MatrixFilter(props){
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

        useEffect(() => {
            setCurrentCohort(tempCohorts[1])
            props.onChangeCurrentCohort(tempCohorts[1])
            console.log(tempCohorts)
        }, [selectedCellsArr, data, cCohort, cohorts, tempCohorts]);
        
        return(
            <div>
                <div id="Matrixfilter">
                  <svg ref={ref}/>
                  Cohort: {cCohort.name}
                </div>               
            </div>
        )
}