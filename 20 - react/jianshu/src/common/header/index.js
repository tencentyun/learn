import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'    // concent使store和header建立连接
import { Link } from 'react-router-dom'
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
    const { focuse, list, page, total, mouseIn, handleEnter, handeLeaver, handleChange } = this.props
    const newList = list.toJS();       // 这里的list是一个immutable对象 使用toJs转换为简单的js对象
    const pageList = []
    if(newList.length){
      for(let i = (page - 1) * 10; i < page * 10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    
    if (focuse || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleEnter}
          onMouseLeave={handeLeaver}>
          <SearchInfoLeft>热门搜索</SearchInfoLeft>
          <SearchInfoRight className='right' onClick={ () => { handleChange(page, total) }}>换一批</SearchInfoRight>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  
  render() {
    const { focuse, mouseIn, handleFocus, handleBlur, list } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focuse || mouseIn} timeout={200} classNames="slider">
              <NavSearch
                className={focuse || mouseIn ? 'focuse' : ''}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={focuse || mouseIn ? 'iconfontBg iconfont' : 'iconfont'}>&#xe651;</i>
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
    mouseIn: state.getIn(['header', 'mouseIn']), 
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    total: state.getIn(['header', 'total']),
  }
}

const mapDispathToProps = (dispath) => {
  return {

    // 聚焦
    handleFocus(list) {
      (list.size === 0) && dispath(actionCreators.getSearchInfo())
      dispath(actionCreators.searchFocuse())
    },

    // 失焦
    handleBlur() {
      dispath(actionCreators.searchBlur())
    },

    handleEnter(){
      dispath(actionCreators.mouseIn())
    },

    handeLeaver(){
      dispath(actionCreators.mouseLeaver())
    },

    handleChange(page, total){
      if(page < Math.floor(total/10)){
        dispath(actionCreators.changePage(page + 1))
      }else{
        dispath(actionCreators.changePage(1))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)