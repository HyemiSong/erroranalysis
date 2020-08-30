import React, {Component} from 'react';
import Mockup from '../../image/globalExplainer.png';

export default class GlobalFeature extends Component{
    state={size:1, selectedMap:"dasdfa"}
    render(){
        return(
            <div>
                <img src={Mockup} className="mockup padding-top-md"></img>
            </div>
        )
    }
}