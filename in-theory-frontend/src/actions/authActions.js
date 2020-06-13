import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const signup = (userData, history) => dispatch => {
   
    return fetch("http://localhost:5000/api/v1/auths/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(resp => console.log(resp.json()))
    .then(resp => history.push("/login"))
  
}

export const login = (userData, history) => dispatch => {
    
    return fetch("http://localhost:5000/api/v1/auths/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
     .then(response => {
       if (response.error) {
         alert(response.error)
       } else {
         console.log(response.token) //response is token: bearer, not sure if I have to remove bearer via string or remove bearer from backend
         const token = response.token
         localStorage.setItem('token', response.token)
         const decoded = jwt_decode(token);
       
         dispatch(loginUser(decoded))
         dispatch(getUser(decoded))
       
       }
     })
     .catch(console.log)
}

//just get user by id for now:
//change to authorization header later to continuously to protect routes and validate token
export const getUser = (user_id) => {
  console.log(user_id.id)
      
    //return dispatch (built in) as an argument, a thunk function 
    return dispatch => {

     return fetch(`http://localhost:5000/api/v1/auths/${user_id.id}`)
      .then(resp => resp.json())
      .then(response => {
       
          dispatch(loadUser(response))
            
       })
    }
}



//use later with protected routes from backend
// export const authorizeUser = () => {
//     //new
//     return dispatch => {
//     const token = localStorage.getItem("token")
//     if (token) {
    
//       return fetch("http://localhost:5000/api/v1/users/login", {
     
//         headers: {
      
//           "Authorization": token
//         },
//       })
//         .then(resp => resp.json())
        
//     //     .then(response => {
//     //       if (response.error) {
//     //         alert(response.error)
//     //       } else {
//     //         dispatch(loginUser(response.user.data))
            
//     //       }
//     //     })
//     //     .catch(console.log)
//          }
//      }

// }





export const logout = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    //setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(logoutUser());
  };




//action creators
export const loginUser = decoded => {
    
    return {
        type: "LOGIN_USER",
        decoded 
    }
    
}

export const loadUser = user => {

    return {
        type: "LOAD_CURRENT_USER",
        user
    }
}


export const logoutUser = () => {
    return {
      type: "LOGOUT_USER"
    }
  }