import React, {Component} from 'react';
import { ActionButton, DefaultButton, Stack, PrimaryButton, IconButton } from 'office-ui-fabric-react';

export default class AddCohort extends Component{
    state = {name:this.props.cohorts[0].name + " Copy", filter:'', baseCohort:this.props.cohorts[0].name}
    render(){
        let allCohorts = [];
        const cohorts = this.props.cohorts;
        allCohorts.push(
            <option value="All data" key="default">All data</option>
        )
        for(let i =0; i < cohorts.length; i++){
            allCohorts.push(
                <option value={cohorts[i].name} key={cohorts[i].id}>{cohorts[i].name}</option>
            )
        }

        const chromeCloseIcon = { iconName: 'ChromeClose' };
        const stackTokens = { childrenGap: 10 };
        const { disabled, checked } = this.props;

        return(
            <div className="panel panel-md dropshadow-sm fixed top-170 right white_bg margine-right-15px">
                <div className="flex-container panel-top">
                    <div className="font-size-18 padding-sm semibold absolute">
                    Create New Cohort
                    </div>
                    <div className="right absolute padding-xsm">
                        <IconButton 
                        onClick={function(e){
                            let _clicked = false;
                            this.props.onCloseAddCohort(_clicked);
                        }.bind(this)}
                        iconProps={chromeCloseIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} />
                    </div>
                </div>
                
                <div className="divider leftRightCenter"></div>
                
                <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm font-size-12">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            Current cohort
                        </div>
                        <div className="input">
                            <form onSubmit={function(e){
                                e.preventDefault()
                                let _name = this.state.name;
                                let _filter = this.state.filter;
                                let maxID = this.props.max_id+1;
                                let newCohorts = this.props.cohorts.concat();
                                let clicked = false;

                                newCohorts.push({key:maxID, id:maxID, name:_name, parent:null, meta:null, filter:_filter})
                                this.props.onSubmitCohort(newCohorts);
                                this.props.onSubmitMaxID(maxID);
                                this.props.onCloseAddCohort(clicked);
                            }.bind(this)}>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                       Base Cohort
                                    </div>
                                    <div className="font-size-14">
                                        <select className="defaultButton" name="baseCohort" id="baseCohort" value={this.state.baseCohort} onChange={function(e){
                                            this.setState({baseCohort: e.target.value})
                                        }.bind(this)}>
                                        {allCohorts}
                                        </select>
                                    </div>
                                </div>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                       Cohort Name
                                    </div>
                                    <div className="font-size-14">
                                        <input className="defaultButton" type="text" name="title" value={this.state.name} onChange={function(e){
                                            this.setState({name: e.target.value})
                                        }.bind(this)}></input>
                                    </div>
                                </div>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Information
                                    </div>
                                    <div className="font-size-14">
                                        No Information
                                    </div>
                                </div>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Filters in the Error Detector
                                    </div>
                                    <div className="font-size-14">
                                        No filters
                                    </div>
                                </div>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Added Filters
                                    </div>
                                    <div className="font-size-14">
                                        No filters
                                    </div>
                                </div>

                                <div className="sub-inner-section padding-top-xsm">
                                    <div className="font-size-12 text-grey">
                                        Filter
                                    </div>
                                    <div className="font-size-14">
                                        <select className="defaultButton" name="filter" id="filter" value={this.state.filter} onChange={function(e){
                                            this.setState({filter: e.target.value})
                                        }.bind(this)}>
                                            <option value="Index">Index</option>
                                            <option value="Data">Data</option>
                                            <option value="Prediction Y">Prediction Y</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="bottom fixed padding-bottom-sm">
                                    <Stack horizontal tokens={stackTokens}>
                                        <DefaultButton text="Cancel" onClick=
                                            {function(e){
                                                let _clicked = false;
                                                this.props.onCloseAddCohort(_clicked);
                                            }.bind(this)}
                                        allowDisabledFocus disabled={disabled} checked={checked} />
                                        <input type="submit" value="Apply" className="primaryButton"/>
                                    </Stack>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}