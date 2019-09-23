import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const index = this.props.index
    this.props.delete(index)
  }

  // 子组件必须接受父组件的参数，且满足下面的两个条件才会被执行
  // 子组件第一次出现在父组件中不会被执行
  // 子组件之前已经存在父组件中，子组件更新才会被执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');

  }

  // 当父组件的render被执行时 子组件的render也会被自动执行
  render() {
    const { content, content2 } = this.props
    return (
      <div onClick={this.handleClick}>{content} - {content2}</div>
    )
  }

  // 当这个组件即将从页面中剔除的时候执行
  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }
}

TodoItem.propTypes = {
  content: PropTypes.string         // 设置props值属性
}

TodoItem.defaultProps = {
  content2: 'hello World'           // 设置默认值
}

export default TodoItem

