import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import { GlobalStyle } from './style.js';
import { GlobalStyleIconfont } from './statics/iconfont/iconfont';
import store from './store'
import Home from './pages/home'

function App() {
  return (
    <Fragment>
      <GlobalStyle whiteColor />
      <GlobalStyleIconfont whiteColor></GlobalStyleIconfont>
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact render={() => <div>详情</div>}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
