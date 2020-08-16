import Instanceview from '../components/Instanceview/Instanceview'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return{
        number:state.number,
        map:state.map,
        data:state.data
    }
}

export default connect(mapReduxStateToReactProps)(Instanceview)