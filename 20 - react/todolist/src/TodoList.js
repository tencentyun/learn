import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import Timer from './Timer'

class TodoList extends Component {

  // 组件一创建自动加载constructor
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputVal: ''
    }
    this.inputChange = this.inputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  // 按钮点击事件
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }

  // input改变事件
  inputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  deleteData(index) {
    // 操作state里面的数据的时候 建议拷贝一个副本 不要直接操作state数据
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  deleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  getItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.deleteItem}
            index={index}
            key={index}
            content={item} />
        )
        // <li key={index} onClick={this.deleteData.bind(this, index)}>{item}</li>
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputVal} onChange={this.inputChange} />
          <button className="btn-color" onClick={this.handleClick}>add</button>
        </div>
        <ul>{this.getItems()}</ul>
        <Timer />
      </Fragment>
    )
  }
}

export default TodoList;
