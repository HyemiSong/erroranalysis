import React, {Component} from 'react';
import TreemapRoot from "./TreemapRoot";
import MatrixFilterRoot from "./MatrixFilterRoot";

export default class ErrorDetector extends Component{
    mapSelect(){
        const { map, cohorts } = this.props
        let mapType = null;
        let treemap = cohorts[0].parent;
        let heatmap = cohorts[1].parent;
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