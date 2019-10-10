import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'


// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

class App extends Component{
  render(){
    return (
      <Row>
        <Col span={3}>left</Col>
        <Col span={21}>
          <Header></Header>
          <Row>内容</Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}

export default App;
