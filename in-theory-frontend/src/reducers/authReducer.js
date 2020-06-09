
  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            };
        case "LOGOUT_USER":
            return initialState
        
        case "USER_LOADING":
            return {
                ...state,
                loading: true
            };
      default:
        return state;
    }
  }