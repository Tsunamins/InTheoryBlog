export const createPost = (postData, history) => dispatch => {
   
    return fetch("http://localhost:5000/api/v1/posts/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(resp => console.log(resp.json()))
    // .then(resp => history.push("/:id"))
  
}