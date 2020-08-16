import React, {Component} from 'react';

export default class Sidebar extends Component{
    render(){
        let liTags = [];
        let cohorts = this.props.cohorts
        for(let i=0; i<cohorts.length; i++){
            liTags.push(
                <label>
                    <input type="radio" id={cohorts[i].id} name="cohort" value={cohorts[i].name} />
                    {cohorts[i].name}
                </label>
            )
        }
        return(
            <div>
                <div className="panel-md dropshadow-sm fixed top-50 right white_bg">
                    <input type="button" value="Close_Change" onClick={function(e){
                    let _clicked = false;
                    this.props.onCloseChangeCohort(_clicked);
                    }.bind(this)}></input>

                    <form>
                        <div className="radio">
                            {liTags}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}