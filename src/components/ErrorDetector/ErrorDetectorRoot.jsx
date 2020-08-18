import React, {Component} from "react";
import ErrorDetector from "../../containers/ErrorDetector"

export default class ErrorDetectorRoot extends Component{
    render(){
        return(
            <div>
                <ErrorDetector></ErrorDetector>
            </div>
        )
    }
}