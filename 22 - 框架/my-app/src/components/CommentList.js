import React from 'react'

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {list} = this.props
    return (
      <div>
        <ul>
          {
            list.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          }
        </ul>
      </div>
    );
  }
}

export default CommentList