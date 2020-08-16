import React, { Component } from 'react';
import './App.css';
import './UI.css';
import DataExplorerRoot from "./components/DataExplorer/DataExplorerRoot";
import InstanceviewRoot from "./components/Instanceview/InstanceviewRoot";
import GlobalFeatureRoot from "./components/GlobalFeature/GlobalFeatureRoot";
import MapRoot from "./components/Map/MapRoot";
import TopbarRoot from "./components/Topbar/TopbarRoot";

import {Route, Switch, Link, NavLink, useParams, Router} from 'react-router-dom';

class App extends Component {
  render(){
    return (
        <div className="App">
          <TopbarRoot></TopbarRoot>
          <div>
              <div className="nav panel-sm left top-50 fixed">
                <ul>
                  <li><NavLink to="/MapRoot">Error Detector</NavLink></li>
                  <li><NavLink to="/DataExplorerRoot">Data Explorer</NavLink></li>
                  <li><NavLink to="/GlobalFeatureRoot">Global Explanation</NavLink></li>
                  <li><NavLink to="/InstanceviewRoot">Local Explanation</NavLink></li>
                </ul>
              </div>
              <div className="main padding-left-main top-50 fixed">
                  <div className="padding-md">
                    <Route exact path="/" component={MapRoot} />
                    <Route path="/MapRoot" component={MapRoot} />
                    <Route path="/InstanceviewRoot" component={InstanceviewRoot} />
                    <Route path="/DataExplorerRoot" component={DataExplorerRoot} />
                    <Route path="/GlobalFeatureRoot" component={GlobalFeatureRoot} />
                  </div>
              </div>
          </div>
        </div>
    );
  }
}
export default App;
