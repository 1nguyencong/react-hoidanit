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
        console.log(event.target.value)
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
                                <label htmlFor="">Email</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, 'email')}} />
                            </div>

                            <div className="input-container">
                                <label htmlFor="">Password</label>
                                <input type="password" onChange={(event) => {this.handleOnChangeInput(event, 'password')}} />
                            </div>  

                            <div className="input-container">
                                <label htmlFor="">First Name</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, 'first name')}} />
                            </div>  

                            <div className="input-container">
                                <label htmlFor="">Last Name</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event, 'last name')}} />
                            </div>  

                            <div className="input-container max-width-input">
                                <label htmlFor="">Address</label>
                                <input type="text" onChange={(event) => {this.handleOnChangeInput(event)}} />
                            </div>  
                    </div>   
                                                   
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => {this.toggle()}}>Do Something</Button> {''}
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
