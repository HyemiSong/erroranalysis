import React, {Component} from 'react';

export default class GlobalFeature extends Component{
    state={size:1, selectedMap:"dasdfa"}
    render(){
        return(
            <div>
                <h1>Aggragate Feature Importance</h1>
                <div className="input">
                    <input type="button" value="+" onClick={function(){
                                this.props.onClick(this.state.size);
                            }.bind(this)}></input>
                    <input type="text" value={this.state.size} onChange={function(e){
                                this.setState({size:Number(e.target.value)});
                            }.bind(this)}></input>
                </div>
                <div className="display">
                    <h1>display</h1>
                    <input type="text" value={this.props.number} readOnly></input>
                </div>
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
                     <p><input type="text" value={this.props.map} readOnly></input></p>
                 </div>
                </div>
            </div>
        )
    }
}