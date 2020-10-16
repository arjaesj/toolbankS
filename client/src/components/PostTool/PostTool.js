import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import PostToolInfo from "../PostToolInfo/PostToolInfo";
import {
  MDBContainer,
  MDBAnimation
} from "mdbreact";
import "./PostTool.css";

export function PostTool() {

  return (
    <React.Fragment>
      <header className="bgheader img-fluid">
        <Navigation />
        <img
          src={require("../../images/Toolbank$-logo.png")}
          alt="ToolBanks Logo"
          className="figure-img img-fluid logo"
        />
        <br />
        <MDBAnimation type="slideInDown">
          <img
            src={require("../../images/PostTool-header.png")}
            alt="Post Tool 4 rent Logo"
            className="figure-img img-fluid d-block post-tool-logo"
          />
        </MDBAnimation>
      </header>
      <MDBContainer>
        <PostToolInfo />
      </MDBContainer>
      <Footer />
    </React.Fragment>
  );
}

export default PostTool;
