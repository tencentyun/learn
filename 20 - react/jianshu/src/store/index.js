import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducder from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducder,
  composeEnhancers(applyMiddleware(thunk))      // 使用thunk中间件
)

export default store