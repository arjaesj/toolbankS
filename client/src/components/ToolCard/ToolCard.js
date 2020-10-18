import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCol
} from "mdbreact";
import ViewToolModal from "../ViewToolModal/ViewToolModal";
import "./ToolCard.css";

function ToolCard({ imageUrl, toolName, price, address }) {
  return (
    <MDBCol sm="4">
      <MDBCard>
        <MDBCardImage
          src={imageUrl || "https://via.placeholder.com/340x227"}
          alt="Tool image"
          top
          hover
          overlay="white-slight"
        />
        <MDBCardBody>
          <p>Price | $ {price} /day</p>
          <MDBCardTitle tag="h5">{toolName}</MDBCardTitle>
          <MDBCardText>{address}</MDBCardText>
          <ViewToolModal />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ToolCard;
