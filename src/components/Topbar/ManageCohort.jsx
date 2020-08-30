import React, {Component} from 'react';
import AddCohortRoot from './AddCohortRoot'
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

export default class ManageCohort extends Component{
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
                        <input type="radio" id={cohorts[i].id} name="cohort" value={cohorts[i].name} />
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

        const { disabled, checked } = this.props;
        
        return(
            <div className="panel-md dropshadow-sm fixed top-50 right white_bg">

            <DefaultButton text="Close" onClick={
                function(e){
                    let _clicked = false;
                    this.props.onCloseManageCohort(_clicked);
                }.bind(this)
            } allowDisabledFocus disabled={disabled} checked={checked} />

                {/* <input type="button" value="Close" onClick={function(e){
                    let _clicked = false;
                    this.props.onCloseManageCohort(_clicked);
                }.bind(this)}></input> */}

                <div className="panelTitle marginBotton_md">
                    Manage Cohort
                </div>
                    <p>
                        <input type="button" value="Create New Cohort" onClick={function(e){
                        let _clicked = true;
                        this.props.onClickAddCohort(_clicked)
                        }.bind(this)}></input>
                    </p>
                    <div className="input">
                        <form onSubmit={function(e){
                            e.preventDefault();
                            let _clicked=false;
                            this.props.onCloseManageCohort(_clicked);
                        }.bind(this)}>
                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Current cohort
                            </div>
                            <nav>
                                <ul>
                                {currentCohort}
                                </ul>
                            </nav>
                        </div>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Recent
                            </div>
                            <nav>
                                <ul>
                                {tempCohort}
                                </ul>
                            </nav>
                        </div>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Saved by user (All)
                            </div>
                            <nav>
                                <ul>
                                {savedCohort}
                                </ul>
                            </nav>
                        </div>
                        <p>
                            <input type="submit"/>
                        </p>
                    </form>
                        {this.createCohort()}
                </div>
           </div>
        )
    }
}