import React from 'react';
import { Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'




function AllUsers(props) {



  const userLinks = props.allUsers.map(u => 
    <div className="card" key={u._id}>
        <div className="card-body">
          <h5 className="card-title">{u.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Number of Posts: {u.posts.length}</h6>
          <div className="btn btn-info"><Link to={`/users/${u._id}`}>View User</Link></div>
        </div>
      </div>
   )

 
      return(
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h1>Authors on In Theory</h1>
         
            {userLinks}
         
        </div>
      )

 
}

const mapStateToProps = state => {
    return({
        allUsers: state.userReducer
    })
}


export default connect(mapStateToProps)(AllUsers)