import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small darken-3 pt-0">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          All rights reserved | Website developed by <a href="https://github.com/arjaesj" target="_blank"
                      rel="noopener noreferrer"> Rj San Jose </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;