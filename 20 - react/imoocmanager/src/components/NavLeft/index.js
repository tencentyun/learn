import React, { Component } from 'react'
import './index.scss'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'

class NavLeft extends Component {

  // 组件即将被挂在到页面上执行  新的生命周期函数名
  UNSAFE_componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList)
    this.setState({
      menuTreeNode
    })
  }

  // 菜单递归
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>{ item.title }</Menu.Item>
      )
    })
  }

  // 做页面的挂载
  render() {
    return (
      <div className='nav-left'>
        <div className='logo'>
          <img src="/assets/imgs/logo.svg" alt="" />
          <span>Imooc MS</span>
        </div>
        <div className='menu'>
          <Menu theme='dark' mode="vertical">
            {this.state.menuTreeNode}
          </Menu>
        </div>
      </div>
    )
  }
}

export default NavLeft