import React, { Component } from 'react'
import { Card, Button, Icon, Radio } from 'antd'
import './index.scss'

class Buttons extends Component{
  state = {
    size: 'default'
  }

  changeRadio = (e)=> {
    this.setState({
      size: e.target.value
    })
  }
  render(){
    return (
      <div>
        <Card title='常用按钮' className='card-button'> 
          <Button>普通按钮</Button>
          <Button type='primary'>普通按钮</Button>
          <Button type='primary' icon='search'>图标按钮</Button>
          <Button type='primary' loading={true}>加载按钮</Button>
        </Card> 

        <Card title='按钮组' className='card-button-2'> 
          <Button.Group>
            <Button type="primary">
              <Icon type='left'></Icon>
              上一页
            </Button>
            <Button type="primary">
              下一页
              <Icon type='right'></Icon>
            </Button>
          </Button.Group>
        </Card> 

        <Card title='大小按钮' className='card-button'>  
          <Radio.Group value={this.state.size} onChange={this.changeRadio}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button size={this.state.size}>普通按钮</Button>
          <Button type='primary' size={this.state.size}>普通按钮</Button>
        </Card>

        <Card title='大小按钮' className='card-button'>  
          <Radio.Group value={this.state.size} onChange={this.changeRadio}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button size={this.state.size}>普通按钮</Button>
          <Button type='primary' size={this.state.size}>普通按钮</Button>
        </Card>

        <Card title='大小按钮' className='card-button'>  
          <Radio.Group value={this.state.size} onChange={this.changeRadio}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button size={this.state.size}>普通按钮</Button>
          <Button type='primary' size={this.state.size}>普通按钮</Button>
        </Card>

        <Card title='大小按钮' className='card-button'>  
          <Radio.Group value={this.state.size} onChange={this.changeRadio}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button size={this.state.size}>普通按钮</Button>
          <Button type='primary' size={this.state.size}>普通按钮</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons