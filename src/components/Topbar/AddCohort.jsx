import React, {Component} from 'react';

export default class AddCohort extends Component{
    state = {name:'', filter:''}

    render(){
        return(
            <div className="panel-md dropshadow-sm fixed top-50 right white_bg">
                <div className="input">
                    <form onSubmit={function(e){
                        e.preventDefault()
                        let _name = this.state.name;
                        let _filter = this.state.filter;
                        let maxID = this.props.max_id+1;
                        let newCohorts = this.props.cohorts.concat();
                        let clicked = false;
                        newCohorts.push({id:maxID, name:_name, parent:null, meta:null, filter:_filter})
                        this.props.onSubmitCohort(newCohorts);
                        this.props.onSubmitMaxID(maxID);
                        this.props.onCloseAddCohort(clicked);
                        console.log(_name,_filter,maxID, newCohorts)
                    }.bind(this)}>
                        <p>
                        <input type="text" name="title" placeholder="Write Cohort Name" value={this.state.name} onChange={function(e){
                            this.setState({name: e.target.value})
                        }.bind(this)}></input>
                        </p>
                        <p>
                        <select name="filter" id="filter" value={this.state.filter} onChange={function(e){
                            this.setState({filter: e.target.value})
                        }.bind(this)}>
                            <option value="Index">Index</option>
                            <option value="Data">Data</option>
                            <option value="Prediction Y">Prediction Y</option>
                        </select>
                        </p>
                        <p>
                            <input type="submit" />
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}