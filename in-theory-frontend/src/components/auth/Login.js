import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { login } from '../../actions/authActions.js'

class Login extends Component {
 state = {
      email: "",
      password: "",
   
  
  }
handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(userData, this.props.history)
  };


render() {
  
        return (
            <div>

                <div><Link to="/">Home</Link></div>
                <div><h4> Login</h4></div>
                 <div><p>Don't have an account? <Link to="/register">Register</Link></p></div>
            
            <div>
                <form noValidate onSubmit={this.onSubmit}>

                <label htmlFor="email">Email</label>   
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                    placeholder="Email"
                  id="email"
                  type="email"
                />
                
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                    placeholder="Password"
                  id="password"
                  type="password"
                />
                
             
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
    
    );
  }
}


export default connect(null, {login})(Login)