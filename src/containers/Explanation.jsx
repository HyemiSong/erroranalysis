import Explanation from '../components/Explanation/Explanation'
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
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Explanation)