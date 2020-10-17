import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBMask,
  MDBAnimation,
  MDBJumbotron,
  MDBView,
  MDBIcon,
} from "mdbreact";
import PreviewPostToolModal from "../PreviewPostToolModal/PreviewPostToolModal";
import { GoogleComponent } from "react-google-location";
import "../ProfileInfo/ProfileInfo.css";

const API_KEY = "AIzaSyBoLzaL8Vzno4HUJnejFxw-esNVfdsKH9w";
const image = "";

class PostToolInfo extends React.Component {

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
                <br />
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
                  placeholder="0.00"
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
                  placeholder="Provide a detailed description of the tool"
                />
              </div>
              <PreviewPostToolModal />
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
      </MDBAnimation>
    );
  }
}

export default PostToolInfo;
