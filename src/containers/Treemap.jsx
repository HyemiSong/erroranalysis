import Treemap from '../components/ErrorDetector/Treemap'
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
    return {
        number:state.number,
        map:state.map,
        data:state.data,
        color:state.color,
        isNodeClicked:state.isNodeClicked,
        isCellClicked:state.isCellClicked,
        treeData: state.treeData,
        heatData: state.heatData,
        //currentCluster: state.currentCluster,
        isCohortInfo:state.isCohortInfo,
        d3Transform: state.d3Transform,
        cohorts: state.cohorts,
        currentCohort: state.currentCohort
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClusterClick:function(e){
            dispatch({type:'NODECLICKED', selectedNode:e})
        },
        onChangeTreeData:function(e){
            dispatch({type:'CURRENTNODE', ancesterNode:e})
        },
        onChangeTransfrom:function(e){
            dispatch({type:'TRANSFORM', changeTransfrom:e})
        },
        onClickCohortInfo:function(e){
            dispatch({type:'COHORTINFO', cohortInfo:e})
        },
        onChangeCohortInfo:function(e){
            dispatch({type:'UPDATECOHORTINFO', updateCohorts:e})
        },
        onChangeCurrentCohort:function(e){
            dispatch({type:'CURRENTCOHORT', currentCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Treemap)