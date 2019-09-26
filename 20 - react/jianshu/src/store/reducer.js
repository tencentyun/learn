const defaultStatus = {
  focuse: false
}

export default (state = defaultStatus, action ) => {
  if(action.type === 'search_focuse'){
    return {
      focuse: true
    }
  }
  if(action.type === 'search_blur'){
    return {
      focuse: false
    }
  }
  return state
}