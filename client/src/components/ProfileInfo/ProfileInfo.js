import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBMask,
  MDBBtn,
  MDBAnimation,
  MDBJumbotron,
  MDBView,
  MDBIcon,
} from "mdbreact";
import { GoogleComponent } from "react-google-location";
import "./ProfileInfo.css"

const API_KEY = "AIzaSyBoLzaL8Vzno4HUJnejFxw-esNVfdsKH9w";
const image = "";
const fullName = "John Doe";

class ProfileInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    return (
      <MDBAnimation type="slideInRight">
        <MDBJumbotron style={{ padding: "3rem" }}>
          <h2 className="font-weight-bold">Profile Information</h2>
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
                  htmlFor="formGroupFullNameInput"
                  className="font-weight-bold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="formGroupFullNameInput"
                  placeholder={fullName}
                />
                <br />
                <GoogleComponent
                  apiKey={API_KEY}
                  language={"en"}
                  country={"country:in|country:us"}
                  coordinates={true}
                  locationBoxStyle={"custom-style"}
                  locationListStyle={"custom-style-list"}
                  onChange={(e) => {
                    this.setState({ place: e });
                  }}
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
  };
}

export default ProfileInfo;
