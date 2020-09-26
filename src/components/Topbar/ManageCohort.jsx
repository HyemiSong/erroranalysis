import React, {Component} from 'react';
import AddCohortRoot from './AddCohortRoot'
import { IconButton } from 'office-ui-fabric-react';
import { ActionButton, DefaultButton, Stack, PrimaryButton } from 'office-ui-fabric-react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

export default class ManageCohort extends Component{
    state = {
        name:this.props.cohorts[0].name + " Copy",
        filter:'',
        baseCohort:this.props.currentCohort.saved,
        savedCohort:this.props.currentCohort.saved,
        _cohortEditTarget:this.props.currentCohort.name,
        returnToDetector: false,
        disabled: false
    }

    createCohort(){
        const{ isAddCohort } = this.props;
        let manageCohort = null;
         if(isAddCohort === false){
             manageCohort = null;
         }else if(isAddCohort === true){
             manageCohort = <AddCohortRoot/>
         }
         return manageCohort
    }

    render(){
        const chromeCloseIcon = { iconName: 'ChromeClose' };
        const addFriendIcon = { iconName: 'Add' };
        const moreIcon = { iconName: 'More' }; 
        const chevronDownIcon = { iconName: 'ChevronDown'};
        const cohortInfoIcon = { iconName: 'Info' };
        const stackTokens = { childrenGap: 10 };
        const { disabled, checked } = this.props;
        const currentCohort = this.props.currentCohort;

        let tempCohortArr = [];
        let savedCohortArr = [];
        let cohorts = this.props.cohorts;
        let tempCohorts = this.props.tempCohorts

        for(let i=0; i<2; i++){
            tempCohortArr.push(
                <li key={tempCohorts[i].id}>
                    <div className="flex-container">
                        <div className="margin-top-xxsm">
                            {this.state.baseCohort + "-" + Number(i+1)} ({tempCohorts[i].parent})
                        </div>
                    </div>
                </li>
            )
        }
        for(let i=0; i<cohorts.length; i++){
            savedCohortArr.push(
                <option key={i} defaultValue={this.state.baseCohort === cohorts[i].name} value={cohorts[i].name}>{cohorts[i].name}</option>
            )
        }
        return(
            <div className="panel panel-md dropshadow-sm fixed top-170 right white_bg margine-right-15px">
                <div className="flex-container panel-top">
                    <div className="font-size-18 padding-sm semibold absolute">
                        Cohort Settings
                    </div>
                    <div className="right absolute padding-xsm">
                        <IconButton 
                            onClick={function(e){
                                let _clicked = false;
                                this.props.onCloseManageCohort(_clicked);
                            }.bind(this)}
                            iconProps={chromeCloseIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} 
                            />
                    </div>
                </div>
                <div className="scroll panel-md-height">
                <div className="divider leftRightCenter"></div>
                <div className="section">
                    <div className="padding-left-sm padding-top-xsm padding-bottom-xsm">
                        <div className="font-size-14 bold">
                            Cohort Creation
                        </div>
                        <ActionButton text="New Cohort" onClick={
                                function(e){
                                    let _clicked = true;
                                    this.props.onClickAddCohort(_clicked)
                                }.bind(this)
                            } iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                    </div>
                 </div>

                 <div className="section">
                    <div className="border-header">
                        <div className="flex-container">
                            <div className="font-size-14 bold padding-left-sm padding-top-xsm padding-bottom-xsm">
                                Cohort Info & Management
                            </div>
                            <div className="margin-left-auto padding-right-xsm padding-top-xxsm">
                                <IconButton
                                    iconProps={chevronDownIcon} title="Chevron" ariaLabel="Chevron" disabled={disabled} checked={checked} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input padding-left-sm">
                        <div className="sub-inner-section padding-top-xsm padding-bottom-sm">
                            <div className="font-size-12 text-grey">
                                Cohort list
                            </div>
                            <nav className="font-size-14 flex-container">
                                <select className="dropDown-lg" name="savedCohort" id="savedCohort" value={this.props._cohortEditTarget}
                                        onChange={function(e){
                                            this.props.onCohortEditTarget(e.target.value)
                                        }.bind(this)}>
                                    {savedCohortArr}
                                </select>
                                <div className="margin-left-auto padding-right-xsm">
                                    <IconButton
                                        iconProps={moreIcon} title="More" ariaLabel="More" disabled={disabled} checked={checked} 
                                    />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="border-header">
                        <div className="flex-container">
                            <div className="font-size-14 bold padding-left-sm padding-top-xsm padding-bottom-xsm">
                                Cohort Shift
                            </div>
                            <div className="margin-left-auto padding-right-xsm padding-top-xxsm">
                                <IconButton
                                    iconProps={chevronDownIcon} title="Chevron" ariaLabel="Chevron" disabled={disabled} checked={checked} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input padding-left-sm">
                            <form onSubmit={function(e){
                                e.preventDefault();
                                let _clicked = false;
                                let index = (currentCohort.parent === "Treemap") ? 0 : 1;
                                let checkBox_Boolean = this.state.returnToDetector;
                                this.props.onCloseManageCohort(_clicked);

                                if(checkBox_Boolean === true &&
                                    currentCohort.parent === "Treemap"){
                                    this.props.onClickExplanation(_clicked);
                                    this.props.onChangeMap(this.props.cohorts[0].parent)
                                }
                                if(checkBox_Boolean === true &&
                                    currentCohort.parent === "Heatmap"){
                                    this.props.onClickExplanation(_clicked);
                                    this.props.onChangeMap(this.props.cohorts[0].parent)
                                }
                                for(let i = 0; i < 2; i++){
                                    let cohortName = this.state.baseCohort + "-" + Number(i+1)
                                    tempCohorts[i] = {key:tempCohorts[i].key, id:tempCohorts[i].id, saved:this.state.baseCohort, name:cohortName, parent:tempCohorts[i].parent, meta:tempCohorts[i].meta, filter:tempCohorts[i].filter, coverage: tempCohorts[i].coverage, errorRate:tempCohorts[i].errorRate, success:tempCohorts[i].success, error:tempCohorts[i].error, allsize:tempCohorts[i].allsize}
                                }
                                const _currentCohort = this.props.currentCohort;
                                    Object.assign(this.props.currentCohort,
                                                    {key:_currentCohort.key, id:_currentCohort.id, saved:this.state.baseCohort, name:this.state.baseCohort + "-" + Number(index+1), parent:_currentCohort.parent, meta:_currentCohort.meta, filter:_currentCohort.filter, coverage:_currentCohort.coverage, errorRate:_currentCohort.errorRate, success:_currentCohort.success, error:_currentCohort.error, allsize:_currentCohort.allsize}
                                )
                                this.props.onUpdateTempCohort(tempCohorts)
                                this.props.onChangeCurrentCohort(_currentCohort)
                            }.bind(this)}>

                            <div className="sub-inner-section padding-top-xsm">
                                <div className="font-size-12 text-grey">
                                    Cohort list
                                </div>
                                <nav className="font-size-14 flex-container">
                                    <select className="dropDown-lg" name="savedCohort" id="savedCohort" value={this.state.baseCohort}
                                            onChange={function(e){
                                                this.setState({baseCohort: e.target.value});
                                            }.bind(this)}>
                                        {savedCohortArr}
                                    </select>
                                    <div className="margin-left-auto padding-right-xsm">
                                        <IconButton
                                            iconProps={cohortInfoIcon} title="Info" ariaLabel="Info" disabled={disabled} checked={checked} 
                                        />
                                    </div>
                                </nav>
                            </div>
                            <div className="sub-inner-section padding-top-xsm padding-bottom-xsm">
                                <div className="font-size-12 text-grey">
                                    Graphs
                                </div>
                                <nav className="font-size-14">
                                    <ul>
                                    {tempCohortArr}
                                    </ul>
                                </nav>
                            </div>
                            <div className="bottom padding-bottom-md margin-top-sm">
                                <Checkbox label="Return to the Error Detector" onChange=
                                    {function(e){
                                        let boolean = this.state.returnToDetector;
                                        let isChecked = (boolean === false) ? true : false;
                                        this.setState({returnToDetector:isChecked})
                                    }.bind(this)}
                                    disabled={this.state.disabled}
                                />
                                <div className="margin-top-xsm"></div>
                                <input type="submit" value="Apply" className="primaryButton"/>
                            </div>
                        </form>
                    </div>
                </div>
                {this.createCohort()}
            </div>
        </div>
        )
    }
}