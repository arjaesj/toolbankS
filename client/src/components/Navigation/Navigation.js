import React from "react";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";

class Navigation extends React.Component {
  state = {
    username: "",
    collapse: true
  };

  // contrcutor function to handle hamburger nav menu on smaller media screens
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      username: "mara"
    };
    this.onClickHamburger = this.onClickHamburger.bind(this);
  }

  // function to collapse hamburger nav menu on smaller media screens
  onClickHamburger() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <nav>
        <MDBNavbar light expand="lg">
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClickHamburger} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/" color="black">
                    <MDBIcon icon="home" size="2x" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="font-weight-bold" to="/logout" style={{fontSize: 20}}>Logout</MDBNavLink>
                </MDBNavItem>
                <p>{""}|{""}</p>
                <MDBNavItem>
                  <MDBNavLink className="font-weight-bold font-size-lg" to="/myToolbanks" style={{fontSize: 20}}>{this.state.username}'s My ToolBank$ <MDBIcon icon="user-cog" size="lg" /></MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </nav>
    );
  }
}

export default Navigation;
