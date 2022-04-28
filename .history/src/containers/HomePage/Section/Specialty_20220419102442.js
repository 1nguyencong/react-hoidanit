import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import {  FormattedMessage   } from "react-intl";
import Slider from "react-slick"; section-specialty
import '../../HomePage/HomePage.scss';


    

class Specialty extends Component {

    render() {

    
        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="specialty-customize">
                                <div className="bg-img section-specialty"></div>
                                <div>Hệ thần kinh 1</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-img section-specialty"></div>
                                <div>Hệ thần kinh 2</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-img section-specialty"></div>
                                <div>Hệ thần kinh 3</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-img section-specialty"></div>
                                <div>Hệ thần kinh 4</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-img section-specialty"></div>
                                <div>Hệ thần kinh 5</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-img section-specialty"></div>
                                <div>Hệ thần kinh 6</div>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
