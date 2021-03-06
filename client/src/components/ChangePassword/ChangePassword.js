import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAnimation,
  MDBJumbotron,
} from "mdbreact";

function ChangePassword() {
  return (
    <MDBAnimation reveal type="slideInRight">
      <MDBJumbotron style={{ padding: "3rem" }}>
        <h2 className="font-weight-bold">Change Password</h2>
        <MDBRow>
          <MDBCol lg="9">
            <div className="form-group">
              <label
                htmlFor="formGroupCurPasswordInput"
                className="font-weight-bold"
              >
                Current Password
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupCurPasswordInput"
                placeholder="Type in current password"
              />
              <br />
              <label
                htmlFor="formGroupNewPasswordInput"
                className="font-weight-bold"
              >
                New Password
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupNewPasswordInput"
                placeholder="Type in new password"
              />
              <br />
              <label
                htmlFor="formGroupConPasswordInput"
                className="font-weight-bold"
              >
                Confirm new Password
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupConPasswordInput"
                placeholder="Re-type new password"
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

export default ChangePassword;
