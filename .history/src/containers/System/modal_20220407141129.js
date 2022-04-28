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
             className={'abcabc'}
             size="lg"
            >
                <ModalHeader toggle={() => {this.toggle()}}>Modal title</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
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
