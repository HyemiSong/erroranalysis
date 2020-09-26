import React, {Component} from 'react';
import { IconButton } from 'office-ui-fabric-react';
import WhatIfImg from '../../image/whatif.png';

export default class WhatIfPanel extends Component{
    render(){
        const chromeCloseIcon = { iconName: 'ChromeClose'};
        const { disabled, checked } = this.props;

        return(
            <div className="panel panel-md dropshadow-sm fixed top-170 right white_bg margine-right-15px">
            <div className="flex-container panel-top">
                <div className="font-size-18 padding-sm semibold absolute">
                What-If Analysis
                </div>
                <div className="right absolute padding-xsm">
                    <IconButton 
                    onClick={function(e){
                        let _clicked = false;
                        this.props.onCloseWhatIf(_clicked);
                    }.bind(this)}
                    iconProps={chromeCloseIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} />
                </div>
            </div>

            <div className="divider leftRightCenter"></div>
                <img className="whatif padding-top-xsm" src={WhatIfImg} alt=""></img>
            </div>
        ) 
    }
}