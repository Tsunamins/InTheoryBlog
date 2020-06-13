import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import moment from 'moment';


class ViewPost extends React.Component {
  
    render(){
        console.log(this.props)
        console.log(this.props.match.params.id)
        let post = this.props.post || null
      
        console.log(post)
  return(
      <div>
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/posts">All Posts</Link>
        </div>

        {post === null ? <div></div> :
        <div>

            <div>{post.title}</div>
            <div>{post.author.username}</div>
            <div>{moment(post.createdAt).format("dddd, MMMM Do YYYY")}</div>
            <div>{post.topic}</div>
            <div>{post.content}</div>

        </div>

        }
       
      </div>
      
    );

        }
  }

export default (ViewPost);