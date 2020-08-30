import React, {Component} from 'react';
import TreemapRoot from "./TreemapRoot";
import MatrixFilterRoot from "./MatrixFilterRoot";

export default class ErrorDetector extends Component{
    mapSelect(){
        const { map } = this.props
        let mapType = null;
        if (map === "Treemap"){
            mapType = <TreemapRoot/>
        } else if (map === "Matrixfilter"){
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