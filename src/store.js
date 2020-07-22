import {createStore} from 'redux';

export default createStore(function(state, action){
    console.log(state, action)
    if(state === undefined){
        return{number:0, map:"Treemap"}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    if(action.type === 'MAP'){
        return {...state, map:action.selectedMap}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())