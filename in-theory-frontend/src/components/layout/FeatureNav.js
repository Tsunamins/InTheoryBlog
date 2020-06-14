import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'


const FeatureNav = () => {
 

  return(
      <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <div className="d-block p-5 btn btn-info">
                <Link to="/">Home</Link>
          </div>
           
          <div className="d-block p-5 btn btn-info">
                <Link to="/users">All Users</Link>
          </div>

          <div className="d-block p-5 btn btn-info">
                <Link to="/posts">All Posts</Link>
          </div>


        </div>
      
    );
  }



export default (FeatureNav)