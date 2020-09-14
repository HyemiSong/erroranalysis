import React, {Component} from 'react';
import AddCohortRoot from './AddCohortRoot'
import { IconButton } from 'office-ui-fabric-react';
import { ActionButton, DefaultButton, Stack, PrimaryButton } from 'office-ui-fabric-react';

export default class ManageCohort extends Component{
    state = {name:this.props.cohorts[0].name + " Copy", filter:'', baseCohort:this.props.currentCohort.name, selectedLabel: 0}
    
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
        let tempCohort = [];
        let savedCohort = [<li key={-1}>
        <label>
            <input type="radio" checked={this.state.baseCohort === "All Data"} id={-1} name="cohort" value={"All Data"}
             onChange={(e) => this.setState({ baseCohort: e.target.value, selectedLabel: -1 })} />
             All Data
        </label>
    </li>];
        let cohorts = this.props.cohorts;
        let currentCohort = this.props.currentCohort.name;

        for(let i=0; i<2; i++){
            tempCohort.push(
                    // <li key={cohorts[i].id}>
                    //         {cohorts[i].name} ({cohorts[i].parent})
                    // </li>
                    <li key={cohorts[i].id}>
                        <label>
                            <input type="radio" checked={this.state.baseCohort === cohorts[i].name} id={cohorts[i].id} name="cohort" value={cohorts[i].name} 
                            onChange={(e) => this.setState({ baseCohort: e.target.value, selectedLabel: cohorts[i].id })} />
                            {cohorts[i].name} ({cohorts[i].parent})
                        </label>
                    </li>
            )
        }
        for(let i=2; i<cohorts.length; i++){
            savedCohort.push(
                <li key={cohorts[i].id}>
                    <label>
                        <input type="radio" id={cohorts[i].id} name="cohort" value={cohorts[i].name} 
                        onChange={(e) => this.setState({ baseCohort: e.target.value, selectedLabel: cohorts[i].id })} />
                        {cohorts[i].name}
                    </label>
                </li>
            )
        }

        const chromeCloseIcon = { iconName: 'ChromeClose' };
        const addFriendIcon = { iconName: 'Add' };
        const stackTokens = { childrenGap: 10 };
        const { disabled, checked } = this.props;
        
        return(
            <div className="panel panel-md dropshadow-sm fixed top-100 right white_bg margine-right-15px">
                <div className="flex-container panel-top">
                    <div className="font-size-18 padding-sm semibold absolute">
                    Cohort Setting
                    </div>
                    <div className="right absolute padding-xsm">
                        <IconButton 
                        onClick={function(e){
                            let _clicked = false;
                            this.props.onCloseManageCohort(_clicked);
                        }.bind(this)}
                        iconProps={chromeCloseIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} />
                    </div>
                </div>

                <div className="divider leftRightCenter"></div>
                <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            New cohort creation
                        </div>
                        <ActionButton text="Add Cohort" onClick={
                                function(e){
                                    let _clicked = true;
                                    this.props.onClickAddCohort(_clicked)
                                }.bind(this)
                            } iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked} />
                    </div>
                 </div>

                 <div className="divider leftRightCenter"></div>
                 <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            Cohort selection
                        </div>

                        <div className="input">
                            <form onSubmit={function(e){
                                    e.preventDefault();
                                    let _clicked=false;
                                    this.props.onCloseManageCohort(_clicked);
                                }.bind(this)}>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Current cohort
                                    </div>
                                    <nav className="font-size-14">
                                        <ul>
                                        {currentCohort}
                                        </ul>
                                    </nav>
                                </div>

                                <div className="sub-inner-section padding-top-xsm padding-bottom-xsm">
                                    <div className="font-size-12 text-grey">
                                        Temporary cohorts
                                    </div>
                                    <nav className="font-size-14">
                                        <ul>
                                        {tempCohort}
                                        </ul>
                                    </nav>
                                </div>

                                <div className="divider leftRightCenter"></div>
                                    <div className="section padding-top-xsm padding-bottom-xsm">
                                    <div className="font-size-14 bold">
                                        Root data shift
                                    </div>
                                    <div className="sub-inner-section padding-top-xsm">
                                        <div className="font-size-12 text-grey">
                                            All saved cohorts
                                        </div>
                                        <nav className="font-size-14">
                                            <ul>
                                            {savedCohort}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="bottom fixed padding-bottom-sm">
                                    <Stack horizontal tokens={stackTokens}>
                                        <DefaultButton text="Cancel" onClick=
                                            {function(e){
                                                let _clicked = false;
                                                this.props.onCloseManageCohort(_clicked);
                                            }.bind(this)}
                                        allowDisabledFocus disabled={disabled} checked={checked} />
                                        <PrimaryButton text="Apply" onClick=
                                            {function(e){
                                                let _clicked = false;
                                                let cohortName = this.state.baseCohort;
                                                let index;
                                                this.props.onCloseManageCohort(_clicked);

                                                if(this.state.baseCohort !== this.props.currentCohort.name &&
                                                    this.state.baseCohort !== this.props.cohorts[1].name){
                                                    this.props.onClickExplanation(_clicked);
                                                    this.props.onChangeMap(this.props.cohorts[0].parent)
                                                    index = 0;
                                                }
                                                if(this.state.baseCohort !== this.props.currentCohort.name &&
                                                    this.state.baseCohort !== this.props.cohorts[0].name){
                                                    this.props.onClickExplanation(_clicked);
                                                    this.props.onChangeMap(this.props.cohorts[1].parent)
                                                    index = 1;
                                                }
                                                if(this.state.baseCohort !== this.props.currentCohort.name &&
                                                    this.state.baseCohort !== this.props.cohorts[0].name &&
                                                    this.state.baseCohort !== this.props.cohorts[1].name){
                                                    this.props.onClickExplanation(_clicked);
                                                    this.props.onChangeMap(this.props.cohorts[0].parent)
                                                    index = 0;
                                                }

                                                const _cohorts = Array.from(this.props.cohorts);
                                                if(this.state.selectedLabel > 1){
                                                    _cohorts[0] = {key:0, id:0, name:this.state.baseCohort + "-1", parent:_cohorts[0].parent, meta:_cohorts[0].meta, filter:_cohorts[0].filter, coverage: _cohorts[0].coverage, errorRate:_cohorts[0].errorRate, success:_cohorts[0].success, error:_cohorts[0].error, allsize:_cohorts[0].allsize}
                                                    _cohorts[1] = {key:1, id:1, name:this.state.baseCohort + "-2", parent:_cohorts[1].parent, meta:_cohorts[1].meta, filter:_cohorts[1].filter, coverage: _cohorts[1].coverage, errorRate:_cohorts[1].errorRate, success:_cohorts[1].success, error:_cohorts[1].error, allsize:_cohorts[1].allsize}
                                                }
                                          
                                                this.props.onChangeCohortName(_cohorts)
                                                console.log(_cohorts)
                                                console.log(this.props.currentCohort)
                                                console.log(this.state.baseCohort)
                                            }.bind(this)}
                                        allowDisabledFocus disabled={disabled} checked={checked} />
                                    </Stack>
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