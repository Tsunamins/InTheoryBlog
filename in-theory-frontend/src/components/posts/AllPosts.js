import React, { Component } from "react";
import { Link } from "react-router-dom";


const AllPosts = (props) => {

     const posts = props.posts.map(p => 
    <div key={p._id}>
        <Link to={`/posts/${p._id}`}>{p.title}</Link></div>
    )
     
  return(
      <div>
          <Link to="/">Home</Link>
        <hr></hr>
        <div>
            {posts}
        </div>
      </div>
      
    );
  }
  

export default AllPosts