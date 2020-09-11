import React, { Component } from 'react';
import DataExplorerRoot from "../DataExplorer/DataExplorerRoot";
import InstanceviewRoot from "../Instanceview/InstanceviewRoot";
import GlobalFeatureRoot from "../GlobalFeature/GlobalFeatureRoot";
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

class Explanation extends Component {
  render(){
    return (
        <div className="App">
          <div>
                <div className="nav panel-sm left relative">
                  <div className="main fixed padding-top-sm padding-left-md">
                  <Pivot aria-label="Large Link Size Pivot Example" linkSize={PivotLinkSize.small}>
                    <PivotItem headerText="Data Explorer">
                      <DataExplorerRoot/>
                    </PivotItem>
                    <PivotItem headerText="Global Explanation">
                      <GlobalFeatureRoot/>
                    </PivotItem>
                    <PivotItem headerText="Local Explanation">
                      <InstanceviewRoot/>
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
