import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Admin from './Admin'
import NoMatch from './pages/NoMatch'

import Home from './pages/Home'
import Buttons from './pages/UI/Buttons'
import Modals from './pages/UI/Modals'
import Loading from './pages/UI/Loading'
import Notification from './pages/UI/Notification'
import Message from './pages/UI/Message'
import Tabs from './pages/UI/Tabs'
import Gallery from './pages/UI/Gallery'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' render={() => {
              return (
                <Admin>
                  <Route path='/admin/home' component={Home}></Route>
                  <Route path='/admin/ui/buttons' component={Buttons}></Route>
                  <Route path='/admin/ui/modals' component={Modals}></Route>
                  <Route path='/admin/ui/loading' component={Loading}></Route>
                  <Route path='/admin/ui/messages' component={Message}></Route>
                  <Route path='/admin/ui/tabs' component={Tabs}></Route>
                  <Route path='/admin/ui/gallery' component={Gallery}></Route>
                </Admin>
              )
            }}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}

export default Router