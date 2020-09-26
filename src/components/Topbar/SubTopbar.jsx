import React, {Component} from 'react';

export default class SubTopbar extends Component{
    render(){
        const{ currentCohort, tempCohorts } = this.props;
        let filter = (currentCohort.parent === "Treemap") ? currentCohort.filter.length : 2
        return(
            <div className="subTopbar top-100 absolute">
                <div className="padding-sm txt-left flex-container">
                    <div className="font-size-14 bold padding-left-xxsm margin-left-xxxsm margin-right-xsm">
                         Cohort: {currentCohort.name} ({filter} filters)</div>
                    <div className="font-size-12 fabric-primary-blue margin-right-xsm btn"> Learn more</div>
                    <div className="font-size-12 fabric-primary-blue btn">  Save to the cohort list</div>
                </div>
            </div>
        )
    }
}