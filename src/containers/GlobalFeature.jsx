import GlobalFeature from '../components/GlobalFeature/GlobalFeature'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        number:state.number,
        map:state.map,
        data:state.data
    }
}
function mapDispatchToProps(dispatch){
    return{
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        },
        onChange:function(selectedMap){
            dispatch({type:'MAP', selectedMap:selectedMap})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(GlobalFeature)