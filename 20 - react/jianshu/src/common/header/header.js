import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'    // concent使store和header建立连接
import { HeaderWrapper, Logo, Nav, SearchWrapper, NavItem, NavSearch, Addition, Button } from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focuse} timeout={200} classNames="slider">
            <NavSearch
              className={props.focuse ? 'focuse' : ''}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}>
            </NavSearch>
          </CSSTransition>
          <i className={props.focuse ? 'iconfontBg iconfont' : 'iconfont'}>&#xe651;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont'>&#xe66f;</i>
          写文章
          </Button>
        <Button>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focuse: state.focuse          // 把store里面的数据映射到props上
  }
}

const mapDispathToProps = (dispath) => {
  return {

    // 聚焦
    handleFocus() {
      const action = {
        type: 'search_focuse'
      }
      dispath(action)
    },

    // 失焦
    handleBlur() {
      const action = {
        type: 'search_blur'
      }
      dispath(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)