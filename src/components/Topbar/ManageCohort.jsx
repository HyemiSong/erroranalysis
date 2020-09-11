import React, {Component} from 'react';
import AddCohortRoot from './AddCohortRoot'
import { IconButton } from 'office-ui-fabric-react';
import { ActionButton, DefaultButton, Stack, PrimaryButton } from 'office-ui-fabric-react';

export default class ManageCohort extends Component{
    state = {name:this.props.cohorts[0].name + " Copy", filter:'', baseCohort:this.props.cohorts[0].name}
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
    å  
    render(){
        let tempCohort = [];
        let savedCohort = [];
        let cohorts = this.props.cohorts;
        let currentCohort = cohorts[0].name

        for(let i=0; i<2; i++){
            tempCohort.push(
                    <li key={cohorts[i].id}>
                        <label>
                            <input type="radio" checked={this.state.baseCohort === cohorts[i].name} id={cohorts[i].id} name="cohort" value={cohorts[i].name} 
                            onChange={(e) => this.setState({ baseCohort: e.target.value })} />
                            {cohorts[i].name}
                        </label>
                    </li>
            )
        }
        for(let i=2; i<cohorts.length; i++){
            savedCohort.push(
                <li key={cohorts[i].id}>
                    <label>
                        <input type="radio" id={cohorts[i].id} name="cohort" value={cohorts[i].name} />
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

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Recent
                                    </div>
                                    <nav className="font-size-14">
                                        <ul>
                                        {tempCohort}
                                        </ul>
                                    </nav>
                                </div>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Saved by user (All)
                                    </div>
                                    <nav className="font-size-14">
                                        <ul>
                                        {savedCohort}
                                        </ul>
                                    </nav>
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
                                                this.props.onCloseManageCohort(_clicked);
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