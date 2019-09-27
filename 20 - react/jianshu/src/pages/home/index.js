import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='img' src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1508/26/c0/11774655_1440599700026_800x600.jpg" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home