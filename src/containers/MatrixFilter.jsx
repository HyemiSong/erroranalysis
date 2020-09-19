import MatrixFilter from '../components/ErrorDetector/MatrixFilter'
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
    return {
        number:state.number,
        map:state.map,
        data:state.data,
        color:state.color,
        isNodeClicked:state.isNodeClicked,
        selectedCellsArr:state.selectedCellsArr,
        treeData: state.treeData,
        isCohortInfo:state.isCohortInfo,
        heatData: state.heatData,
        cohorts: state.cohorts,
        currentCohort: state.currentCohort,
        tempCohorts: state.tempCohorts
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCellClick:function(ele){
            dispatch({type:'CELLCLICKED', selectedCellsArr:ele})
        },
        onChangeMatrixData:function(ele){
            dispatch({type:'MATRIXDATACHANGE', matrixData:ele})
        },
        onClickCohortInfo:function(e){
            dispatch({type:'COHORTINFO', cohortInfo:e})
        },
        onChangeCurrentCohort:function(e){
            dispatch({type:'CURRENTCOHORT', currentCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(MatrixFilter)