import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import AuthNav from "./components/layout/AuthNav"
import LandingNav from "./components/layout/LandingNav";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import CreatePost from "./components/posts/CreatePost"
import {loadUser} from './actions/authActions';
import {getPosts} from './actions/postActions'
import {getUsers} from './actions/userActions'
import AllPosts from './components/posts/AllPosts';
import ViewPost from './components/posts/ViewPost';
import EditPost from './components/posts/EditPost';
import AllUsers from './components/posts/AllUsers'
import UserDetails from './components/posts/UserDetails'
import FeatureNav from './components/layout/FeatureNav';
import UserNav from './components/layout/UserNav'
import Logout from './components/auth/Logout'



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
    const users = this.props.allUsers
    return (
      <div className="App container">
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
          <LandingNav />
          { currentUser.length > 0 ? 
              <UserNav /> : <AuthNav />  }
      </div>
       
      <div>
      { currentUser.length > 0 ?
      <div>
        <Route exact path="/new" component={CreatePost} />
        
        </div>
        : 
        <div>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} /> 
        </div>
      }
      
      </div>

      
       
        { currentUser.length > 0 ?
        <div>
          <Route exact path="/myposts" render={props => { return <AllPosts myposts={this.props.currentUser[0].posts} /> } } />
        </div>
          :
          null
        }

  
        <Route exact path="/users/:id" render={props => {
             
             const user = users.find(element => element._id.toString() === props.match.params.id)
         
           
             return <UserDetails user={user} {...props}/>
           }
         }/>

        
      
        <Route exact path='/posts/:id' render={props => {
             
              const post = posts.find(element => element._id.toString() === props.match.params.id)
          
            
              return <ViewPost post={post} {...props}/>
            }
          }/>
          <Route exact path='/posts/:id/edit' render={props => {
             
             const post = posts.find(element => element._id.toString() === props.match.params.id)
         
           
             return <EditPost post={post} {...props}/>
           }
         }/>
   


       
        {/* main body section */}
        <div>
        <hr></hr>
          <div>
            <div><Route exact path="/" component={FeatureNav} /></div>
            <div>
              
              <Route exact path="/posts" render={props => { return <AllPosts posts={this.props.allPosts} /> } } />
              {/* <AllPosts posts={this.props.allPosts} /> */}
            </div>
            
            <div>
              <Route exact path="/users" component={AllUsers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {

  return ({
    
    currentUser: state.authReducer.user,
    allPosts: state.postReducer,
    allUsers: state.userReducer,
   
   
  })
}

export default connect(mapStateToProps, {loadUser, getPosts, getUsers})(App);
