import React, { Component } from 'react'

class Detail extends Component {
  render (){
    console.log(this.props)
    return (
      <div>详情页面id:{ this.props.match.params.id }</div>
    )
  }
}

export default Detail