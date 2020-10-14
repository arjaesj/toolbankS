import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ToolCard from "../ToolCard/ToolCard";
import { MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import "./Home.css";

export function Home() {
  return (
    <React.Fragment>
      <div className="bgheader img-fluid">
        <Navigation />
        <img
          src={require("../../images/Toolbank$-logo.png")}
          alt="ToolBanks Logo"
          className="figure-img img-fluid logo"
        />
        <MDBBtn className="float-right post-tool" color="dark">Post tool/s</MDBBtn>
        <br />
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text black lighten-3" id="basic-text1">
              <MDBIcon className="text-white" icon="search" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <MDBContainer>
      <h2 className="text-center font-weight-bold">Tools available in your neighborhood</h2>
      <ToolCard />
      </MDBContainer>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
