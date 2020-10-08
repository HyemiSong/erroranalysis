import CohortOverview from '../components/Topbar/CohortOverview'
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
        tempCohorts:state.tempCohorts
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClickCohortInfo:function(e){
            dispatch({type:'COHORTINFOCLOSE', cohortInfo:e})
        },
        onClickAddCohort:function(e){
            dispatch({type:'ADDCOHORT', addCohort:e})
        },
        onClickManageCohort:function(e){
            dispatch({type:'MANAGECOHORT', manageCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(CohortOverview)