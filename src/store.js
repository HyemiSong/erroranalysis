import {createStore} from 'redux';
import Data from './data/FaceAPI_azure_error_nodetection_extended_small_mlads.json'
import { treeData, treeData2, heatData } from './data/treedata';
import FaceAPI from './FaceAPI'

export default createStore(function(state, action){
    console.log(state, action)
    console.log(FaceAPI())
    if(state === undefined){
        return{
            number:0,
            map:"Treemap",
            data: Data,
            treeData: FaceAPI(),
            heatData: heatData,
            selectedCellsArr:[],
            currentCohort:{name:"All data", children:[], level:0},
            isExplanation:false,
            isNodeClicked:false,
            isCohortInfo:false,
            isManageCohort:false,
            isAddCohort:false,
            isOverview:false,
            d3Transform: {k:1, x:window.innerWidth/1.5, y:50},
            cohortTitle:[{detector:"Error Detector", explainer:"Explanation"}],
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
    if(action.type === 'CURRENTCOHORT'){
        return {...state, currentCohort:action.ancesterCluster}
    }
    if(action.type === 'COHORTINFO'){
        return {...state, isCohortInfo:action.cohortInfo}
    }
    if(action.type === 'COHORTINFOCLOSE'){
        return {...state, isCohortInfo:action.cohortInfo}
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
    if(action.type === 'VIEWEXPLANATION'){
        return {...state, isExplanation:action.openExplanation}
    }
    if(action.type === 'BACKTODETECTOR'){
        return {...state, isExplanation:action.openExplanation}
    }
    if(action.type === 'TRANSFORM'){
        return {...state, d3Transform:action.changeTransfrom}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())