import React, { Component } from 'react';
// import './App.css';
// import './UI.css';
import DataExplorerRoot from "../DataExplorer/DataExplorerRoot";
import InstanceviewRoot from "../Instanceview/InstanceviewRoot";
import GlobalFeatureRoot from "../GlobalFeature/GlobalFeatureRoot";

import {Route, Switch, Link, NavLink, useParams, Router} from 'react-router-dom';

class Explanation extends Component {
  render(){
    return (
        <div className="App">
          <div>
                <div className="nav panel-sm left top-50 relative">
                  <ul>
                  <div className="flex-container">
                    <li><NavLink to="/DataExplorerRoot">Data Explorer</NavLink></li>
                    <li><NavLink to="/GlobalFeatureRoot">Global Explanation</NavLink></li>
                    <li><NavLink to="/InstanceviewRoot">Local Explanation</NavLink></li>
                    </div>
                  </ul>
              </div>
              <div className="main top-50 fixed">
                  <div className="padding-md">
                    <Route exact path="/" component={DataExplorerRoot} />
                    <Route path="/DataExplorerRoot" component={DataExplorerRoot} />
                    <Route path="/InstanceviewRoot" component={InstanceviewRoot} />
                    <Route path="/GlobalFeatureRoot" component={GlobalFeatureRoot} />
                  </div>
              </div>
          </div>
        </div>
    );
  }
}
export default Explanation;
