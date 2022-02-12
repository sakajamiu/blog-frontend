import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { reset } from '../reducers/notificationReducer'
import { message } from '../reducers/notificationReducer'
const Notification = () => {
  const messages = useSelector(state => state.message)
  const user = useSelector( state => state.loginuser)

  const dispatch = useDispatch()

  if (messages === null && user!=='unauthorized'){
    return null
  }
  else{
    dispatch(message('wrong username or password'))


    return(
      <Alert style ={{ textAlign:'center' }}>
        {messages}
        {
          setTimeout(() => {
            dispatch(reset())
          },5000)
        }
      </Alert>
    )
  }
}

export default Notification