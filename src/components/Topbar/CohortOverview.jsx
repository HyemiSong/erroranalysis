import React, {Component} from 'react';

export default class CohortOverview extends Component{
    tempCohort(){
        const { map } = this.props
        let tempCohort = null;
        if (map === "Treemap"){
            tempCohort =  this.props.currentCohort.clickedNode.id
        } else if (map === "Matrixfilter"){
            tempCohort = "test"
        }
        return tempCohort
    }
    render(){
        return(
            <div className="panel-md dropshadow-sm fixed top-100 right white_bg margine-right-15px">
                <input type="button" value="Close" onClick={function(e){
                    let _clicked = false;
                    this.props.onClickCohortInfo(_clicked);
                }.bind(this)}></input>

                <div className="panelTitle marginBotton_md">
                Cohort Overview
                </div>

                <div className="subSection marginBotton_md">
                    <div className="subTitle">
                        Error Filtering Map
                    </div>
                    <div>
                        {this.props.map}
                    </div>
                </div>
                <div className="subSection marginBotton_md">
                    <div className="subTitle">
                        Current Cohort
                    </div>
                    <div>
                        Temp.Cohort:
                       {this.tempCohort()}
                    </div>
                </div>
            </div>
        )
    }
}