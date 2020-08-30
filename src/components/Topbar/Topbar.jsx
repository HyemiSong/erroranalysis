import React, {Component} from 'react';
import ManageCohortRoot from './ManageCohortRoot';
import CohortOverviewRoot from './CohortOverviewRoot';
import { ActionButton, initializeIcons } from 'office-ui-fabric-react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { FontSizes } from '@uifabric/fluent-theme';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';


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
   
    render(){
        initializeIcons();
        const { disabled, checked } = this.props;
        const addFriendIcon = { iconName: 'AddFriend' };
        const stackTokens = { childrenGap: 40 };
        const{ isExplanation } = this.props;
       
        const dropdownStyles = {
            dropdown: { width: 300 },
          };
                
        const options = [
            { key: 'Treemap', text: 'Treemap' },
            { key: 'Matrixfilter', text: 'Matrix Filter' }
        ];

        const viewExplanation =
            <div>
                <PrimaryButton text="Explanation" onClick={
                    function(e){
                        let _clicked = true;
                        this.props.onClickExplanation(_clicked);
                    }.bind(this)
                } allowDisabledFocus disabled={disabled} checked={checked} />
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
                <ActionButton text="Feature List" onClick={
                    function(e){
                        // let _clicked = true;
                        // this.props.onClickExplanation(_clicked);
                    }.bind(this)
                } iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked} />
            </div>
        
        const mapSelector =
            <div className="input">
                {/* <Dropdown
                placeholder="Select an option"
                label="Basic uncontrolled example"
                options={options}
                styles={dropdownStyles}
                onChange={function(e){
                    this.props.onChange(e.target.value)
                }.bind(this)} /> */}

                <select name="maps" id="maps" value={this.props.map} 
                    onChange={function(e){
                        this.props.onChange(e.target.value)
                    }.bind(this)}>
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
            
        return(
            <div>
                <div className="breadcrumb">
                   {backBTN}
                </div>
                <div className="topbar margine-left-1px border white_bg relative">
                    <div className="input absolute left flex-container topBottomCenter">
                        <div className="section" style={{ fontSize: FontSizes.size18 }}>
                            {title}
                        </div>
                        {mapSelectorBTN}
                    </div>
                    <div className="input absolute right flex-container">
                        {featureListBTN}
                        <div>
                            <ActionButton text="Cohort Setting" onClick={
                                function(e){
                                    let _clicked = true;
                                    this.props.onClickManageCohort(_clicked);
                                }.bind(this)
                            } iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                        </div>
                        <div>
                            <ActionButton text="Cohort Info" onClick={
                                function(e){
                                    let _clicked = true;
                                    this.props.onClickCohortInfo(_clicked)
                                }.bind(this)
                            } iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                        </div>
                         {explainBTN}
                 </div>
                </div>
                {this.cohortInfo()}
                {this.manageCohort()}
            </div>
        )
    }
}