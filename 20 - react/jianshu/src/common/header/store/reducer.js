import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focuse: false,
  list: [],
  page: 1,
  total: 0,
  mouseIn: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUSE:
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focuse', true)
    case constants.SEARCH_BLUR:
      return state.set('focuse', false)
    case constants.INFO_LIST:
      return state.merge({
        list: action.data,
        total: action.total
      })
    case constants.MOUSE_IN:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVER:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
  // if(action.type === constants.SEARCH_FOCUSE){
  //   // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  //   return state.set('focuse', true)
  // }
  // if(action.type === constants.SEARCH_BLUR){
  //   return state.set('focuse', false)
  // }
  // if(action.type === constants.INFO_LIST){
  //   return state.set('list', action.data)
  // }
  // return state
}