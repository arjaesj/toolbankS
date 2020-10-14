import React from "react";
import { Route, Switch } from 'react-router-dom';
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import * as components from "./components";

const { Home, Register, LogIn, LogOut, PrivateRoute, TnC, PrivacyPolicy } = components

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/logout" component={LogOut}/>
          <Route path="/tnc" component={TnC}/>
          <Route path="/privacypolicy" component={PrivacyPolicy}/>
        </Switch>
      </main>
    </div>
  );
}


export default App;
