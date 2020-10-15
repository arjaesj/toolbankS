import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import "./Dropdown.css"

const DropdownFilter = () => {
  return (
      <MDBDropdown >
        <MDBDropdownToggle caret color="white">
            Filter
        </MDBDropdownToggle>
        <MDBDropdownMenu basic color="white">
          <MDBDropdownItem>Name (Ascending)</MDBDropdownItem>
          <MDBDropdownItem>Name (Descending)</MDBDropdownItem>
          <MDBDropdownItem>Price (Ascending)</MDBDropdownItem>
          <MDBDropdownItem>Price (Descending)</MDBDropdownItem>
          <MDBDropdownItem>Closest to you</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    
  );
}

export default DropdownFilter;