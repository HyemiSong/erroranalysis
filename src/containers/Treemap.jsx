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
        currentCluster: state.currentCluster,
        isCohortInfo:state.isCohortInfo,
        d3Transform: state.d3Transform
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClusterClick:function(ele){
            dispatch({type:'CLUSTERCLICKED', selectedCluster:ele})
        },
        onChangeTreeData:function(ele){
            dispatch({type:'CURRENTCOHORT', ancesterCluster:ele})
        },
        onChangeTransfrom:function(ele){
            dispatch({type:'TRANSFORM', changeTransfrom:ele})
        },
        onClickCohortInfo:function(e){
            dispatch({type:'COHORTINFO', cohortInfo:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Treemap)