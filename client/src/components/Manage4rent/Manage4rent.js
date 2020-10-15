import React from "react";
import { MDBAnimation, MDBJumbotron } from "mdbreact";
import ManageToolCard from "../ManageToolCard/ManageToolCard";

function Manage4rent() {
  return (
    <MDBAnimation reveal type="slideInLeft">
      <MDBJumbotron style={{ padding: "3rem" }}>
        <h2 className="font-weight-bold">Manage tools for rent</h2>
        <ManageToolCard />
      </MDBJumbotron>
    </MDBAnimation>
  );
}

export default Manage4rent;
