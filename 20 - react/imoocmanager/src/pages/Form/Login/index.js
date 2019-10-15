import React, { Component } from 'react'
import { Card, Button, Input, Form, Icon, message, Checkbox } from 'antd'
import './index.scss'

class Login extends Component {

  handleLogin = () => {
    const userInfo = this.props.form.getFieldsValue()     // 获取表单的数据
    console.log(userInfo)
    this.props.form.validateFields((err, values) => {     // 提交判断表单的正则
      if (!err) {
        message.success(`${userInfo.userName}恭喜您，您的密码为：${userInfo.userPwd}`)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;   // antd提供的表单双向数据绑定
    return (
      <div>
        <Card title='登录行内表单' className='card-warp'>
          <Form layout='inline'>
            <Form.Item>
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名'></Input>
            </Form.Item>
            <Form.Item>
              <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码'></Input>
            </Form.Item>
            <Form.Item>
              <Button type='primary'>登录</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title='登录行内表单' className='card-warp'>
          <Form style={{ width: 300 }}>
            <Form.Item>
              {
                getFieldDecorator('userName', {
                  initialValue: 'Jack',
                  rules: [{
                    required: true,
                    message: '请输入用户名'
                  }, {
                    min: 5,
                    max: 10,
                    message: '用户名长度为5-10'
                  }, {
                    pattern: /^\w+$/g,
                    message: ' 匹配大小写英文字符及数字 0 到 9 之间的任意一个及下划线，相当于  [a-zA-Z0-9_]'
                  }]
                })(
                  <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名'></Input>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '21321'
                })(
                  <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码'></Input>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('checkboxVal',{
                  initialValue: true,
                  valuePropName: 'checked'
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="3" style={{float: 'right'}}>忘记密码</a>
            </Form.Item>
            <Form.Item>
              <Button type='primary' onClick={this.handleLogin}>登录</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Login)
