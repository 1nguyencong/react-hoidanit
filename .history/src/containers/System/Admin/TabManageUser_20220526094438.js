import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TabManageUser.scss';
import * as actions from "../../../store/actions";


class TabManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRedux: [],
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listUsers !== this.props.listUsers) {
            this.setState ({
                userRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteNewUserRedux(user.id)
    }

    handleEditUser = (user) => {
        // console.log('hoi dan it  check', user)
        this.props.handleEditUserFromParentKey(user)

    }

    render() {
        // console.log('hoi dan it  check all users: ', this.props.listUsers)
        // console.log('hoi dan it check add users after disUpdate', this.state.userRedux)
        let arrUsers = this.state.userRedux
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
                    
                    {arrUsers && arrUsers.length > 0 && 
                    arrUsers.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button
                                    onClick={() => this.handleEditUser(item)}
                                    className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                    <button 
                                    onClick={() => this.handleDeleteUser(item)}
                                    className="btn-delete"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>   
                        )
                    })                    
                    }                                 
                          

                </tbody> 
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteNewUserRedux: (id) => dispatch(actions.deleteNewUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabManageUser);
