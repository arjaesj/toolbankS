import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";

class PostSuccessModal extends Component {
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
        <MDBBtn color="black" onClick={this.toggle}>Accept & Post</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} />
          <MDBModalBody>
            <h2 className="text-center font-weight-bold">Tool Posted!</h2>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="black" href="/">
              <MDBIcon icon="home" size="lg" />
            </MDBBtn>
            <MDBBtn color="black" href="/myToolbanks">
              My ToolBank$
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default PostSuccessModal;
