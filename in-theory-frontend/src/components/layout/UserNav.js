import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import Logout from '../auth/Logout'


const UserNav = () => {
 

  return(
      <div className="col" >
          
          <li className="list-inline-item btn btn-outline-info">
            <Link to="/new">Create a new Post</Link>
          </li>
           
          <li className="list-inline-item btn btn-outline-info">
            <Link to="/myposts">View My Posts</Link>
          </li>

          <li className="list-inline-item"><Logout /></li>

          

        </div>
      
    );
  }



export default (UserNav)