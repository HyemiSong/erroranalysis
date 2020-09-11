import Topbar from '../components/Topbar/Topbar';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        number:state.number,
        map:state.map,
        data:state.data,
        isNodeClicked:state.isNodeClicked,
        isCellClicked:state.isCellClicked,
        treeData: state.treeData,
        heatData: state.heatData,
        isCohortInfo:state.isCohortInfo,
        isManageCohort:state.isManageCohort,
        cohortTitle:state.cohortTitle,
        isExplanation:state.isExplanation,
        currentCohort:state.currentCohort,
        cohorts:state.cohorts,
        isLocalExplanation:state.isLocalExplanation,
        isWhatIf:state.isWhatIf
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClickCohortInfo:function(e){
            dispatch({type:'COHORTINFO', cohortInfo:e})
        },
        onClickManageCohort:function(e){
            dispatch({type:'MANAGECOHORT', manageCohort:e})
        },
        onClickExplanation:function(e){
            dispatch({type:'VIEWEXPLANATION', openExplanation:e})
        },
        onChange:function(selectedMap){
            dispatch({type:'MAP', selectedMap:selectedMap})
        },
        onWhatIfClick:function(e){
            dispatch({type:'WHATIF', WhatIfClick:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Topbar)