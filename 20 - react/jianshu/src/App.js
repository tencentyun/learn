import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import Header from './common/header/header'
import { GlobalStyle } from './style.js';
import { GlobalStyleIconfont } from './statics/iconfont/iconfont';
import store from './store/store'


function App() {
  return (
    <Fragment>
      <GlobalStyle whiteColor />
      <GlobalStyleIconfont whiteColor></GlobalStyleIconfont>
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </Fragment>
  );
}

export default App;
