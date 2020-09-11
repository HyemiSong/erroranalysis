import React, {Component} from 'react';
import Mockup from '../../image/globalExplainer.png';

export default class GlobalFeature extends Component{
    state={size:1, selectedMap:"dasdfa"}
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