import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListWrapper,
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  render() {
    const { listInfo } = this.props
    return (
      <ListWrapper>
        {
          listInfo.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </ListInfo>
                <img className='pic' src={item.get('imgUrl')} alt="" />
              </ListItem>
            )
          })
        }
      </ListWrapper>
    )
  }
}
const mapState = (state) => ({
  listInfo: state.getIn(['home', 'listInfo'])
})

export default connect(mapState, null)(List)