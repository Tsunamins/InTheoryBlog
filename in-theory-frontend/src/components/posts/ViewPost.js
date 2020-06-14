import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import moment from 'moment';
import {deletePost} from '../../actions/postActions'


class ViewPost extends React.Component {

    handleDelete = () => {
       
        this.props.deletePost(this.props.post._id)
        this.props.history.push("/posts")
      }
  
    render(){
        console.log(this.props)
        console.log(this.props.match.params.id)
        let post = this.props.post || null
      
        console.log(post)
  return(
      <div className="shadow-sm p-3 mb-5 bg-white rounded">
       

        {post === null ? <div></div> :
        <div>

            <div>{post.title}</div>
            <div>{post.author.username}</div>
            <div>{moment(post.createdAt).format("dddd, MMMM Do YYYY")}</div>
            <div>{post.topic}</div>
            <div>{post.content}</div>

            <div className="row px-2" >
              <div className="btn btn-info" id="edit-buttons">
                <Link to={`/posts/${post._id}/edit`}>Edit this post</Link>
              </div>
              <div>
                <button onClick={this.handleDelete} className="btn btn-info" id="edit-buttons">Delete Post</button>
              </div>
            </div>
        </div>

        }
       
      </div>
      
    );

        }
  }

export default connect(null, {deletePost})(ViewPost);