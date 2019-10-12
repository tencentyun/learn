import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.scss'
import axios from '../../axios'

class Header extends Component {

  state = {}

  UNSAFE_componentWillMount() {
    this.getWeather()
  }

  getWeather = () => {
    let city = '北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }

  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span={24}>
            <span>欢迎，河畔一角</span>
            <span className='exit'>退出</span>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span={4} className='title'>
            <span>标题</span>
          </Col>
          <Col span={20} className='time-weather'>
            <span className='time'>2019-10-10 17:53:10</span>
            <span className='span-img'>
              <img src={this.state.dayPictureUrl} alt=""/>
            </span>
            <span className='weather'> {this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header