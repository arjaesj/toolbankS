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
// import API from "../../utils/API";

const imageUrl = "https://toolbanksimages.s3-ap-southeast-2.amazonaws.com/hammer.png";
const toolName = "Awesome Hammer";
const address = "200 Park Ave, New York, NY 10166, United States";
const owner = "Thor Odinson";
const ownerEmailAddress = "johndoe@email.com";
const mailTo = "mailto:" + ownerEmailAddress;
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const description = "Reliable tool in a very well maintained condition. Don't need to be worthy to weild";

class ViewToolModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal14: false,
      toolName: this.props.toolName,
      address: this.props.address,
      owner: this.props.owner,
      description: this.props.description,
      imageUrl: this.props.imageUrl
    };
  }
  
  // state = {
  //   modal14: false,

  // };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render(props) {
    return (
      <React.Fragment>
        <MDBBtn size="md" color="black" onClick={this.toggle(14)}>
          View Details
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          size="fluid"
          fullHeight
          position="top"
          backdrop={false}
        >
          <MDBModalHeader toggle={this.toggle(14)} />
          <MDBModalBody>
            <MDBRow>
              <MDBCol lg="3">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src={imageUrl || "https://via.placeholder.com/340x227"}
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
                 {description}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter>
            <form action={mailTo} method="post" encType="text/plain" style={{width: "20%"}}>
                <MDBBtn color="black" size="md" className="waves-light" type="submit">
                Contact {owner}
              </MDBBtn>
            </form>

            <MDBBtn color="black" size="md" className="waves-light" href="/rentalForm">
              Rent this tool
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default ViewToolModal;
