import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import {  FormattedMessage   } from "react-intl";
import * as actions from "../../../store/actions";
import {LANGUAGES} from "../../../utils"


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
        arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors);
        let {language} = this.props;

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
                                let imageBase64 = '';
                                if (user.image) {
                                    ImageBase64 = new Buffer(user.image, 'base64').toString('binary');
                                }

                                let nameVi = `${item.positionData.valueVi}, ${item.firstName}, ${item.lastName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName}, ${item.lastName}`;
                                return (
                                    <div className="section-customize" key={index}>
                                        <div className="customize-border">
                                            <div className="outer-bg">
                                                <div className="bg-img section-outstanding-doctor"
                                                    style= {{backgroundImage: `url(${ImageBase64})`}}
                                                ></div>
                                            </div>
                                            <div className="position text-center">
                                                <div>{language ===LANGUAGES.VI ? nameVi : nameEn}</div>
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
        language: state.app.language,
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
