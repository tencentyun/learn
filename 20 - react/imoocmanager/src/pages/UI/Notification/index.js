import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './index.scss'

export default class Notification extends Component {
  handleNoticication = (type) => {
    notification[type]({
      message: '友情提醒',
      description: '友情提醒友情提醒友情提醒友情提醒友情提醒友情提醒友情提醒友情提醒'
    })
  }
  render(){
    return (
      <div>
        <Card title='通知提醒框' className='card-warp'>
          <Button type='primary' onClick={() => this.handleNoticication('success')}>success</Button>
          <Button type='primary' onClick={() => this.handleNoticication('error')}>error</Button>
          <Button type='primary' onClick={() => this.handleNoticication('info')}>info</Button>
          <Button type='primary' onClick={() => this.handleNoticication('warning')}>warning</Button>
        </Card>
      </div>
    )
  }
}