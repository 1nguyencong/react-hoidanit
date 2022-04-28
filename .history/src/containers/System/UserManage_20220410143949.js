import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser , createNewUserService, deleteUserSeverice } from '../../services/userService';
import ModalUser from './modal'
import { emitter } from '../../utils/emitter'



class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact();
    }

    getAllUserFromReact = async (user) => {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true,            
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,            
        })
    }

    createNewUser = async (data) => {
        try{
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModal: false                    
                })  

                emitter.emit('EVENT_CLEAR_MODAL_DATA',{ 'id': 'your id' })
            } 
            console.log('check response', response)
        } catch (err) {
            console.log(err);
        }
            
    }

    handleDeleteUser = async (user) => {
        console.log('delete user', user)
        try {
            let res = await deleteUserSeverice(user.id)
            console.log(res)
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                alert(res.message)
            }
        }catch (e) {
            console.log('loi', e)
        }
    }


    render() {
        // console.log(this.state)
        // console.log('check state', this.state);   
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <ModalUser
                    isOpen= {this.state.isOpenModal}
                    toggleFormParent= {this.toggleUserModal}
                    createNewUser= {this.createNewUser}
                />
                <div className="title text-center">Manage users with nguyenvancong</div>
                <div className="mx-1">
                    <button 
                    className="btn btn-primary px-3"
                    onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-plus mx-1"></i>Add new users</button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                                { arrUsers && arrUsers.map((item, index) => {
                                    // console.log(item ,index)
                                    return (
                                        <tr>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                                <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }   
                        </tbody> 
                    </table>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
