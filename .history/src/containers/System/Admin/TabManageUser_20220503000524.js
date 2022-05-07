import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TabManageUser.scss';




class TabManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <table id="TabManageUser">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                                     
                    <tr>
                        <td>{'item.email'}</td>
                        <td>{'item.firstName'}</td>
                        <td>{'item.lastName'}</td>
                        <td>{'item.address'}</td>
                        <td>
                        </td>
                    </tr>                             

                </tbody> 
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabManageUser);
