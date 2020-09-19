import React, {Component} from 'react';
import TreemapRoot from "./TreemapRoot";
import MatrixFilterRoot from "./MatrixFilterRoot";

export default class ErrorDetector extends Component{
    mapSelect(){
        const { map, tempCohorts } = this.props
        let mapType = null;
        let treemap = tempCohorts[0].parent;
        let heatmap = tempCohorts[1].parent;
        if (map === treemap){
            mapType = <TreemapRoot/>
        } else if (map === heatmap){
            mapType = <MatrixFilterRoot/>
        }
        return mapType
    }

    render(){
        return(
            <div className="ErrorDetector">
                <div className="canvas">
                    {this.mapSelect()}
                </div>

            </div>
        )
    }
}