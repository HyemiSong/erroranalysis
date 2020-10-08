import ManageCohort from '../components/Topbar/ManageCohort';
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
        isChangeCohort:state.isChangeCohort,
        isAddCohort:state.isAddCohort,
        cohortTitle:state.cohortTitle,
        cohorts:state.cohorts,
        max_id:state.max_id,
        currentCohort:state.currentCohort,
        isExplanation:state.isExplanation,
        cohortEditTarget:state.cohortEditTarget,
        tempCohorts:state.tempCohorts
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCloseManageCohort:function(e){
            dispatch({type:'MANAGECOHORTCLOSE', manageCohort:e})
        },
        onClickAddCohort:function(e){
            dispatch({type:'ADDCOHORT', addCohort:e})
        },
        onClickExplanation:function(e){
            dispatch({type:'VIEWEXPLANATION', openExplanation:e})
        },
        onChangeMap:function(e){
            dispatch({type:'MAP', selectedMap:e})
        },
        onCurrentCohort:function(e){
            dispatch({type:'CURRENTCOHORT', currentCohort:e})
        },
        onCohortEditTarget:function(e){
            dispatch({type:'SHIFTCOHORTEDITARTGET', cohortEditTarget:e})
        },
        onUpdateTempCohort:function(e){
            dispatch({type:'UPDATETEMPCOHORT', updateTempCohorts:e})
        },
        onChangeCurrentCohort:function(e){
            dispatch({type:'CURRENTCOHORT', currentCohort:e})
        },
        onUpdateNewTreeData:function(e){
            dispatch({type:'NEWTREEDATA', updateTreedata:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(ManageCohort)