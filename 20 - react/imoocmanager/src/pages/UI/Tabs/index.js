import React, { Component } from 'react'
import { Card, Button, message, Tabs } from 'antd'
import './index.scss'

export default class Message extends Component {
  handleTab = (key) => {
    message.success('您打开的是' + key)
  }
  render(){
    return (
      <div>
        <Card title='通知提醒框' className='card-warp'>
          <Tabs defaultActiveKey='1' onChange={this.handleTab}>
            <Tabs.TabPane tab='tab 1' key='1'>1</Tabs.TabPane>
            <Tabs.TabPane tab='tab 2' key='2'>2</Tabs.TabPane>
            <Tabs.TabPane tab='tab 3' key='3'>3</Tabs.TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}