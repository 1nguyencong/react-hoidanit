import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import {  FormattedMessage   } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import SpecialtyIng from "../../../assets/specialty/121042-than-kinh.jpg";





class Specialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
    
        return (
            <div className="section-specialty">
                <div className="specialty-container">
                    <div className="specilty-header">
                        <span>Chuyên khoa phổ biến</span>
                        <button>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        <div className="img-customize">
                            <img src={SpecialtyIng} />
                            <div>Hệ thần kinh 1</div>
                        </div>
                        <div className="img-customize">
                            <img src={SpecialtyIng} />
                            <div>Hệ thần kinh 2</div>
                        </div>
                        <div className="img-customize">
                            <img src={SpecialtyIng} />
                            <div>Hệ thần kinh 3</div>
                        </div>
                        <div className="img-customize">
                            <img src={SpecialtyIng} />
                            <div>Hệ thần kinh 4</div>
                        </div>
                        <div className="img-customize">
                            <img src={SpecialtyIng} />
                            <div>Hệ thần kinh 5</div>
                        </div>
                        <div className="img-customize">
                            <img src={SpecialtyIng} />
                            <div>Hệ thần kinh 6</div>
                        </div>
                    </Slider>
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
