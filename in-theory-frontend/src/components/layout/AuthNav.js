import React, { Component } from "react";
import { Link } from "react-router-dom";


const AuthNav = () => (
 
        <div className="float-right" id="auth-positions">
            <li className="list-inline-item btn btn-outline-info">
              <Link to="/signup">Sign Up</Link>
            </li>
        
            <li className="list-inline-item btn btn-outline-info">
              <Link to="/login">Log In</Link>
            </li>
           
        </div>
      
    );

export default AuthNav;