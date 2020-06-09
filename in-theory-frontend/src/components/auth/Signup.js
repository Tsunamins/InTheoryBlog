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
        username: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
        };

    this.props.signup(newUser, this.props.history)
    this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
        
  })

    
  };


  render() {

   
        return (
            <div>
                <div><Link to="/">something here </Link> </div>
                <div><h4>Register</h4></div>
                <div>Already have an account? <Link to="/login">Log in</Link></div>
             
             <div>   
       
                <form noValidate onSubmit={this.handleSubmit}>
                <label htmlFor="name">Username</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.username}
                    placeholder="Username"
                  id="name"
                  type="text"
                />
                
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  placeholder="Email"
                  id="email"
                  type="email"
                />
                
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.password}
                    placeholder="Password"
                  id="password"
                  type="password"
                />
                
                <label htmlFor="password2">Confirm Password</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.password2}
                    placeholder="Confirm password"
                  id="password2"
                  type="password"
                />
                
             
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