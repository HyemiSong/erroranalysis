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
        currentCluster: state.currentCluster
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClusterClick:function(ele){
            dispatch({type:'CLUSTERCLICKED', selectedCluster:ele})
        },
        onChangeTreeData:function(ele){
            dispatch({type:'CURRENTCOHORT', ancesterCluster:ele})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Treemap)