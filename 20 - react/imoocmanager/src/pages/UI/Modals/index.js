import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

class Modals extends Component {

  state = {
    showModal1: false
  }

  handleModal = (type) => {
    this.setState({
      [type]: true            // [type]作为key值可以取参数传的值
    })
  }

  handleCancel = (type) => {
    this.setState({
      [type]: false
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认？',
      content: '你确定你学会了React了吗？',
      onOk(){
        alert('确定')
      },
      onCancel(){
        alert('取消')
      }
    })
  }

  render(){
    return (
      <div>
        <Card title='基础模态框' className='card-button'>
          <Button type='primary' onClick={() => this.handleModal('showModal1')}>弹框</Button>
          <Button type='primary' onClick={() => this.handleModal('showModal2')}>垂直居中</Button>
        </Card>

        <Card title='信息确认框' className='card-button'>
          <Button type='primary' onClick={() => this.handleConfirm('confirm')}>confirm</Button>
          <Button type='primary' onClick={() => this.handleConfirm('success')}>success</Button>
          <Button type='primary' onClick={() => this.handleConfirm('info')}>info</Button>
        </Card>

        <Modal
          title='React'
          visible={this.state.showModal1}
          okText='确定'
          cancelText='取消'
          onCancel={() => this.handleCancel('showModal1')}
        >
          <p>你确定你学会了React了吗？</p>
        </Modal>

        <Modal
          title='React'
          centered
          visible={this.state.showModal2}
          okText='确定'
          cancelText='取消'
          onCancel={() => this.handleCancel('showModal2')}
        >
          <p>你确定你学会了React了吗？</p>
        </Modal>
      </div>
    )
  }
}

export default Modals