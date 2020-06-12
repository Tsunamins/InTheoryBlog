import React, { Component } from "react";
import { Link } from "react-router-dom";


function AllPosts(props){
 console.log(this.props)
  return(
      <div>
        <div>
            <Link to="/">Home</Link>
          </div>
            <div>
              <Link to="/posts/:id">A link to a post</Link>
            </div>
      </div>
      
    );
  }
export default AllPosts;