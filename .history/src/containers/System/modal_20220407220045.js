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
        }, () => {
            console.log('check code', this.state)
        })
    }

    handleAddNewUser = () => {

    }

    render() {
        console.log(this.props)
        console.log(this.props.isOpen)
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
                                <input type="password" onChange={(event) => {this.handleOnChangeInput(event, "password")}} />
                            </div>  

                            <div className="input-container">
                                <label >First Name</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "first name")}} />
                            </div>  

                            <div className="input-container">
                                <label >Last Name</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "last name")}} />
                            </div>  

                            <div className="input-container max-width-input">
                                <label >Address</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, "address")}} />
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
