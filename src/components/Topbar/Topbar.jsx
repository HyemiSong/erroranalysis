import React, {Component} from 'react';
import ManageCohortRoot from './ManageCohortRoot';
import CohortOverviewRoot from './CohortOverviewRoot';

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

        let title, explainBTN, backBTN, featureListBTN = null;

        if(isExplanation === false || isExplanation === undefined){
            title = this.props.cohortTitle[0].detector;
            explainBTN = viewExplanation;
            backBTN = null;
            featureListBTN = featureList;
        }else if(isExplanation === true){
            title = this.props.cohortTitle[0].explainer;
            explainBTN = null;
            backBTN = backToDetector;
            featureListBTN = null;
        }
        return {title:title, explainBTN:explainBTN, backBTN:backBTN, featureListBTN:featureListBTN}
    }
   
    render(){
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
                    </div>
                    <div className="input absolute right flex-container">
                        {this.loadView().featureListBTN}
                        <div>
                            <input type="button" value="Manage Cohort" onClick={function(e){
                                let _clicked = true;
                                this.props.onClickManageCohort(_clicked);
                            }.bind(this)}></input>
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