import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to='/home/sub'>嵌套路由</Link>
        {this.props.children}

      </div>
    )
  }
}


export default Home

