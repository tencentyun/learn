import React from 'react';
import './App.css';
// import NameCard from './components/NameCard'
// import LikesButton from './components/LikesButton'
// import DigitalClock from './components/DigitalClock'
import Formsa from './components/Formsa'

// const ta gs = ['恐龙', '足球小子']

class App extends React.Component {
  render(){
    return(
      <div className = "App" >
        {/* <NameCard name="viking" number="123" isHuman="true" tags={tags}></NameCard> */}
        <Formsa></Formsa>
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
