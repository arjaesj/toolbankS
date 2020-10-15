import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCardGroup,
} from "mdbreact";

const ManageRentingToolCard = () => {
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
              <MDBBtn color="black" size="md">
                View Details
              </MDBBtn>
              <MDBBtn color="black" size="md">
                Return
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
              <MDBBtn color="black" size="md">
                Return
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
              <MDBBtn color="black" size="md">
                Return
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCardGroup>
  );
};

export default ManageRentingToolCard;
