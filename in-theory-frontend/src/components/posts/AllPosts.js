import React from "react";
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
      <div className="card" key={p._id}>
          <div className="card-body">
            <h5 className="card-title">{p.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{p.topic}</h6>
            <div className="btn btn-info"><Link to={`/posts/${p._id}`}>Read More</Link></div>
          </div>
        </div>
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