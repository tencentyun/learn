import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import './index.scss'

export default class Message extends Component {
  handleMessage = (type) => {
    message[type]('晋级成功')
  }
  render(){
    return (
      <div>
        <Card title='通知提醒框' className='card-warp'>
          <Button type='primary' onClick={() => this.handleMessage('success')}>success</Button>
          <Button type='primary' onClick={() => this.handleMessage('error')}>error</Button>
          <Button type='primary' onClick={() => this.handleMessage('info')}>info</Button>
          <Button type='primary' onClick={() => this.handleMessage('warning')}>warning</Button>
        </Card>
      </div>
    )
  }
}