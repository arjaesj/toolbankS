import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import ReturnSuccessModal from "../ReturnSuccessModal/ReturnSuccessModal"

class ReturnConfirmModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <React.Fragment>
        <MDBBtn size="md" color="black" onClick={this.toggle}>Return</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} />
          <MDBModalBody>
            <h2 className="text-center font-weight-bold">Confirm Return?</h2>
          </MDBModalBody>
          <MDBModalFooter>
          <ReturnSuccessModal />
            <MDBBtn color="black" onClick={this.toggle}>
              No! Sorry!
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default ReturnConfirmModal;
