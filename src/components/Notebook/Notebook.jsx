import React, { Component } from 'react';
import '../../UI.css';
import ErrorDetectorRoot from "../ErrorDetector/ErrorDetectorRoot";
import TopbarRoot from "../Topbar/TopbarRoot";
import ExplanationRoot from "../Explanation/ExplanationRoot"

class Notebook extends Component {
  loadView(){
    const{ isExplanation } = this.props;
    console.log(isExplanation)
    let view = null;
    if(isExplanation === false || isExplanation === undefined){
      view = <ErrorDetectorRoot></ErrorDetectorRoot>
    }else if(isExplanation === true){
      view = <ExplanationRoot></ExplanationRoot>
    }
    return view
  }
  render(){
    return (
        <div className="App">
          <TopbarRoot></TopbarRoot>
          {this.loadView()}
        </div>
    );
  }
}
export default Notebook;
