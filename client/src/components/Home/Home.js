import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ToolCard from "../ToolCard/ToolCard";
// import DropdownFilter from "../Dropdown/Dropdown";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBAnimation,
  MDBCardGroup,
} from "mdbreact";
import "./Home.css";

export function Home() {
  const [tools, setTools] = useState([]);
  const [toolSearch, setToolSearch] = useState("");

  // Load all available tools and store them with setTools
  useEffect(() => {
    loadTools();
  }, []);

  // Loads all tools and sets them to tools
  const loadTools = () => {
    API.getTools()
      .then(res => {
        setTools(res.data)
        console.log("tools", res.data)})
      .catch(err => console.log(err));
  };

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setToolSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get tools update the tools state
    event.preventDefault();
    API.getSearchedTool(toolSearch)
      .then((res) => setTools(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <header className="bgheader img-fluid">
        <Navigation />
        <img
          src={require("../../images/Toolbank$-logo.png")}
          alt="ToolBanks Logo"
          className="figure-img img-fluid logo"
        />
        <MDBBtn
          size="lg"
          className="float-right post-tool"
          color="dark"
          href="/postTool"
        >
          Post tool
        </MDBBtn>
        <br />
        <MDBAnimation type="slideInDown">
          <div className="input-group md-form form-sm form-1 pl-0">
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={toolSearch}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <MDBBtn
                onClick={handleFormSubmit}
                color="black"
                className="input-group-text lighten-3"
                id="basic-text1"
                type="submit"
              >
                <MDBIcon className="text-white" icon="search" size="lg"/>
              </MDBBtn>
            </div>
          </div>
        </MDBAnimation>
      </header>
      {/* <MDBRow className="heading">
        <MDBCol sm="3"></MDBCol>
        <MDBCol sm="6">
          <h2 className="text-center font-weight-bold">
            Tools available in your neighborhood{" "}
          </h2>
        </MDBCol>
        <MDBCol sm="3"><DropdownFilter /></MDBCol>
      </MDBRow> */}
      <h2 className="text-center font-weight-bold" style={{marginTop: 20}}>
            Tools available in your neighborhood{" "}
          </h2>
      <MDBContainer>
        <MDBAnimation type="slideInUp">
          
            {tools.length ? (
              <MDBCardGroup deck>
                {tools.map(tool => (
                  <ToolCard
                  key={tool._id}
                    imageUrl={tool.imageUrl}
                    price={tool.price}
                    toolName={tool.toolName}
                    address={tool.address}
                  />
                ))}
              </MDBCardGroup>
            ) : (
              <h1 className="text-center">No Tools to Display</h1>
            )}
          
        </MDBAnimation>
      </MDBContainer>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
