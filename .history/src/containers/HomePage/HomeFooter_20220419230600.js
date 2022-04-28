import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  FormattedMessage   } from "react-intl";
import Slider from "react-slick"; 


    

class HomeFooter extends Component {

    render() {

    
        return (
            <div className="home-footer">
                <p>&copy; 2021 nguyễn Văn Công. <a href="#">More information, please visit a youtube</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
