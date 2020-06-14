import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import moment from 'moment';
import AllPosts from './AllPosts'



class UserDetails extends React.Component {

  
    render(){
        console.log(this.props)
        console.log(this.props.match.params.id)
        let user = this.props.user || null
        // const userposts = this.props.user.posts
      
        console.log(user)
  return(
      <div>
        

        {user === null ? <div></div> :
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
            
            <h1><div>{user.username}'s Profile and Posts</div></h1>
            <div>Contact: {user.email}</div>
            <div>Member since: {moment(user.createdAt).format("dddd, MMMM Do YYYY")}</div>
            {/* <div>{user.posts}</div> */}
            <div>
              <AllPosts userposts={user.posts} author={user.username} />
          
            </div>
         
        </div>

        }
       
      </div>
      
    );

        }
  }

export default (UserDetails);