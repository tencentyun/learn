import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'    // concent使store和header建立连接
import {
  HeaderWrapper,
  Logo,
  Nav,
  SearchWrapper,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoLeft,
  SearchInfoRight,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'
import { actionCreators } from './store'

class Header extends Component {

  getSearchInfo(){
    if (this.props.focuse) {
      return (
        <SearchInfo>
          <SearchInfoLeft>热门搜索</SearchInfoLeft>
          <SearchInfoRight>换一批</SearchInfoRight>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  
  render() {
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
            <CSSTransition in={this.props.focuse} timeout={200} classNames="slider">
              <NavSearch
                className={this.props.focuse ? 'focuse' : ''}
                onFocus={this.props.handleFocus}
                onBlur={this.props.handleBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focuse ? 'iconfontBg iconfont' : 'iconfont'}>&#xe651;</i>
            {this.getSearchInfo()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe66f;</i>
            写文章
          </Button>
          <Button>注册</Button>
        </Addition>
      </HeaderWrapper >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focuse: state.getIn(['header', 'focuse']),         // 把store里面的数据映射到props上 state.get('header').get('focuse')
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = (dispath) => {
  return {

    // 聚焦
    handleFocus() {
      dispath(actionCreators.getSearchInfo())
      dispath(actionCreators.searchFocuse())
    },

    // 失焦
    handleBlur() {
      dispath(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)