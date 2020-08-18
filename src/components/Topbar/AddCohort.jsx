import React, {Component} from 'react';

export default class AddCohort extends Component{
    state = {name:'', filter:'', baseCohort:''}
    render(){
        let allCohorts = [];
        const cohorts = this.props.cohorts;
        allCohorts.push(
            <option value="All data" key="default">All data</option>
        )
        for(let i =0; i < cohorts.length; i++){
            allCohorts.push(
                <option value={cohorts[i].name} key={cohorts[i].id}>{cohorts[i].name}</option>
            )
        }
        return(
            <div className="panel-md dropshadow-sm fixed top-50 right white_bg">
                <input type="button" value="Back" onClick={function(e){
                    let _clicked = false;
                    this.props.onClickAddCohort(_clicked)
                }.bind(this)}></input>

                <div className="panelTitle marginBotton_md">
                    Create New Cohort
                </div>
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
                    }.bind(this)}>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Base Cohort
                            </div>
                            <p>
                                <select name="baseCohort" id="baseCohort" value={this.state.baseCohort} onChange={function(e){
                                    this.setState({baseCohort: e.target.value})
                                }.bind(this)}>
                                {allCohorts}
                                </select>
                            </p>
                        </div>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Cohort Name
                            </div>
                            <p>
                            <input type="text" name="title" placeholder="Write Cohort Name" value={this.state.name} onChange={function(e){
                                this.setState({name: e.target.value})
                            }.bind(this)}></input>
                            </p>
                        </div>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Information
                            </div>
                            <div className="placeholder textBox">
                                No Information
                            </div>
                        </div>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Filters in the Error Detector
                            </div>
                            <div className="placeholder">
                                No filters
                            </div>
                        </div>

                        <div className="subSection marginBotton_md">
                            <div className="subTitle">
                                Added Filters
                            </div>
                            <div className="placeholder">
                                No filters
                            </div>
                        </div>

                        <div className="subSection">
                            <div className="subTitle">
                                Filter
                            </div>
                            <p>
                            <select name="filter" id="filter" value={this.state.filter} onChange={function(e){
                                this.setState({filter: e.target.value})
                            }.bind(this)}>
                                <option value="Index">Index</option>
                                <option value="Data">Data</option>
                                <option value="Prediction Y">Prediction Y</option>
                            </select>
                            </p>
                        </div>

                        <p>
                            <input type="submit" />
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}