import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCardGroup,
} from "mdbreact";
import EditToolModal from "../EditToolModal/EditToolModal"
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal'

const ManageToolCard = (props) => {
  const image = "";

  return (
      <MDBCardGroup deck>
        <MDBCol sm="4">
          <MDBCard>
            <MDBCardImage
              src={image || "https://via.placeholder.com/340x227"}
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <p>Price | $ 9.99 /day</p>
              <MDBCardTitle tag="h5">Tool name</MDBCardTitle>
              <MDBCardText>Location</MDBCardText>
              <EditToolModal />
              <DeleteConfirmModal />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="4">
          <MDBCard>
            <MDBCardImage
              src={image || "https://via.placeholder.com/340x227"}
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <p>Price | $ 9.99 /day</p>
              <MDBCardTitle tag="h5">Tool name</MDBCardTitle>
              <MDBCardText>Location</MDBCardText>
              <EditToolModal />
              <DeleteConfirmModal />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        <MDBCol sm="4">
          <MDBCard>
            <MDBCardImage
              src={image || "https://via.placeholder.com/340x227"}
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <p>Price | $ 9.99 /day</p>
              <MDBCardTitle tag="h5">Tool name</MDBCardTitle>
              <MDBCardText>Location</MDBCardText>
              <EditToolModal />
              <DeleteConfirmModal />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCardGroup>
  );
};

export default ManageToolCard;
