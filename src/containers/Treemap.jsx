import Treemap from '../components/Treemap/Treemap'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    console.log(state)
    return {
        number:state.number,
        map:state.map
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
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Treemap)