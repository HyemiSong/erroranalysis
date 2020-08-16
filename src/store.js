import {createStore} from 'redux';
import Data from './data/FaceAPI_azure_error_nodetection_extended_small_mlads.json'
import { treeData, treeData2, heatData } from './data/treedata';

export default createStore(function(state, action){
    console.log(state, action)
    if(state === undefined){
        return{
            number:0,
            map:"Treemap",
            data: Data,
            treeData: treeData2,
            heatData: heatData,
            selectedCellsArr:[],
            isNodeClicked:"false",
            isChangeCohort:"false",
            isManageCohort:"false",
            isAddCohort:"false",
            cohortTitle:"Temp. Cohort 1",
            max_id:2,
            cohorts:[
                {id:1, name:'Temp.Cohort1', parent:'Tree Map', meta:'metadata', filter:''},
                {id:2, name:'Temp.Cohort2', parent:'Tree Map', meta:'metadata', filter:''}
            ]
        }
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    if(action.type === 'MAP'){
        return {...state, map:action.selectedMap}
    }
    if(action.type === 'CELLCLICKED'){
        return {...state, selectedCellsArr:action.selectedCellsArr}
    }
    if(action.type === 'CLUSTERCLICKED'){
        return {...state, isNodeClicked:action.selectedCluster}
    }
    if(action.type === 'CHANGECOHORT'){
        return {...state, isChangeCohort:action.changeCohort}
    }
    if(action.type === 'CHANGECOHORTCLOSE'){
        return {...state, isChangeCohort:action.changeCohort}
    }
    if(action.type === 'MANAGECOHORT'){
        return {...state, isManageCohort:action.manageCohort}
    }
    if(action.type === 'MANAGECOHORTCLOSE'){
        return {...state, isManageCohort:action.manageCohort}
    }
    if(action.type === 'ADDCOHORT'){
        return {...state, isAddCohort:action.addCohort}
    }
    if(action.type === 'ADDCOHORTCLOSE'){
        return {...state, isAddCohort:action.addCohort}
    }
    if(action.type === 'CREATE'){
        return {...state, cohorts:action.newCohort}
    }
    if(action.type === 'MAXID'){
        return {...state, max_id:action.newMaxId}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())