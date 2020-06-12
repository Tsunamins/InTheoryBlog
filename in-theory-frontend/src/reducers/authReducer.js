
  const initialState = {
    isAuthenticated: false,
    user_id: {},
    loading: false,
    user: []
  };
  export default function(state = initialState, action) {
 
    switch (action.type) {
       
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: true,
                user_id: action.decoded
                
            };
            
        case "LOGOUT_USER":
            return initialState
        
        case "LOAD_CURRENT_USER":
            return {
                ...state,
                loading: true,
                user: [action.user]
            };
      default:
        return state;
    }
    
  }
