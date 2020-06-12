import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Signup";
import Login from "./components/auth/Login";
import CreatePost from "./components/posts/CreatePost"
import {loadUser} from './actions/authActions';
import {getPosts} from './actions/postActions'


// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";

class App extends React.Component {

  componentDidMount(){
    this.props.getPosts();
  }

  render(){
    console.log(this.props)
    const currentUser= this.props.currentUser
    console.log(currentUser)
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        { currentUser.length > 0 ? 
            <div>
                <Link to="/new">Create a new Post</Link> 
                <Route exact path="/new" component={CreatePost} />
            </div> 
          : null }
      
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

export default connect(mapStateToProps, {loadUser, getPosts})(App);
