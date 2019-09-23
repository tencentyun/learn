import React, { Component, Fragment } from 'react';
import axios from 'axios'
import TodoItem from './TodoItem'
import Timer from './Timer'
import Test from './Test'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.'
];

class TodoList extends Component {

  // 组件一创建自动加载constructor
  constructor(props) {
    super(props)
    // 当组件的state和props发生改变的时候 render函数会自动执行
    // this.state = {
    //   list: [],
    //   inputVal: '',
    //   toggle: true
    // }
    this.inputChange = this.inputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
    this.handeInputChange = this.handeInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.commitClick = this.commitClick.bind(this)

    this.state = store.getState()             // 获取store里面的值
    store.subscribe(this.handleStoreChange)   // store里面的数据改变，该方法会自动的执行
    
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

  // 组件即将被挂载到页面的时刻被执行
  componentWillMount() {
    console.log('componentWillMount')
  }

  // 组件在更新前自动执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;  // 告诉组件可以更新
  }

  // 组件在更新前自动执行 但是在shouldComponentUpdate返回true之后执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  toggleClick() {
    this.setState({
      toggle: this.state.toggle ? false : true
    })
  }

  // 组件挂载时自动执行
  render() {
    console.log('render')
    return (
      <div style={{margin: '10px 10px'}}>
        {/* <div>
          <input value={this.state.inputVal} onChange={this.inputChange} />
          <button className="btn-color" onClick={this.handleClick}>add</button>
        </div>
        <ul>{this.getItems()}</ul>
        <Timer />
        <Test content={this.state.inputVal}></Test>
        <div className={this.state.toggle ? 'show' : 'hide'}>切换的文本</div>
        <button onClick={this.toggleClick}>add</button> */}
        <br />
        <br />
        <Input 
          placeholder='请输入内容' 
          value={this.state.value} 
          style={{ width: '300px', marginRight: '10px' }}
          onChange={this.handeInputChange}
          >
        </Input>
        <Button type='primary' onClick={this.commitClick}>提交</Button>
        <List
          style={{ width: '300px', marginTop: '10px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.deleteItemClick.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  // antd输入框改变触发的函数
  handeInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)     
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  commitClick(){
    const action = getAddItemAction()
    store.dispatch(action) 
  }

  deleteItemClick(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action) 
  }

  // 组件挂载到页面之后自动执行
  componentDidMount() {
    console.log('componentDidMount')
    // axios
    // .get('/api/todoList')
    // .then((res) => {
    //   console.log('res')
    // })
    // .catch(() => {
    //   console.log('error')
    // })
  }

  // 组件已经更新完成之后执行
  componentDidUpdate() {
    console.log('componentDidUpdate');

  }
}


export default TodoList;
