import MatrixFilter from '../components/Map/MatrixFilter'
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
    return {
        number:state.number,
        map:state.map,
        data:state.data,
        color:state.color,
        isNodeClicked:state.isNodeClicked,
        selectedCellsArr:state.selectedCellsArr,
        treeData: state.treeData,
        heatData: state.heatData
    }
}
function mapDispatchToProps(dispatch){
    return{
        onCellClick:function(ele){
            dispatch({type:'CELLCLICKED', selectedCellsArr:ele})
        },
        onChangeMatrixData:function(ele){
            dispatch({type:'MATRIXDATACHANGE', matrixData:ele})
        }
    }
}
export default connect(mapReduxStateToReactProps, mapDispatchToProps)(MatrixFilter)