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
    this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
        
  })
    this.props.history.push('/myposts')
  };


render() {
  
        return (
            <div>

              
                <div><h4> Login</h4></div>
                 <div><p>Don't have an account? <Link to="/signup">Sign Up</Link></p></div>
            
            <div>
                <form noValidate onSubmit={this.handleSubmit}>
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
                
             
                  <div>
                    <button type="submit" className="btn btn-info">Login</button>
                  </div>
            </form>
          </div>
        </div>
    
    );
  }
}


export default connect(null, {login})(Login)