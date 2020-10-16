import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";
import PostSuccessModal from "../PostSuccessModal/PostSuccessModal";

const image = "";
const toolName = "Hammer";
const price = "9.99";
const description = "2yr old hammer, used once.";

class EditToolModal extends Component {
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
      <React.Fragment>
        <MDBBtn size="md" color="black" onClick={this.toggle(14)}>
          Edit Details
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          size="fluid"
          fullHeight
          position="top"
          // backdrop={false}
        >
          <MDBModalHeader toggle={this.toggle(14)}>
            Edit Tool Details
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
                <div className="form-group">
                  <label
                    htmlFor="formGroupPriceInput"
                    className="font-weight-bold"
                  >
                    Price in AUD per day
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="formGroupPriceInput"
                    placeholder={price}
                  />
                  <br />
                  <label
                    htmlFor="formGroupToolNameInput"
                    className="font-weight-bold"
                  >
                    Tool Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="formGroupToolNameInput"
                    placeholder={toolName}
                  />
                  <br />
                  <label
                    htmlFor="exampleFormControlTextarea3"
                    className="font-weight-bold"
                  >
                    Description
                  </label>
                  <textarea
                    type="textarea"
                    className="form-control form-control-lg"
                    id="exampleFormControlTextarea3"
                    placeholder={description}
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
            <PostSuccessModal />
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default EditToolModal;
