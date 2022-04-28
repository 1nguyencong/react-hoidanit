import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import {  FormattedMessage   } from "react-intl";


class OutStandingDoctor extends Component {

    render() {

        return (
            <div className="section-share section-outstanding-doctord">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="outer-bg">
                                    <div className="bg-img section-outstanding-doctor"></div
                                </div>
                                <div className="position text-center">
                                    <div>Giáo sư, tiến sĩ nguyễn văn công</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                           
                            <div className="section-customize">
                                <div className="bg-img section-outstanding-doctor"></div>
                                <div>Hệ thống thu cúc 2</div>
                            </div>
                            
                            <div className="section-customize">
                                <div className="bg-img section-outstanding-doctor"></div>
                                <div>Hệ thống thu cúc 3</div>
                            </div>

                            <div className="section-customize">
                                <div className="bg-img section-outstanding-doctor"></div>
                                <div>Hệ thống thu cúc 3</div>
                            </div>

                            <div className="section-customize">
                                <div className="bg-img section-outstanding-doctor"></div>
                                <div>Hệ thống thu cúc 3</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
