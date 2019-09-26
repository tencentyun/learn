import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStatus = fromJS({
  focuse: false,
  list: []
})

export default (state = defaultStatus, action ) => {
  if(action.type === constants.SEARCH_FOCUSE){
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focuse', true)
  }
  if(action.type === constants.SEARCH_BLUR){
    return state.set('focuse', false)
  }
  if(action.type === constants.INFO_LIST){
    return state.set('list', action.data)
  }
  return state
}