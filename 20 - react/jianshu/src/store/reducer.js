import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'

const reducder = combineReducers({
  header: headerReducer
})

export default reducder