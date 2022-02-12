
export const message = (messages) => {
  return{
    type: 'MESSAGE',
    data: messages
  }
}
export const reset = () => {
  return{
    type: 'RESET',
    data: null
  }
}

const reducer = (state = null,action ) => {
  switch(action.type){
  case 'MESSAGE':
    return action.data
  case 'RESET':
    return action.data
  default:
    return state
  }
}

export default reducer