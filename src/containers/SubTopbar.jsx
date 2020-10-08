import SubTopbar from '../components/Topbar/SubTopbar';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        data:state.data,
        treeData:state.treeData,
        heatData:state.heatData,
        isCohortInfo:state.isCohortInfo,
        isManageCohort:state.isManageCohort,
        isExplanation:state.isExplanation,
        currentCohort:state.currentCohort,
        cohorts:state.cohorts,
        tempCohorts:state.tempCohorts
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClickAddCohort:function(e){
            dispatch({type:'ADDCOHORT', addCohort:e})
        },
        onClickManageCohort:function(e){
            dispatch({type:'MANAGECOHORT', manageCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(SubTopbar)