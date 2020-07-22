import Notebook from '../components/Notebook'
import {connect} from 'react-redux';
function mapReduxSateToReactProps(state){
    return{
        number:state.number,
        face:state.face,
        faceAPI:state.faceAPI
    }
}
export default connect(mapReduxSateToReactProps)(Notebook)