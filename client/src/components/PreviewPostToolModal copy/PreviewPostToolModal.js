import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";
import SuccesPostModal from "../PostSuccesModal/PostSuccesModal"

const image = "";
const toolName = "Hammer";
const address = "Perth, WA";
const owner = "John Doe";
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

class PreviewPostToolModal extends Component {
  state = {
    modal14: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="black" onClick={this.toggle(14)}>
          Post Tool
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          size="fluid"
          fullHeight
          position="top"
          backdrop={false}
        >
          <MDBModalHeader toggle={this.toggle(14)}>
            Review Tool Information
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol lg="3">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src={image || "https://via.placeholder.com/340x227"}
                    alt=""
                  />
                </MDBView>
              </MDBCol>
              <MDBCol lg="9">
                <p>Price | $ 9.99 /day</p>
                <p>Date Posted | {today.toUTCString()} </p>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>{toolName}</strong>
                </h3>
                <p>{address}</p>
                <p>Posted by | {owner} </p>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus et aut officiis debitis.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
          <SuccesPostModal />
          <MDBBtn
              color="black"
              className="waves-light d-inline"
              type="submit"
              href="/postTool"
            >
              Edit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default PreviewPostToolModal;
