import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const signup = (userData, history) => dispatch => {
   
    return fetch("http://localhost:5000/api/v1/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(resp => console.log(resp))
    // .then(response => {
    //   if (response.error) {
    //     alert(response.error)
    //   } else {
    //     console.log(response)
    //     //     console.log(response.user.data)
    //     //     console.log(response.jwt)
    //     // dispatch(loginUser(response.user.data))
    //     // localStorage.setItem('token', response.jwt)
    //   }
    // })
    // .catch(console.log)
}

export const login = (userData, history) => dispatch => {
    
    return fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(resp => console.log(resp))
    // .then(response => {
    //   if (response.error) {
    //     alert(response.error)
    //   } else {
    //     console.log(response)
        //     console.log(response.user.data)
        //     console.log(response.jwt)
        // dispatch(loginUser(response.user.data))
        // localStorage.setItem('token', response.jwt)
    //   }
    // })
    // .catch(console.log)
}





export const logout = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    //setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(logoutUser());
  };




//action creators
export const loginUser = user => {    
    return {
        type: "SET_CURRENT_USER",
        user 
    }
    
}


export const logoutUser = () => {
    return {
      type: "LOGOUT_USER"
    }
  }