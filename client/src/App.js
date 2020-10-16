import React from "react";
import { Route, Switch } from 'react-router-dom';
import * as components from "./components";

const { Register, TnC, PrivacyPolicy, LogIn, LogOut, Home, MyToolBanks, PostTool, RentalForm, PrivateRoute } = components

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
          <Route path="/myToolbanks" component={MyToolBanks}/>
          <Route path="/postTool" component={PostTool}/>
          <Route path="/rentalForm" component={RentalForm}/>
        </Switch>
      </main>
    </div>
  );
}


export default App;
