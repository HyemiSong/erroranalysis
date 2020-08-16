import React, {Component} from 'react';
import ChangeCohortRoot from './ChangeCohortRoot';
import ManageCohortRoot from './ManageCohortRoot';

export default class Topbar extends Component{
    
    changeCohort(){
       const{ isChangeCohort } = this.props;
       let manageCohort = null;
        if(isChangeCohort === false){
            manageCohort = null;
        }else if(isChangeCohort === true){
            manageCohort = <ChangeCohortRoot/>
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

    render(){
        return(
            <div>
                <div className="topbar dropshadow-sm fixed top white_bg">
                    <div className="input absolute left flex-container">
                        <div>
                            {this.props.cohortTitle}
                        </div>
                        <div>
                            <input type="button" value="Change Cohort" onClick={function(e){
                                let _clicked = true;
                                this.props.onClickChangeCohort(_clicked);
                            }.bind(this)}></input>
                        </div>
                    </div>
                    <div className="input absolute right flex-container">
                        <div>
                            <input type="button" value="Manage Cohort" onClick={function(e){
                                let _clicked = true;
                                this.props.onClickManageCohort(_clicked);
                            }.bind(this)}></input>
                        </div>
                        <div>
                            <input type="button" value="View Cohort Info"></input>
                        </div>
                        <div>
                            <input type="button" value="Feature List"></input>
                        </div>
                 </div>
                </div>
                {this.changeCohort()}
                {this.manageCohort()}
            </div>
        )
    }
}