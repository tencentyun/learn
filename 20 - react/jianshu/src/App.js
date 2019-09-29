import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import { GlobalStyle } from './style.js';
import { GlobalStyleIconfont } from './statics/iconfont/iconfont';
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Fragment>
      <GlobalStyle whiteColor />
      <GlobalStyleIconfont whiteColor></GlobalStyleIconfont>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
