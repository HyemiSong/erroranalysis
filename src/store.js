import {createStore} from 'redux';
import Data from './data/FaceAPI_azure_error_nodetection_extended_small_mlads.json'
import { treeData, treeData2, heatData } from './data/treedata';
import Tree_FaceAPI from './data/Tree_FaceAPI';
import Heat_FaceAPI from './data/Heat_FaceAPI';

export default createStore(function(state, action){
    console.log(state, action)
    //console.log(Heat_FaceAPI())
    if(state === undefined){
        return{
            number:0,
            map:"Treemap",
            data: Data,
            treeData: Tree_FaceAPI(),
            heatData: Heat_FaceAPI(),
            selectedCellsArr:[],
            selectedCellsErrRate: 1.7,
            currentCohort:{key:0, id:0, saved:'All Data', name:'All Data-1', parent:'Treemap', meta:'metadata', filter:'', count: 1, coverage: 5.5, errorRate:5.5, success:1170, error:68, allsize:1238},
            currentNode:{name:"All Data", children:[], level:0},
            isExplanation:false,
            isNodeClicked:false,
            isCohortInfo:false,
            isManageCohort:false,
            isAddCohort:false,
            isOverview:false,
            isLocalExplanation:false,
            isWhatIf:false,
            d3Transform: {k:1, x:window.innerWidth/1.5, y:50},
            cohortTitle:[{detector:"Error Detector", explainer:"Explanation"}],
            max_id:2,
            cohorts:[
                {key:0, id:0, saved:'All Data', name:'All Data', parent:'Treemap', meta:'metadata', filter:'', count: 1, coverage: 5.5, errorRate:5.5, success:1170, error:68, allsize:1238}
            ],
            tempCohorts:[
                {key:0, id:0, saved:'All Data', name:'All Data-1', parent:'Treemap', meta:'metadata', filter:'', count: 1, coverage: 5.5, errorRate:5.5, success:1170, error:68, allsize:1238},
                {key:1, id:1, saved:'All Data', name:'All Data-2', parent:'Heatmap', meta:'metadata', filter:'', count: 1, coverage: 0, errorRate:0, success:0, error:0, allsize:1238}
            ],
            cohortEditTarget: ""
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
    if(action.type === 'CELLCLICKERR'){ 
        return {...state, selectedCellsErrRate:action.selectedCellsErrRate}
    }
    if(action.type === 'NODECLICKED'){
        return {...state, isNodeClicked:action.selectedNode}
    }
    if(action.type === 'CURRENTCNODE'){
        return {...state, currentNode:action.ancesterNode}
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
    // if(action.type === 'UPDATECOHORTINFO'){
    //     return {...state, cohorts:action.updateCohorts}
    // }
    if(action.type === 'LOCALLOADED'){
        return {...state, isLocalExplanation:action.loadedLocalEx}
    }
    if(action.type === 'WHATIF'){
        return {...state, isWhatIf:action.WhatIfClick}
    }
    if(action.type === 'CURRENTCOHORT'){
        return {...state, currentCohort:action.currentCohort}
    }
    if(action.type === 'SHIFTCOHORTEDITARTGET'){
        return {...state, cohortEditTarget:action.cohortEditTarget}
    }
    if(action.type === 'UPDATETEMPCOHORT'){
        return {...state, tempCohorts:action.updateTempCohorts}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())