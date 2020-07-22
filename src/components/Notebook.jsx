import React, {Component} from 'react';
export default class Notebook extends Component{
    render(){
        return(
            <div>
                <h1>Notebook Env</h1>
                <div className="bg">
                    {this.props.faceAPI}
                    {this.props.number}
                    {this.props.face}
                </div>
            </div>
        )
    }
}