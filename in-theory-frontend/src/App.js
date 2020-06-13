import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import CreatePost from "./components/posts/CreatePost"
import {loadUser} from './actions/authActions';
import {getPosts} from './actions/postActions'
import {getUsers} from './actions/userActions'
import AllPosts from './components/posts/AllPosts';
import ViewPost from './components/posts/ViewPost';

// import EditPost from './components/posts/EditPost';
// import DeletePost from './components/posts/DeletePost';


// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";

class App extends React.Component {

  componentDidMount(){
    this.props.getPosts();
    this.props.getUsers();

  }



  render(){
   console.log(this.props)
    const currentUser= this.props.currentUser
  
    const posts = this.props.allPosts
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/posts" component={AllPosts} /> */}
        <Route exact path='/posts/:id' render={props => {
             
              const post = posts.find(element => element._id.toString() === props.match.params.id)
          
            
              return <ViewPost post={post} {...props}/>
            }
          }/>
        </Switch>


        {/* <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/posts/:id/delete" component={DeletePost} /> */}
        { currentUser.length > 0 ? 
            <div>
                <Link to="/new">Create a new Post</Link> 
                <Route exact path="/new" component={CreatePost} />
            </div> 
          : null }
        
        <div>
        <hr></hr>
          <AllPosts posts={this.props.allPosts} />
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {

  return ({
    
    currentUser: state.authReducer.user,
    allPosts: state.postReducer,
    allUsers: state.userReducer
   
  })
}

export default connect(mapStateToProps, {loadUser, getPosts, getUsers})(App);
