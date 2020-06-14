import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { signup } from '../../actions/authActions.js'


class Signup extends Component {

    state = {
      username: "",
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
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
        };
        console.log(newUser)
    this.props.signup(newUser, this.props.history)
    this.setState({
        username: "",
        email: "",
        password: "",
        password2: ""
        
  })

    
  };


  render() {

   
        return (
            <div>

                <div><h4>Sign Up</h4></div>
                <div>Already have an account? <Link to="/login">Log in</Link></div>
             
             <div>   
                
                <form noValidate onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.username}
                      placeholder="Username"
                      id="username"
                      type="text"
                      className="form-control"
                    />
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.email}
                      placeholder="Email"
                      id="email"
                      type="email"
                      className="form-control"
                    />
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.password}
                      placeholder="Password"
                      id="password"
                      type="password"
                      className="form-control"
                    />
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.password2}
                      placeholder="Confirm password"
                      id="password2"
                      type="password"
                      className="form-control"
                    />
                  </div>
                
             
                  <div>
                    <button type="submit" className="btn btn-info">Sign up</button>
                  </div>
            </form>
          </div>
        </div>
  
    );
  }

}

export default connect(null, {signup}) (Signup);