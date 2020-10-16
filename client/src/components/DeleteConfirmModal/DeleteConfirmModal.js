import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import DeleteSuccessModal from "../DeleteSuccessModal/DeleteSuccessModal"

class DeleteConfirmModal extends Component {
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
        <MDBBtn size="md" color="black" onClick={this.toggle}>Delete</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} />
          <MDBModalBody>
            <h2 className="text-center font-weight-bold">Confirm delete?</h2>
          </MDBModalBody>
          <MDBModalFooter>
          <DeleteSuccessModal />
            <MDBBtn color="black" onClick={this.toggle}>
              No! Sorry!
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default DeleteConfirmModal;
