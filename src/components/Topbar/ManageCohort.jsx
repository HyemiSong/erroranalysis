import React, {Component} from 'react';
import AddCohortRoot from './AddCohortRoot'

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
    render(){
        let liTags = [];
        let cohorts = this.props.cohorts
        for(let i=0; i<cohorts.length; i++){
            liTags.push(
                <li key={cohorts[i].id}>
                    {cohorts[i].name}
                </li>
            )
        }
        return(
            <div className="panel-md dropshadow-sm fixed top-50 right white_bg">
                <input type="button" value="Close_AddCohort" onClick={function(e){
                let _clicked = false;
                this.props.onCloseManageCohort(_clicked);
                }.bind(this)}></input>

                <p>
                    <input type="button" value="Create New Cohort" onClick={function(e){
                      let _clicked = true;
                      this.props.onClickAddCohort(_clicked)
                    }.bind(this)}></input>
                </p>
               <nav>
                   <ul>
                       {liTags}
                   </ul>
               </nav>
                {this.createCohort()}
           </div>
        )
    }
}