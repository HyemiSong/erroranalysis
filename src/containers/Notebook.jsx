import Notebook from '../components/Notebook/Notebook'
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
        cohortTitle:state.cohortTitle,
        isExplanation:state.isExplanation
    }
}
function mapDispatchToProps(dispatch){
    return{
        // onClickExplanation:function(e){
        //     dispatch({type:'VIEWEXPLANATION', openExplanation:e})
        // }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Notebook)