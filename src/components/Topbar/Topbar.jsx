import React, {Component} from 'react';
import ManageCohortRoot from './ManageCohortRoot';
import WhatIfPanelRoot from './WhatIfPanelRoot';
import CohortOverviewRoot from './CohortOverviewRoot';
import { ActionButton, initializeIcons } from 'office-ui-fabric-react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { FontSizes } from '@uifabric/fluent-theme';

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
    whatIf(){
        const{ isWhatIf } = this.props;
        let whatIfPanel = null;
         if(isWhatIf === false){
            whatIfPanel = null;
         }else if(isWhatIf === true){
            whatIfPanel = <WhatIfPanelRoot/>
         }
         return whatIfPanel
    }

    render(){
        initializeIcons();
        const { disabled, checked } = this.props;
        const bulletedListIcon = { iconName: 'BulletedList' };
        const settingsIcon = { iconName: 'Settings' };
        const cohortInfoIcon = { iconName: 'Info' };
        const{ isExplanation, isLocalExplanation, currentCohort } = this.props;
       
        const viewExplanation =
            <div className="padding-top-xxsm padding-left-xsm ">
                <PrimaryButton text="Explanation" onClick={
                    function(e){
                        let _clicked = true;
                        this.props.onClickExplanation(_clicked);
                    }.bind(this)
                } allowDisabledFocus disabled={disabled} checked={checked} />
            </div>

        const backToDetector =
            <div>
                <input type="button" className="backbutton padding-left-xsm" value="< Error Detector" onClick={function(e){
                    let _clicked = false;
                    this.props.onClickExplanation(_clicked);
                }.bind(this)}></input>
            </div>

        const featureList =
            <div>
                <ActionButton text="Feature List" onClick={
                    function(e){
                        // let _clicked = true;
                        // this.props.onClickExplanation(_clicked);
                    }.bind(this)
                } iconProps={bulletedListIcon} allowDisabledFocus disabled={disabled} checked={checked} />
            </div>

        const whatIfPanel =
            <div>
                <ActionButton text="What-If" onClick={
                    function(e){
                        let _clicked = true;
                        let _unclicked = false;
                        this.props.onClickManageCohort(_unclicked);
                        this.props.onClickCohortInfo(_unclicked)
                        this.props.onWhatIfClick(_clicked);
                    }.bind(this)
                } iconProps={bulletedListIcon} allowDisabledFocus disabled={disabled} checked={checked} />
            </div>

        const mapSelector =
            <div className="input padding-left-xsm">
                <select name="maps" id="maps" value={this.props.map} 
                    onChange={function(e){
                        this.props.onChangeMap(e.target.value)
                    }.bind(this)}
                    >
                    <option value="Treemap">Tree map</option>
                    <option value="Heatmap">Heat map</option>
                </select>
            </div>

        let title, explainBTN, backBTN, featureListBTN, mapSelectorBTN, whatIfPanelBTN= null;

        if(isExplanation === false || isExplanation === undefined){
            title = this.props.cohortTitle[0].detector;
            explainBTN = viewExplanation;
            backBTN = null;
            featureListBTN = featureList;
            mapSelectorBTN = mapSelector;

        }else if(isExplanation === true){
            title = this.props.cohortTitle[0].explainer + ":" + " " + currentCohort.name;
            explainBTN = null;
            backBTN = backToDetector;
            featureListBTN = null;
            mapSelectorBTN = null;

            if(isLocalExplanation === true){
                whatIfPanelBTN = whatIfPanel;
            }
        }

        return(
            <div>
                <div className="breadcrumb font-size-12 flex-container margin-top-xxsm">
                   <div>{backBTN}</div>
                </div>
                <div className="topbar margine-left-1px border white_bg relative">
                    <div className="padding-left-sm input absolute left flex-container topBottomCenter">
                        <div className="section bold" style={{ fontSize: FontSizes.size18 }}>
                            {title}
                        </div>
                        {mapSelectorBTN}
                    </div>
                    <div className="input absolute right flex-container padding-xsm">
                        <div className="padding-right-xsm">
                            {whatIfPanelBTN}
                            {featureListBTN}
                        </div>
                        <div className="padding-right-xsm">
                            <ActionButton text="Cohort Setting" onClick={
                                function(e){
                                    let _clicked = true;
                                    let _unclicked = false;
                                    this.props.onClickManageCohort(_clicked);
                                    this.props.onClickCohortInfo(_unclicked);
                                    this.props.onWhatIfClick(_unclicked);
                                }.bind(this)
                            } iconProps={settingsIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                        </div>
                        <div className="padding-right-xsm">
                            <ActionButton text="Cohort Info" onClick={
                                function(e){
                                    let _clicked = true;
                                    let _unclicked = false;
                                    this.props.onClickManageCohort(_unclicked);
                                    this.props.onClickCohortInfo(_clicked);
                                    this.props.onWhatIfClick(_unclicked);
                                }.bind(this)
                            } iconProps={cohortInfoIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                        </div>
                         {explainBTN}
                 </div>
                </div>
                {this.cohortInfo()}
                {this.manageCohort()}
                {this.whatIf()}
            </div>
        )
    }
}