import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFormParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state}
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValideInput = (input) => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                isValid = false;
                alert('Please missing' + arrInput[i])
                break;

            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        console.log(this.state)
    }

    render() {
        return (
            <Modal
             isOpen={this.props.isOpen}
             toggle={() =>{this.toggle()}}
             className={'modal-user-container'}
             size="lg"
            >
                <ModalHeader toggle={() => {this.toggle()}}>Modal title</ModalHeader>
                <ModalBody>              
                    <div className="modal-user-body">
                            <div className="input-container">
                                <label >Email</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "email")}} 
                                value={this.state.email}
                                />
                            </div>

                            <div className="input-container">
                                <label >Password</label>
                                <input type="password" onChange={(event) => {this.handleOnChangeInput(event, "password")}} 
                                value={this.state.password}
                                />
                            </div>  

                            <div className="input-container">
                                <label >First Name</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "firstName")}} 
                                value={this.state.firstName}
                                />
                            </div>  

                            <div className="input-container">
                                <label >Last Name</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "lastName")}} 
                                value={this.state.lastName}
                                />
                            </div>  

                            <div className="input-container max-width-input">
                                <label >Address</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "address")}} 
                                value={this.state.address}
                                />
                            </div>  
                    </div>   
                                                   
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => {this.handleAddNewUser()}}>Do Something</Button> {''}
                    <Button color="secondary" className="px-3"  onClick={() => {this.toggle()}}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
