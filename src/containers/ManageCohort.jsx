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
        max_id:state.max_id
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCloseManageCohort:function(e){
            dispatch({type:'MANAGECOHORTCLOSE', manageCohort:e})
        },
        onClickAddCohort:function(e){
            dispatch({type:'ADDCOHORT', addCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(ManageCohort)