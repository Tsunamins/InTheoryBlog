import React, { Component } from "react";
import { Link } from "react-router-dom";


const Landing = () => (
 
  
      <div>
        <div>
            <Link to="/">Home</Link>
          </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
            <div>
              <Link to="/login">Log In</Link>
            </div>
          </div>
      
    );

export default Landing;