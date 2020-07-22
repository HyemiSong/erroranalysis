import Instanceview from '../components/Instanceview/Instanceview'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    console.log(state)
    return{
        number:state.number,
        face:state.face,
        faceAPI:state.faceAPI
    }
}

export default connect(mapReduxStateToReactProps)(Instanceview)