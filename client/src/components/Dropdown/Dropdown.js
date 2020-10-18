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
          <MDBDropdownItem disabled>Name (Ascending)</MDBDropdownItem>
          <MDBDropdownItem disabled>Name (Descending)</MDBDropdownItem>
          <MDBDropdownItem disabled>Price (Ascending)</MDBDropdownItem>
          <MDBDropdownItem disabled>Price (Descending)</MDBDropdownItem>
          <MDBDropdownItem disabled>Closest to you</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    
  );
}

export default DropdownFilter;