import React, {Component} from 'react';
import Mockup from '../../image/dataExplorer.png'

export default class DataExplorer extends Component{
    state={size:1, selectedMap:null}
    render(){
        return(
            <div>
                <img src={Mockup} alt="" className="mockup padding-top-xxsm" onLoad={
                    function(e){
                        let _loaded = false;
                        this.props.onLoad(_loaded);
                    }.bind(this)
                }></img>
            </div>
        )
    }
}