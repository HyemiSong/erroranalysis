import React, {Component} from 'react';
export default class Instanceview extends Component{
    render(){
        return(
            <div>
                <h1>Instanceview</h1>
                <div className="bg">
                    {this.props.number}
                </div>
            </div>
        )
    }
}