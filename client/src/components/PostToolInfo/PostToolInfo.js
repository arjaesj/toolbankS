import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBMask,
  MDBBtn,
  MDBAnimation,
  MDBJumbotron,
  MDBView,
  MDBIcon
} from "mdbreact";

function PostToolInfo() {
  const image = "";
  const address = "Perth, WA";

  return (
    <MDBAnimation type="slideInRight">
      <MDBJumbotron style={{ padding: "3rem" }}>
        <h2 className="font-weight-bold">Tool Information</h2>
        <MDBRow>
          <MDBCol lg="3">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={image || "https://via.placeholder.com/320x320"}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight">
                  <p
                    className="white-text text-center font-weight-bold"
                    style={{ fontSize: 16 }}
                  >
                    <MDBIcon far icon="edit" />
                    {""} Edit Photo
                  </p>
                </MDBMask>
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="9">
            <div className="form-group">
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
                placeholder="Tool name"
              />
              <br />
              <label
                htmlFor="formGroupAddressInput"
                className="font-weight-bold"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupAddressInput"
                placeholder={address}
              />
              <br />
              <a href="#!" className="black-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="map-marker-alt" className="pr-2" />
                  Use current location
                </h6>
              </a>
              <br />
              <label htmlFor="formGroupPriceInput" className="font-weight-bold">
                Price in AUD per day
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupPriceInput"
                placeholder="0.00"
              />
              <br />
              <label
                htmlFor="exampleFormControlTextarea3"
                className="font-weight-bold"
              >
                Descriptiom
              </label>
              <textarea
                type="textarea"
                className="form-control form-control-lg"
                id="exampleFormControlTextarea3"
                placeholder="Provide a detailed description of the tool"
              />
            </div>
            <MDBBtn color="black" size="lg" className="waves-light ">
              Post Tool
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBJumbotron>
    </MDBAnimation>
  );
}

export default PostToolInfo;
