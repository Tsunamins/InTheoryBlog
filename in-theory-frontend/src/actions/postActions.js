export const createPost = (postData, history) => dispatch => {
   console.log(postData)
    return fetch("http://localhost:5000/api/v1/posts/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(resp => resp.json())
    
   
    
    // .then(resp => history.push("/:id"))
    .then(response => {
        if(response.error){
          alert(response.error)
        } else {
           
          dispatch(addPost(response.data))
        }
      })
      .catch(console.log)
  
}

export const getPosts = () => dispatch => {  
    
       return fetch('http://localhost:5000/api/v1/posts')
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else {
            
              dispatch(getAllPosts(response.data))
            }
            })
            .catch(console.log)
          
  }


  //don't technically use this as of now, unless to create a 'loaded post'
  export const viewPost = (post_id) => dispatch => {  
    
    return fetch(`http://localhost:5000/api/v1/posts/${post_id}`)
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

export const addPost = post => {    
    return {
        type: "ADD_POST",
        post 
    }
  }

  export const getAllPosts = posts => {    
    return {
        type: "GET_POSTS",
        posts 
    }
  }


