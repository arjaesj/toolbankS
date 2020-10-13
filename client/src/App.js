import React from "react";
import { Route, Switch } from 'react-router-dom';
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import * as components from "./components";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import LogIn from "./components/Login";
// import LogOut from "./components/LogOut";

// class App extends Component {
//   render() {
//     return (
//       <MDBContainer>
//         <MDBRow center style={{ height: "100vh" }}>
//           <MDBCol middle="true" sm="8" className="text-center">
//             <img src={logo} alt="logo" style={{ width: "10rem" }} />
//             <h1>Welcome to Your MDB React App</h1>
//             <p className="mb-2">The application is configured and ready to import our components.</p>
//             <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     );
//   }
// }

const { Home, Register, LogIn, LogOut, PrivateRoute } = components

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/logout" component={LogOut}/>
        </Switch>
      </main>
    </div>
  );
}


export default App;
