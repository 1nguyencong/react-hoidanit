import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import logo from '../../assets/logo.svg';
import {  FormattedMessage   } from "react-intl";




class Specialty extends Component {



    render() {
    
        return (
            <div>Specialty</div>
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
