import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { signup } from '../actions/authActions.js'


class Signup extends Component {

    state = {
      name: "",
      email: "",
      password: "",
      password2: ""
   
  }

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();
    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
        };

    this.PaymentResponse.signup(newUser, this.props.history)
    console.log(newUser);
  };


  render() {

   
        return (
            <div>
                <div><Link to="/">something here </Link> </div>
                <div><h4>Register</h4></div>
                <div>Already have an account? <Link to="/login">Log in</Link></div>
             
             <div>   
       
                <form noValidate onSubmit={this.handleSubmit}>
          
                <input
                  onChange={this.handleChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
             
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              
                <input
                  onChange={this.handleChange}
                  value={this.state.password}
       
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              
                <input
                  onChange={this.handleChange}
                  value={this.state.password2}
               
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
             
              <div>
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
  
    );
  }

}

export default connect(null, {signup}) (Signup);