import GlobalFeature from '../components/GlobalFeature/GlobalFeature'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return{
        number:state.number,
        map:state.map,
        data:state.data,
        isLocalExplanation:state.isLocalExplanation
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        },
        onChange:function(selectedMap){
            dispatch({type:'MAP', selectedMap:selectedMap})
        },
        onLoad:function(e){
            dispatch({type:'LOCALLOADED', loadedLocalEx:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(GlobalFeature)