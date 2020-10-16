import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class DeletedToolModal extends Component {
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
        <MDBBtn color="black" onClick={this.toggle}>Yes, Please!</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} />
          <MDBModalBody>
            <h2 className="text-center font-weight-bold">Tool Deleted!</h2>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="black" href="/myToolbanks">
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default DeletedToolModal;
