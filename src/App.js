import React, { Component } from 'react';
import './App.css';
import TreemapRoot from "./components/Treemap/TreemapRoot";
import InstanceviewRoot from "./components/Instanceview/InstanceviewRoot";

import {Route, Switch, Link, NavLink, useParams, Router} from 'react-router-dom';

class App extends Component {
  render(){
    return (
        <div className="App">
          <div className="nav">
            <ul>
              <li><NavLink to="/TreemapRoot">Tree Map</NavLink></li>
              <li><NavLink to="/InstanceviewRoot">Instance View</NavLink></li>
            </ul>
          </div>
            {/* <Switch> */}
              <div className="main">
                  <Route exact path="/" component={TreemapRoot} />
                  <Route path="/TreemapRoot" component={TreemapRoot} />
                  <Route path="/InstanceviewRoot" component={InstanceviewRoot} />
              </div>
            {/* </Switch> */}
        </div>
    );
  }
}
export default App;
