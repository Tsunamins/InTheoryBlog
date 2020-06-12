import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { createPost } from '../../actions/postActions.js'


class CreatePost extends Component {

    state = {
      title: "",
      content: "",
      topic: "",
      author: ""
   
  }

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();
    const newPost = {
        title: this.state.title,
        content: this.state.content,
        topic: this.state.topic,
        author: this.props.currentUser[0]._id
      
        };
        console.log(newPost)
    this.props.createPost(newPost, this.props.history)
    this.setState({
        title: "",
        content: "",
        topic: "",
        author: ""
        
  })

    
  };


  render() {

        console.log(typeof this.props.currentUser[0]._id)
        return (
            <div>
                <div><Link to="/">Home</Link> </div>
                <div><h4>Create a Post</h4></div>
            <div>   
       
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                    placeholder="Title"
                  id="title"
                  type="text"
                />
                <label htmlFor="topic">Topic</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.topic}
                    placeholder="Topic or Genre"
                  id="topic"
                  type="text"
                />
                
                <label htmlFor="content">Add the content of the blog:</label>
                <input
                  onChange={this.handleChange}
                  value={this.state.content}
                  placeholder="Content"
                  id="content"
                  type="textarea"
                />
                
                
                
                          
             
              <div>
                <button type="submit">Create Post</button>
              </div>
            </form>
          </div>
        </div>
  
    );
  }

}

const mapStateToProps = state => {
    console.log(state)
    return ({
      
      currentUser: state.authReducer.user,
      allPosts: state.postReducer
     
    })
  }

export default connect(mapStateToProps, {createPost}) (CreatePost);