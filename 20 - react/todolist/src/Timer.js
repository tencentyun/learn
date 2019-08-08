import React, {Component} from 'react'

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      secend: 0
    }
  }

  tick(){
    this.setState({
      secend: this.state.secend + 1
    })
  }

  // 组件被挂载时执行
  componentDidMount(){
    this.inter = setInterval(() => {
      this.tick()
    }, 1000);
  }

  // 组件被移除时执行
  componentWillUnmount(){
    clearInterval(this.inter)
  }

  render(){
    return (
      <div>{this.state.secend}</div>
    )
  }
}

export default Timer