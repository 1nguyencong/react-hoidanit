import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import {  FormattedMessage   } from "react-intl";
import * as actions from "../../../store/actions"


class OutStandingDoctor extends Component {

    componentDidMount() {
        this.props.loadTopDoctors()
    }

    render() {
        console.log('check top doctor redux', this.props.topDoctorRedux)

        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-img section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ nguyễn văn công</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-img section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ nguyễn văn công</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-img section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ nguyễn văn công</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-img section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, tiến sĩ nguyễn văn công</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-customize">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"></div>
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, tiến sĩ nguyễn văn công</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        topDoctorRedux: state.admin.topDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
