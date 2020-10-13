import React, { useRef, useState } from 'react';
import { isAuthenticated } from "../../lib";
import { Redirect } from "react-router-dom";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import {Link} from 'react-router-dom'
import "./Register.css";

export function Register(props) {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

    const handleFormSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const params = new URLSearchParams()
        params.append('username', usernameRef.current.value)
        params.append('email', emailRef.current.value)
        params.append('password', passwordRef.current.value)

        fetch("/api/register", {
            method: "POST",
            body: params
        }).then(body=>body.json())
            .then(data => {
                localStorage.setItem("token", data.token);
                setIsLoggedIn(true);
            })
            .catch(error => console.error(error))
    }

    return (
        isLoggedIn ? <Redirect to={{ pathname: "/", state: { from: props.location  } }} /> :
            
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
                        pattern=".{2,20}"
                        ref={usernameRef}
                        required
                        />
                        <br />
                        <input
                        type="text"
                        id="defaultFormLoginEmailEx"
                        placeholder="Email"
                        className="form-control"
                        pattern=".{2,20}"
                        ref={emailRef}
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
                            Register
                        </MDBBtn>
                        <br />
                        <p>Have an account? <Link to="/login" style={{color: "black", textDecoration: "underline", fontStyle: "oblique", fontWeight: "bold"}}>Log in</Link></p>
                        <br />
                        <p>By registering, you agree to ToolBank$' 
                            <Link to="/login" style={{color: "black", textDecoration: "underline", fontStyle: "oblique", fontWeight: "bold"}}>Terms & Conditions</Link> 
                        {" "} and {" "}
                            <Link to="/login" style={{color: "black", textDecoration: "underline", fontStyle: "oblique", fontWeight: "bold"}}>Privacy Policy</Link>
                        </p>
                        </div>
                    </form>
                    </MDBAnimation>
                    </MDBCol>
                </MDBRow>
             </div>
    )
}

export default Register;
