import Instanceview from '../components/Instanceview/Instanceview'
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
        onLoad:function(e){
            dispatch({type:'LOCALLOADED', loadedLocalEx:e})
        }
    }
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Instanceview)