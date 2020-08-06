import React from 'react'

class Welcome extends React.Component {
  render() {     // render方法代表这个组件最终渲染出来的结果
    const todoList = ['Learn React', 'Learn Redux']
    return (
      <div>
        <h1>Hello Welcome</h1>
        {1 + 1}
        <ul>
          {
            todoList.map(item => <li>{item}</li>)
          }
        </ul>
      </div>
    )

  }
}

export default Welcome
