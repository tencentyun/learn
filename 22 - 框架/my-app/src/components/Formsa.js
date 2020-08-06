import React from 'react'

class Formsa extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: ''
    // }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange(event){
  //   this.setState({
  //     value: event.target.value
  //   })
  // }

  handleSubmit(event){
    console.log(this.tag)       // 获取的当前DOM
    console.log(this.tag.value)
    event.preventDefault()
  }
  
  render(){
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>留言内容</label>
            <input type="text"
              className="form-control"
              placeholder="请输入内容"
              ref={(tag) => {this.tag = tag}}
            />
            <button type='submit' className="btn btn-primary">留言</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Formsa