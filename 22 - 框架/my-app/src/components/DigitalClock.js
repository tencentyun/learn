import React from 'react'

class DigitalClock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: new Date()
    }
  }

  // 创建时
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        data: new Date()
      })
    }, 3000)
  }

  // 更新时
  componentDidUpdate(currentProps, currentState){   // 传入两个参数 currentState为state的数据
    console.log(currentProps)
    console.log(currentState)
  }

  // 销毁时
  componentWillMount(){
    clearInterval(this.timer)
  }

  
  render(){
    return (
      <div>
        {this.state.data.toLocaleTimeString()}
      </div>
    )
  }
}

export default DigitalClock