import Map from '../components/Map/Map'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        map:state.map
    }
}
function mapDispatchToProps(dispatch){
    return{
        onChange:function(selectedMap){
            dispatch({type:'MAP', selectedMap:selectedMap})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Map)