import React, { Component } from 'react';
// import './App.css';
// import './UI.css';
import DataExplorerRoot from "../DataExplorer/DataExplorerRoot";
import InstanceviewRoot from "../Instanceview/InstanceviewRoot";
import GlobalFeatureRoot from "../GlobalFeature/GlobalFeatureRoot";
import {Route, Switch, Link, NavLink, useParams, Router} from 'react-router-dom';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';

class Explanation extends Component {
  render(){
    return (
        <div className="App">
          <div>
                <div className="nav panel-sm left relative">
                  <div className="main top-180 fixed">
                  <Pivot aria-label="Large Link Size Pivot Example" linkSize={PivotLinkSize.small}>
                    <PivotItem headerText="My Files">
                      <DataExplorerRoot/>
                    </PivotItem>
                    <PivotItem headerText="Recent">
                      <InstanceviewRoot/>
                    </PivotItem>
                    <PivotItem headerText="Shared with me">
                      <GlobalFeatureRoot/>
                    </PivotItem>
                  </Pivot>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}
export default Explanation;
