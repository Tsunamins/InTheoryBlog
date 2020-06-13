import React, { Component } from "react";
import { Link } from "react-router-dom";


const AllPosts = (props) => {
 

 const postLinks = props.posts.map(p => 
    <div key={p._id}>
        <Link to={`/posts/${p._id}`}>{p.title}</Link></div>
    )
  return(
      <div>
     
        <hr></hr>
        <div>
            {postLinks}
        </div>
      </div>
      
    );
  }
  const mapStateToProps = state => {
    return({
        allPosts: state.postsReducer
    })
}


export default AllPosts