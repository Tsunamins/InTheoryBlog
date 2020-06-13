export default function post(state = [], action) {
   
    switch (action.type) {
      case 'GET_POSTS':  
        return action.posts
      case 'ADD_POST':
         
        return state.concat(action.post)
      case 'DELETE_POST':
        return  state.filter(post => post._id === action.post ? false : true)
      case 'UPDATE_POST':
        return state.map(post => post._id === action.post._id ? action.post : post)
        
        default:
            return state
        }
      }