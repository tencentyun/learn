import React from 'react';
import './App.css';
// import NameCard from './components/NameCard'
// import LikesButton from './components/LikesButton'
// import DigitalClock from './components/DigitalClock'
import Formsa from './components/Formsa'
import CommentList from './components/CommentList'

// const ta gs = ['恐龙', '足球小子']

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['this is 1th data']
    }
    this.onAddList = this.onAddList.bind(this)
  }
  onAddList(val){
    this.setState({
      list: [...this.state.list, val]
    })
    console.log(this.state.list)
  }
  render(){
    const {list} = this.state
    return(
      <div className = "App" >
        {/* <NameCard name="viking" number="123" isHuman="true" tags={tags}></NameCard> */}
        <CommentList list={list}></CommentList>
        <Formsa onAddList={this.onAddList}></Formsa>
        <p>{list.length}</p>
      </div>
    );
  }
}

export default App;


// JSX基本使用
// 1. 变量、表达式
// 2. class style
// 3. 子元素和组件

// 创建时：创建时调用constructor的构造函数，更新render函数，更新DOM和refs，当这个component渲染到DOM节点上呢，会调用componentDidMount方法
// 更新时：新的props传入和调用setState，重新调用render函数，更新DOM和refs，当这个component渲染到DOM节点上呢，会调用componentDidUpdate方法
// 卸载时：调用componentWillUnmount

// React开发思想以及和其它思想的异同
// 1. 状态提升(liftinf state up)
// 2. 自上而下的数据流(top-down data flow)
// 3. 和双向绑定的区别 

// Context(16.3以上版本提供)
// 1. Props属性是由上到下单向传递的
// 2. Context提供了在组件中共享此类值的方法
// 3. 设计的目的是共享那些对于组件来说全局的数据
// 4. 不要仅仅为了避免在几个层级下的组件传递props而使用context
