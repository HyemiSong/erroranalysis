import ChangeCohort from '../components/Topbar/ChangeCohort';
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
        onCloseChangeCohort:function(e){
            dispatch({type:'CHANGECOHORTCLOSE', changeCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(ChangeCohort)