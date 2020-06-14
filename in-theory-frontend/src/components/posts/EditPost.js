import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
 import { editPost } from '../../actions/postActions.js'


class EditPost extends Component {
    
    state = {
      title: "",
      content: "",
      topic: "",
       
   
  }

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();
    const editPost = {
     
        title: this.state.title,
        content: this.state.content,
        topic: this.state.topic,
      
      
        };
        console.log(editPost)
    this.props.editPost(editPost, this.props.post._id)
    this.setState({
        title: "",
        content: "",
        topic: "",
      
        
  })
  this.props.history.push(`/posts/${this.props.post_id}`)
    console.log(this.props)

    
  };


  render() {
        let post = this.props.post || null
        console.log(this.props)
      
        if(post === null){
            return (<div></div>)
        } else {
        return (
          
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
              
                <div><h4>Edit this Post</h4></div>
            <div>   
       
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.title}
                      placeholder={post.title}
                      id="title"
                      type="text"
                      className="form-control"
                    />
                    </div>

                  <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.topic}
                      placeholder={post.topic}
                      id="topic"
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="content">Add the content of the blog:</label>
                    <textarea
                      onChange={this.handleChange}
                      value={this.state.content}
                      placeholder={post.content}
                      id="content"
                      // type="textarea"
                      className="form-control"
                      rows="10"
                    />
                  </div>
        
                  <div>
                    <button type="submit" className="btn btn-info">Submit Changes</button>
                  </div>
            </form>
          </div>
        </div>
     
  
    );
        }
  }

}

const mapStateToProps = state => {
    console.log(state)
    return ({
      
      currentUser: state.authReducer.user,
      allPosts: state.postReducer
     
    })
  }

export default connect(mapStateToProps, {editPost}) (EditPost);