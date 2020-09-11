import WhatIfPanel from '../components/Topbar/WhatIfPanel'
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        isExplanation:state.isExplanation
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCloseWhatIf:function(e){
            dispatch({type:'WHATIF', WhatIfClick:e})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(WhatIfPanel)