import React, {Component} from 'react';

export default class SubTopbar extends Component{
    render(){
        const{ data, currentCohort, tempCohorts } = this.props;
        console.log(tempCohorts)
        return(
            <div className="subTopbar relative">
                <div className="absolute padding-sm txt-left">
                    <div className="font-size-14 bold padding-left-xxsm margin-left-xxxsm">
                         Cohort: {currentCohort.name}
                    </div>
                </div>
            </div>
        )
    }
}