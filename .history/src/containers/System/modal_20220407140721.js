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
             size="sm"   
            >
                <ModalHeader toggle={() => {this.toggle()}}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos itaque hic cumque delectus impedit aliquam aut.
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
