import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import {  FormattedMessage   } from "react-intl";
import * as actions from "../../../store/actions"


class OutStandingDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorRedux !== this.props.topDoctorRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorRedux
            })
        }
    }

    componentDidMount() {
        this.props.loadTopDoctors()
    }

    render() {
        let arrDoctors = this.state.arrDoctors;

        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            
                           {arrDoctors && arrDoctors.length > 0 && 
                            arrDoctors.map((item , index) => {
                                return (
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
                                )
                            })
                           }

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
