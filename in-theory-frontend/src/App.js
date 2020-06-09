import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Signup";
import Login from "./components/auth/Login";

// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
