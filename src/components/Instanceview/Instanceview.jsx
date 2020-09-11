import React, {Component} from 'react';
import Mockup from '../../image/localExplainer.png';

export default class Instanceview extends Component{
    render(){
        return(
            <div>
                <img src={Mockup} alt="" className="mockup padding-top-xxsm" onLoad={
                    function(e){
                        let _loaded = true;
                        this.props.onLoad(_loaded);
                    }.bind(this)
                }></img>
            </div>
        )
    }
}