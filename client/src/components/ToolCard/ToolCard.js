import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBAnimation,
  MDBCardGroup,
} from "mdbreact";
import "./ToolCard.css";

const ToolCard = () => {
  const image = "";

  return (
    <MDBAnimation type="slideInUp">
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
              <MDBBtn color="black" size="md">
                View Details
              </MDBBtn>
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
              <MDBBtn color="black" size="md">
                View Details
              </MDBBtn>
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
              <MDBBtn color="black" size="md">
                View Details
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCardGroup>
    </MDBAnimation>
  );
};

export default ToolCard;