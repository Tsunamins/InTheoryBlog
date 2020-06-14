import React from "react";
import { Link } from "react-router-dom";



const LandingNav = () => {
 

  return(
      <div className="col" >
          <li className="list-inline-item btn btn-outline-info">
                <Link to="/">Home</Link>
          </li>
           
          <li className="list-inline-item btn btn-outline-info">
                <Link to="/users">All Users</Link>
          </li>

          <li className="list-inline-item btn btn-outline-info">
                <Link to="/posts">All Posts</Link>
          </li>


        </div>
      
    );
  }



export default (LandingNav)

//export default Landing;

