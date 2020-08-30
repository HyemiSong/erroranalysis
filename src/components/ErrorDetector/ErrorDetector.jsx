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
            <div className="relative top-30 col-lg">
                <div className="canvas leftRightCenter">
                    <div>
                    {this.mapSelect()}
                    </div>
                </div>

            </div>
        )
    }
}