import React, {Component} from 'react';
import Mockup from '../../image/localExplainer.png';

export default class Instanceview extends Component{
    render(){
        return(
            <div>
                <img src={Mockup} className="mockup padding-top-md"></img>
            </div>
        )
    }
}