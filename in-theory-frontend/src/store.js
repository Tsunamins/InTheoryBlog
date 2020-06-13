import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from './reducers/authReducer'
import postReducer from './reducers/postReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({

    authReducer,
    postReducer,
    userReducer
 })


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store