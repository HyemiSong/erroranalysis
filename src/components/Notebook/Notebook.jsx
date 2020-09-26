import React, { Component } from 'react';
import '../../UI.css';
import ErrorDetectorRoot from "../ErrorDetector/ErrorDetectorRoot";
import TopbarRoot from "../Topbar/TopbarRoot";
import ExplanationRoot from "../Explanation/ExplanationRoot";
import NotebookTab from "../../image/NotebookTop.png";
import SubTopbarRoot from "../Topbar/SubTopbarRoot";

class Notebook extends Component {
  loadView(){
    const{ isExplanation } = this.props;
    let view = null;
    let subTBView = null;
    if(isExplanation === false || isExplanation === undefined){
      view = <ErrorDetectorRoot></ErrorDetectorRoot>
      subTBView = <SubTopbarRoot></SubTopbarRoot>
    }else if(isExplanation === true){
      view = <ExplanationRoot></ExplanationRoot>
      subTBView = null;
    }
    return {view:view, subTBView:subTBView}
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
                  {this.loadView().view}
                  {this.loadView().subTBView}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Notebook;
