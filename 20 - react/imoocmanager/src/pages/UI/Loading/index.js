import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './index.scss'

class Loading extends Component {
  state = {
    size: 'default'
  }

  changeRadio = (e) => {
    this.setState({
      size: e.target.value
    })
  }
  render() {
    const loading = <Icon type='loading'></Icon>
    return (
      <div>
        <Card title='Spin用法' className='card-button'>
          <Spin></Spin>
          <Spin indicator={loading}></Spin>
        </Card>

        <Card title='Spin用法' className='card-button'>
          <Alert
            message='React'
            description='欢迎来到React高级实战课程'
            type='info'
          ></Alert>

          <Spin>
            <Alert
              message='React'
              description='欢迎来到React高级实战课程'
              type='warning'
            ></Alert>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loading