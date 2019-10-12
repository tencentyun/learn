import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Topic from './Topic'
import App from '../App'

class IRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <App>
            <Route path='/home' render={() => {
              return (
                <Home>
                  <Route path='/home/sub' component={About}></Route>
                </Home>
              )
            }}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topic' component={Topic}></Route>
          </App>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default IRouter

  