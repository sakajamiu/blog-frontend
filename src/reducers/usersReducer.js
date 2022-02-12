import users from '../service/user'

export const Users = () => {
  return async dispatch => {
    const RegisteredUsers = await users.getAll()
    dispatch(
      {
        type: 'USER INITIALIZE',
        Users: RegisteredUsers
      }
    )

  }
}
export const resetUsers =() => {
  return{
    type: 'RESET USER',
    data: []
  }
}
export const Register = (userDetails) => {
  return async dispatch => {
    try{
      const user = await users.register(userDetails)
      dispatch({
        type: 'Register',
        data : user
      })
    }catch(err){
      dispatch(
        {
          type: 'FAILED',
          data: 'failed'
        }
      )
    }

  }
}

const reducer = (state =[], action) => {
  switch(action.type) {
  case 'USER INITIALIZE':
    return action.Users
  case 'Register':
    return action.data
  case 'FAILED':
    return action.data
  case 'RESET USER':
    return action.data
  default:
    return state
  }
}

export default reducer