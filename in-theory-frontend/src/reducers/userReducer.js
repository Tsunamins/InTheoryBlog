export default function post(state = [], action) {
    console.log(action)
    console.log(state)
    switch (action.type) {
      case 'GET_USERS':  
        return action.users
     
        default:
            return state
        }
      }