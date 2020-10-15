import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import ChangeEmail from "../ChangeEmail/ChangeEmail"
import ChangePassword from "../ChangePassword/ChangePassword"
import Manage4rent from "../Manage4rent/Manage4rent"
import ManageRenting from "../ManageRenting/ManageRenting"
import {
  MDBContainer,
  MDBBtn,
  MDBAnimation
} from "mdbreact";
import "./MyToolBanks.css";

export function MyToolBanks() {

  return (
    <React.Fragment>
      <header className="bgheader img-fluid">
        <Navigation />
        <img
          src={require("../../images/Toolbank$-logo.png")}
          alt="ToolBanks Logo"
          className="figure-img img-fluid logo"
        />
        <MDBBtn className="float-right post-tool" color="dark" href="/postTool">
          Post tool
        </MDBBtn>
        <br />
        <MDBAnimation type="slideInDown">
          <img
            src={require("../../images/MyToolbank$-header.png")}
            alt="My Toolbank$ Logo"
            className="figure-img img-fluid d-block mytoolbanks-logo"
          />
        </MDBAnimation>
      </header>
      <MDBContainer>
        <ProfileInfo />
        <ChangeEmail />
        <ChangePassword />
        <Manage4rent />
        <ManageRenting />
      </MDBContainer>
      <Footer />
    </React.Fragment>
  );
}

export default MyToolBanks;
