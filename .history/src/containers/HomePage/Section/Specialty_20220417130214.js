import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import {  FormattedMessage   } from "react-intl";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 




class Specialty extends Component {



    render() {
    
        return (
            <div className="section-specialty">
                <div className="specialty-content">
                    
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
