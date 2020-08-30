import React, { Component } from 'react';
import '../../UI.css';
import ErrorDetectorRoot from "../ErrorDetector/ErrorDetectorRoot";
import TopbarRoot from "../Topbar/TopbarRoot";
import ExplanationRoot from "../Explanation/ExplanationRoot";
import NotebookTab from "../../image/NotebookTop.png"

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
        <div className="Window relative">
          <div className="Notebook notebook-wh leftRightCenter dropshadow-sm">
          <img src={NotebookTab} className="notebooktab" alt=""></img>
            <div className="notebook-inner-wh border absolute">
              <div className="widget-wh border right absolute">
                <div className="topArea">
                  <TopbarRoot></TopbarRoot>
                </div>
                <div className="viewArea">
                  {this.loadView()}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Notebook;
