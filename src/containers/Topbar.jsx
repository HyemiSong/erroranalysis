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
        isChangeCohort:state.isChangeCohort,
        isManageCohort:state.isManageCohort,
        cohortTitle:state.cohortTitle
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClickChangeCohort:function(e){
            dispatch({type:'CHANGECOHORT', changeCohort:e})
        },
        onClickManageCohort:function(e){
            dispatch({type:'MANAGECOHORT', manageCohort:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Topbar)