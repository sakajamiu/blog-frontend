import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/usersReducer'
import loginUserReducers from './reducers/loginUserReducers'
import blogReducer from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'
const reducer = combineReducers({
  blog: blogReducer,
  loginuser: loginUserReducers,
  users: userReducer,
  message: notificationReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store