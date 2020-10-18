import React, { useRef, useState } from "react";
import { isAuthenticated } from "../../lib";
import { Redirect } from "react-router-dom";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import {Link} from 'react-router-dom'
import "./Login.css";

export function LogIn(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const params = new URLSearchParams();
    params.append("username", usernameRef.current.value);
    params.append("password", passwordRef.current.value);

    fetch("/api/login", {
      method: "POST",
      body: params,
    })
      .then((body) => body.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
      })
      .catch((error) => console.error(error));
  };

  return isLoggedIn ? (
    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  ) : (
    <div className="bg img-fluid">
      <MDBRow>
        <MDBCol md="6">
        <MDBAnimation type="slideInDown">
          <img
            src={require("../../images/Toolbank$-logo.png")}
            alt="ToolBanks Logo"
            className="img-fluid"
          />
        </MDBAnimation>
                    
        <MDBAnimation type="slideInUp">
            <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="defaultFormLoginEmailEx"
              placeholder="Username"
              className="form-control"
              suggested= "current-password"
              pattern=".{2,20}"
              ref={usernameRef}
              required
            />
            <br />
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              placeholder="Password"
              className="form-control"
              ref={passwordRef}
              required
            />
            <div className="text-center mt-4">
              <MDBBtn color="black" type="submit">
                Login
              </MDBBtn>
              <br />
              <p>New to Toolbank$? <Link to="/register" style={{color: "black", textDecoration: "underline", fontStyle: "oblique", fontWeight: "bold"}}>Register</Link></p>
            </div>
          </form>
        </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default LogIn;
