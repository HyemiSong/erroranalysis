import React, {Component} from 'react';
import { IconButton } from 'office-ui-fabric-react';

export default class SubTopbar extends Component{
    render(){
        const{ currentCohort, tempCohorts } = this.props;
        let filter = (currentCohort.parent === "Treemap") ? currentCohort.filter.length : 2
        const saveIcon = { iconName: 'Save' };
        const { disabled, checked } = this.props;

        return(
            <div className="subTopbar top-100 absolute">
                <div className="padding-sm txt-left flex-container">
                    <div className="font-size-14 bold padding-left-xxsm margin-right-xxxsm padding-top-xxsm">
                         Cohort: {currentCohort.name} ({filter} filters)</div>
                    {/* <div className="font-size-12 fabric-primary-blue margin-right-xsm btn"> Learn more</div> */}
                    <div>
                        <IconButton 
                            onClick={function(e){
                                let _clicked = true;
                                this.props.onClickAddCohort(_clicked)
                                this.props.onClickManageCohort(_clicked);
                            }.bind(this)}
                            iconProps={saveIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}