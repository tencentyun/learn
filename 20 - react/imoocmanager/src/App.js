import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
// import Home from './pages/Home'
import './App.scss'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './demoTest/Home'
import About from './demoTest/About'
import Topic from './demoTest/Topic'


// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/topic'>topic</Link>
            </li>
          </ul>
          <br />
          <Switch>
            <Route exact={true} path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topic' component={Topic}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      // <Row>
      //   <Col span={4}>
      //   <NavLeft></NavLeft>
      //   </Col>
      //   <Col span={20} className='main'>
      //     <Header></Header>
      //     <Row className='main-content'>
      //       <Home></Home>
      //     </Row>
      //     <Footer></Footer>
      //   </Col>
      // </Row>
    )
  }
}

export default App;

