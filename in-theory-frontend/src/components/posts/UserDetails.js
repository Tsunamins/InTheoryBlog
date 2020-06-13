import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import moment from 'moment';



class UserDetails extends React.Component {

  
    render(){
        console.log(this.props)
        console.log(this.props.match.params.id)
        let user = this.props.user || null
      
        console.log(user)
  return(
      <div>
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/users">All Users</Link>
        </div>

        {user === null ? <div></div> :
        <div>

            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{moment(user.createdAt).format("dddd, MMMM Do YYYY")}</div>
            {/* <div>{user.posts}</div> */}
         
        </div>

        }
       
      </div>
      
    );

        }
  }

export default (UserDetails);