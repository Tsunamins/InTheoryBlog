export const getUsers = () => dispatch => {  
     
        return fetch('http://localhost:5000/api/v1/users')
         .then(resp => resp.json())
         .then(response => {
             if(response.error){
                 alert(response.error)
             } else {
                console.log(response.data)
                dispatch(getAllUsers(response.data))
             
             }
             })
             .catch(console.log)
           
   }
 
 
   //don't technically use this as of now, unless to create a 'loaded post'
   export const viewUser = (user_id) => dispatch => {  
     
     return fetch(`http://localhost:5000/api/v1/users/${user_id}`)
      .then(resp => resp.json())
      .then(response => {
          if(response.error){
              alert(response.error)
          } else {
              console.log(response)
           
          }
          })
          .catch(console.log)
        
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //action creators
 
 
   export const getAllUsers = users => {    
     return {
         type: "GET_USERS",
         users 
     }
   }
 
 
 