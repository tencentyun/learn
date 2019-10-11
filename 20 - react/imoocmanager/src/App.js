import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/Home'
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


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
          <Switch>
            <Route exact={true} path='/'>
              <Row>
                <Col span={4}>
                  <NavLeft></NavLeft>
                </Col>
                <Col span={20} className='main'>
                  <Header></Header>
                  <Row className='main-content'>
                    <Home></Home>
                  </Row>
                  <Footer></Footer>
                </Col>
              </Row>
            </Route>
            {/* <Route path='/about/:id' component={About}></Route>
            <Route path='/topic' component={Topic}></Route> */}
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;

