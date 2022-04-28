import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  FormattedMessage   } from "react-intl";
import Slider from "react-slick"; 


    

class About extends Component {

    render() {

    
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về Channel Nguyễn Văn công 
                </div>

                <div className="section-about-content">
                    <div className="content-left">
                    <iframe width="60%" height="400" src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div className="content-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt. Nulla inventore aspernatur rem esse, excepturi dicta distinctio iure debitis commodi ex, maiores saepe dolor perspiciatis quis animi est illum.
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
