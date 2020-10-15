import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import "./PrivacyPolicy.css";

export function PrivacyPolicy() {
  return (
    <React.Fragment>
      <header className="bgheader img-fluid">
        <img
          src={require("../../images/Toolbank$-logo.png")}
          alt="ToolBanks Logo"
          className="figure-img img-fluid logo"
        />
        <br />
        <img
          src={require("../../images/LegalStuff-header.png")}
          alt="Legal Stuff Logo"
          className="figure-img img-fluid d-block legal-logo"
        />
        <p className="text-center" style={{ fontWeight: "bold", fontSize: 13 }}>
          stuff we don't typically red but please read carefully this time.
        </p>
      </header>
      <MDBContainer>
        <MDBRow>
          <MDBAnimation type="slideInLeft">
            <MDBCol>
              <MDBBtn color="black" href="/tnc">
                View Terms & Conditions
              </MDBBtn>
              <MDBBtn color="black" href="/register">
                Back to Register page
              </MDBBtn>
            </MDBCol>
          </MDBAnimation>

          <MDBAnimation type="slideInRight">
            <MDBCol>
              <MDBCard className="card-body">
                <MDBCardTitle>Privacy Policy</MDBCardTitle>
                <MDBCardBody>
                  <h3>
                    <strong>Privacy Policy for ToolBank$</strong>
                  </h3>

                  <p>
                    At ToolBank$, accessible from {""}
                    <a
                      href="https://toolbanks.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ToolBank$ website
                    </a>
                    , one of our main priorities is the privacy of our visitors.
                    This Privacy Policy document contains types of information
                    that is collected and recorded by ToolBank$ and how we use
                    it.
                  </p>

                  <p>
                    If you have additional questions or require more information
                    about our Privacy Policy, do not hesitate to contact us.
                  </p>

                  <p>
                    This Privacy Policy applies only to our online activities
                    and is valid for visitors to our website with regards to the
                    information that they shared and/or collect in ToolBank$.
                    This policy is not applicable to any information collected
                    offline or via channels other than this website. Our Privacy
                    Policy was created with the help of the{" "}
                    <a
                      href="https://www.privacypolicygenerator.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy Generator
                    </a>{" "}
                    and the{" "}
                    <a
                      href="https://www.generateprivacypolicy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Free Privacy Policy Generator
                    </a>
                    .
                  </p>

                  <h4>Consent</h4>

                  <p>
                    By using our website, you hereby consent to our Privacy
                    Policy and agree to its terms. For our Terms and Conditions,
                    please visit the <a href="/tnc">Terms & Conditions</a>.
                  </p>

                  <h4>Information we collect</h4>

                  <p>
                    The personal information that you are asked to provide, and
                    the reasons why you are asked to provide it, will be made
                    clear to you at the point we ask you to provide your
                    personal information.
                  </p>
                  <p>
                    If you contact us directly, we may receive additional
                    information about you such as your name, email address,
                    phone number, the contents of the message and/or attachments
                    you may send us, and any other information you may choose to
                    provide.
                  </p>
                  <p>
                    When you register for an Account, we may ask for your
                    contact information, including items such as name, company
                    name, address, email address, and telephone number.
                  </p>

                  <h4>How we use your information</h4>

                  <p>
                    We use the information we collect in various ways, including
                    to:
                  </p>

                  <ul>
                    <li>Provide, operate, and maintain our webste</li>
                    <li>Improve, personalize, and expand our webste</li>
                    <li>Understand and analyze how you use our webste</li>
                    <li>
                      Develop new products, services, features, and
                      functionality
                    </li>
                    <li>
                      Communicate with you, either directly or through one of
                      our partners, including for customer service, to provide
                      you with updates and other information relating to the
                      webste, and for marketing and promotional purposes
                    </li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                  </ul>

                  <p>
                    You can choose to disable cookies through your individual
                    browser options. To know more detailed information about
                    cookie management with specific web browsers, it can be
                    found at the browsers' respective websites.
                  </p>

                  <h4>Privacy Rights (Do Not Sell My Personal Information)</h4>

                  <p>Consumers have the right to:</p>
                  <p>
                    Request that a business that collects a consumer's personal
                    data disclose the categories and specific pieces of personal
                    data that a business has collected about consumers.
                  </p>
                  <p>
                    Request that a business delete any personal data about the
                    consumer that a business has collected.
                  </p>
                  <p>
                    Request that a business that sells a consumer's personal
                    data, not sell the consumer's personal data.
                  </p>
                  <p>
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>

                  <h4>GDPR Data Protection Rights</h4>

                  <p>
                    We would like to make sure you are fully aware of all of
                    your data protection rights. Every user is entitled to the
                    following:
                  </p>
                  <p>
                    The right to access – You have the right to request copies
                    of your personal data.
                  </p>
                  <p>
                    The right to rectification – You have the right to request
                    that we correct any information you believe is inaccurate.
                    You also have the right to request that we complete the
                    information you believe is incomplete.
                  </p>
                  <p>
                    The right to erasure – You have the right to request that we
                    erase your personal data, under certain conditions.
                  </p>
                  <p>
                    The right to restrict processing – You have the right to
                    request that we restrict the processing of your personal
                    data, under certain conditions.
                  </p>
                  <p>
                    The right to object to processing – You have the right to
                    object to our processing of your personal data, under
                    certain conditions.
                  </p>
                  <p>
                    The right to data portability – You have the right to
                    request that we transfer the data that we have collected to
                    another organization, or directly to you, under certain
                    conditions.
                  </p>
                  <p>
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>

                  <h4>Children's Information</h4>

                  <p>
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to observe, participate in, and/or monitor and
                    guide their online activity.
                  </p>

                  <p>
                    ToolBank$ does not knowingly collect any Personal
                    Identifiable Information from children under the age of 13.
                    If you think that your child provided this kind of
                    information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBAnimation>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

export default PrivacyPolicy;
