import React from 'react';
import { Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'




function AllUsers(props) {

 console.log(props)
 const userLinks = props.allUsers.map(u => 
    <li key={u._id}>
      <Link to={`/users/${u._id}`}>{u.username}</Link>
    </li>

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