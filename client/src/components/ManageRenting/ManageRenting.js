import React from "react";
import { MDBAnimation, MDBJumbotron } from "mdbreact";
import ManageRentingToolCard from "../ManageRentingToolCard/ManageRentingToolCard";

function ManageRenting() {
  return (
    <MDBAnimation reveal type="slideInRight">
      <MDBJumbotron style={{ padding: "3rem" }}>
        <h2 className="font-weight-bold">Manage tools renting</h2>
        <ManageRentingToolCard />
      </MDBJumbotron>
    </MDBAnimation>
  );
}

export default ManageRenting;
