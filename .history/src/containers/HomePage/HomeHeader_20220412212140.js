import React, { Component } from 'react';
import { connect } from 'react-redux';

class header extends Component {

    render() {

        return (
            <div>hello header</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(header);
