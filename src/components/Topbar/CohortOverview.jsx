import React, {Component} from 'react';
import { IconButton } from 'office-ui-fabric-react';
import CoverageImg from '../../image/coverage.png';
import ErrorRateImg from '../../image/errorrate.png';

export default class CohortOverview extends Component{
    tempCohort(map, tempCohorts){
        let index=1;
        if (map === "Treemap"){
            index = 0;
        } else if (map === "Matrixfilter"){
            index = 1;
        }
        return {coverage:tempCohorts[index].coverage, errorRate:tempCohorts[index].errorRate}
    }
    render(){          
        const chromeCloseIcon = { iconName: 'ChromeClose'};
        const saveIcon = { iconName: 'Save' };
        const { disabled, checked } = this.props;
        const { map, tempCohorts } = this.props;

        return(
            <div className="panel panel-md dropshadow-sm fixed top-170 right white_bg margine-right-15px">
                <div className="flex-container panel-top">
                    <div className="font-size-18 padding-sm semibold absolute">
                    Cohort Information
                    </div>
                    <div className="right absolute padding-xsm">
                        <IconButton 
                        onClick={function(e){
                            let _clicked = false;
                            this.props.onClickCohortInfo(_clicked);
                        }.bind(this)}
                        iconProps={chromeCloseIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} />
                    </div>
                </div>

                <div className="divider leftRightCenter"></div>
                <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm font-size-12">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            Current cohort
                        </div>
                            <div>
                                {this.props.currentCohort.name} ({this.props.map})
                            </div>
                        <div>
                            <div className="font-size-12 fabric-primary-blue btn flex-container">
                                <div className="removing-btn-margin-left">
                                <IconButton 
                                    onClick={function(e){
                                        let _clicked = true;
                                        this.props.onClickAddCohort(_clicked)
                                        this.props.onClickManageCohort(_clicked);
                                    }.bind(this)}
                                    iconProps={saveIcon} title="Close" ariaLabel="Close" disabled={disabled} checked={checked} 
                                />
                                </div>
                                <button className="txtbtn datavis-1" onClick={function(e){
                                    let _clicked = true;
                                    this.props.onClickAddCohort(_clicked)
                                    this.props.onClickManageCohort(_clicked);
                                }.bind(this)}>
                                    Save to the cohort list
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider leftRightCenter"></div>
                <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            Overview
                        </div>
                        <div className="padding-top-xsm">
                            <div className="coverage">
                                <div className="flex-container">
                                    <div className="metric padding-top-xsm"> 
                                        <div className="font-size-20 semibold">
                                          {this.tempCohort(map, tempCohorts).coverage}
                                        </div>
                                        <div className="font-size-12 text-grey">Coverage(%)</div>
                                    </div>
                                    <img src={CoverageImg} className="legned" alt=""/>
                                </div>
                            </div>
                            <div className="errorRate marginTop-sm">
                                <div className="flex-container">
                                    <div className="metric padding-top-xsm"> 
                                        <div className="font-size-20 semibold">
                                            {this.tempCohort(map, tempCohorts).errorRate} 
                                        </div>
                                    <div className="font-size-12 text-grey">Error Rate(%)</div>
                                    </div>
                                    <img src={ErrorRateImg} className="legned" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider leftRightCenter"></div>
                <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm font-size-12">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            Prediction path
                        </div>
                        <div>
                            TBD
                        </div>
                    </div>
                </div>
                <div className="divider leftRightCenter"></div>
                <div className="section padding-left-sm padding-top-xsm padding-bottom-xsm font-size-12">
                    <div className="subSection">
                        <div className="font-size-14 bold">
                            Feature importance (Error rates)
                        </div>
                        <div>
                            TBD
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}