import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFormParent();
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
                                <input type="text" />
                            </div>

                            <div className="input-container">
                                <label htmlFor="">Password</label>
                                <input type="password" />
                            </div>  

                            <div className="input-container">
                                <label htmlFor="">First Name</label>
                                <input type="text" />
                            </div>  

                            <div className="input-container">
                                <label htmlFor="">Last Name</label>
                                <input type="text" />
                            </div>  

                            <div className="input-container">
                                <label htmlFor="">Address</label>
                                <input type="text" />
                            </div>  
                    </div>   
                                                   
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {this.toggle()}}>Do Something</Button> {''}
                    <Button color="secondary" onClick={() => {this.toggle()}}>Cancel</Button>
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
