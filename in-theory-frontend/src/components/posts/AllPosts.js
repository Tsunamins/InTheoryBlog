import React, { Component } from "react";
import { Link } from "react-router-dom";


const AllPosts = (props) => {
 
  console.log(props)
  let posts = []
  let heading = "Posts"
  
  if(Object.keys(props)[0] === 'posts'){
      heading = "All Posts"
      posts = props.posts
  } else if(Object.keys(props)[0] === 'myposts'){
      heading = "My Posts"
      posts = props.myposts
  } else {
    heading = `${props.author}'s Posts`
    posts = props.userposts
  }
  
    


     const postsList = posts.map(p => 
    <div key={p._id}>
        <Link to={`/posts/${p._id}`}>{p.title}</Link></div>
    )
     
  return(
      <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <h3>{heading}</h3>
        <div>
            {postsList}
        </div>
      </div>
      
    );
  }
  

export default AllPosts