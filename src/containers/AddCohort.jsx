import Topbar from '../components/Topbar/AddCohort';
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
        isChangeCohort:state.isChangeCohort,
        isAddCohort:state.isAddCohort,
        cohortTitle:state.cohortTitle,
        initCohort:state.initCohort,
        cohorts:state.cohorts,
        max_id:state.max_id
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCloseAddCohort:function(e){
            dispatch({type:'ADDCOHORTCLOSE', addCohort:e})
        },
        onSubmitCohort:function(e){
            dispatch({type:'CREATE', newCohort:e})
        },
        onSubmitMaxID:function(e){
            dispatch({type:'MAXID', newMaxId:e})
        },
        onClickAddCohort:function(e){
            dispatch({type:'ADDCOHORT', addCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Topbar)