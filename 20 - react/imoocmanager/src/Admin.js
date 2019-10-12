import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './Admin.scss'

class Admin extends Component {
  render() {
    return (
      <Row>
        <Col span={4}>
          <NavLeft></NavLeft>
        </Col>
        <Col span={20} className='main'>
          <Header></Header>
          <Row className='main-content'>
            {this.props.children}
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}

export default Admin;

