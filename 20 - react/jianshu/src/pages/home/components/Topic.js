import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-img' src={item.get('imgUrl')} alt="" />
                <span className='span-text'>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }

      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)