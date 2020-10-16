import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBAnimation
} from "mdbreact";
import "./RentalForm.css"

export function RentalForm() {
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
        <img
          src={require("../../images/LegalStuff-header.png")}
          alt="Legal Stuff Logo"
          className="figure-img img-fluid d-block rent-legal-logo"
        />
        <p className="text-center" style={{ fontWeight: "bold", fontSize: 13 }}>
          stuff we don't typically red but please read carefully this time.
        </p>
      </header>
      <MDBContainer>
        <MDBRow>
        <MDBAnimation type="slideInLeft">
            <MDBCol>
              <MDBBtn color="black" href="https://agreement4m.s3-ap-southeast-2.amazonaws.com/Rental+Agreement+Form.pdf" target="_blank" rel="noopener noreferrer">
                Download Rental Agreement Form
              </MDBBtn>
            </MDBCol>
          </MDBAnimation>
          <MDBAnimation type="slideInRight">
            <MDBCol>
            <iframe
              id="JotFormIFrame-202812760119046"
              title="Tool Rental Template"
              onLoad={window.parent.scrollTo(0,0)}
              allowtransparency="true"
              allowFullScreen={true}
              src="https://form.jotform.com/202812760119046"
              frameBorder="0"
              scrolling="no"
            ></iframe>
            </MDBCol>
          </MDBAnimation>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </React.Fragment>
  );
}

export default RentalForm;
