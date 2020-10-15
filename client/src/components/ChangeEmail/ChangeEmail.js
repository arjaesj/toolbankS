import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAnimation,
  MDBJumbotron,
} from "mdbreact";

function ChangeEmail() {
  const email = "JohnDoe@email.com";

  return (
    <MDBAnimation type="slideInLeft">
      <MDBJumbotron style={{ padding: "3rem" }}>
        <h2 className="font-weight-bold">Change Email Address</h2>
        <MDBRow>
          <MDBCol lg="9">
            <div className="form-group">
              <label
                htmlFor="formGroupFullNameInput"
                className="font-weight-bold"
              >
                Current Email Address
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupFullNameInput"
                placeholder={email}
              />
              <br />
              <label
                htmlFor="formGroupAddressInput"
                className="font-weight-bold"
              >
                New Email Address
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupAddressInput"
                placeholder="newemail@email.com"
              />
              <br />
              <label
                htmlFor="formGroupAddressInput"
                className="font-weight-bold"
              >
                Confirm new Email Address
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupAddressInput"
                placeholder="newemail@email.com"
              />
            </div>
            <MDBBtn color="black" size="lg" className="waves-light ">
              Save
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBJumbotron>
    </MDBAnimation>
  );
}

export default ChangeEmail;
