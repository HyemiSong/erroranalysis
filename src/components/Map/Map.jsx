import React, {Component} from 'react';
import TreemapRoot from "./TreemapRoot";
import MatrixFilterRoot from "./MatrixFilterRoot";

export default class Map extends Component{
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
            <div>
                 <h1>Map Selection</h1>
                 <div className="input">
                     <select name="maps" id="maps" value={this.props.map} 
                        onChange={function(e){
                            this.props.onChange(e.target.value)
                        }.bind(this)}
                     >
                         <option value="Treemap">Treemap</option>
                         <option value="Matrixfilter">Matrix Filter</option>
                     </select>
                     {/* <p><input type="text" value={this.props.map} readOnly></input></p> */}
                 </div>
                 <div>
                {this.mapSelect()}
                 </div>

            </div>
        )
    }
}