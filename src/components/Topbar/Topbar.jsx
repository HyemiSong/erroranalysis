import React, {Component} from 'react';
import ManageCohortRoot from './ManageCohortRoot';
import CohortOverviewRoot from './CohortOverviewRoot';
import { ActionButton, IIconProps } from 'office-ui-fabric-react';


export default class Topbar extends Component{
    
    cohortInfo(){
       const{ isCohortInfo } = this.props;
       let manageCohort = null;
        if(isCohortInfo === false){
            manageCohort = null;
        }else if(isCohortInfo === true){
            manageCohort = <CohortOverviewRoot/>
        }
        return manageCohort
    }
    manageCohort(){
        const{ isManageCohort } = this.props;
        let manageCohort = null;
         if(isManageCohort === false){
             manageCohort = null;
         }else if(isManageCohort === true){
             manageCohort = <ManageCohortRoot/>
         }
         return manageCohort
    }
    loadView(){
        const{ isExplanation } = this.props;

        const viewExplanation =
            <div>
                <input type="button" value="View Explanation" onClick={function(e){
                    let _clicked = true;
                    this.props.onClickExplanation(_clicked);
                }.bind(this)}></input>
            </div>

        const backToDetector =
            <div>
                <input type="button" value="Back" onClick={function(e){
                    let _clicked = false;
                    this.props.onClickExplanation(_clicked);
                }.bind(this)}></input>
            </div>

        const featureList =
            <div>
                <input type="button" value="Retrain Error Rates"></input>
            </div>
        
        const mapSelector =
            <div className="input">
                <select name="maps" id="maps" value={this.props.map} 
                    onChange={function(e){
                        this.props.onChange(e.target.value)
                    }.bind(this)}
                >
                    <option value="Treemap">Treemap</option>
                    <option value="Matrixfilter">Matrix Filter</option>
                </select>
            </div>

        let title, explainBTN, backBTN, featureListBTN, mapSelectorBTN= null;

        if(isExplanation === false || isExplanation === undefined){
            title = this.props.cohortTitle[0].detector;
            explainBTN = viewExplanation;
            backBTN = null;
            featureListBTN = featureList;
            mapSelectorBTN = mapSelector;
        }else if(isExplanation === true){
            title = this.props.cohortTitle[0].explainer;
            explainBTN = null;
            backBTN = backToDetector;
            featureListBTN = null;
            mapSelectorBTN = null;
        }
        return {title:title, explainBTN:explainBTN, backBTN:backBTN, mapSelectorBTN:mapSelectorBTN, featureListBTN:featureListBTN}
    }
   
    render(){   
        const { disabled, checked } = this.props;
        const addFriendIcon = { iconName: 'AddFriend' };

        return(
            <div>
                <div className="topbar dropshadow-sm fixed top white_bg">
                    <div className="input absolute left flex-container">
                        <div>
                            {this.loadView().backBTN}
                        </div>
                        <div>
                            {this.loadView().title}
                        </div>
                        {this.loadView().mapSelectorBTN}
                    </div>
                    <div className="input absolute right flex-container">
                        {this.loadView().featureListBTN}
                        <div>
                            {/* <input type="button" value="Manage Cohort" onClick={function(e){
                                let _clicked = true;
                                this.props.onClickManageCohort(_clicked);
                            }.bind(this)}></input> */}
                            <ActionButton text="Manage Cohort" onClick={
                                function(e){
                                    let _clicked = true;
                                    this.props.onClickManageCohort(_clicked);
                                }.bind(this)
                            } iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                        </div>
                        <div>
                            <input type="button" value="View Cohort Overview" onClick={function(e){
                                let _clicked = true;
                                this.props.onClickCohortInfo(_clicked)
                            }.bind(this)}></input>
                        </div>
                         {this.loadView().explainBTN}
                 </div>
                </div>
                {this.cohortInfo()}
                {this.manageCohort()}
            </div>
        )
    }
}