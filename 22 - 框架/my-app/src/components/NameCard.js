import React from 'react'

class NameCard extends React.Component {
  render (){
    const {name, number, isHuman, tags} = this.props
    return (
      <div className="alert alert-success">
          <h4 className="alert-heading">{name}</h4>
          <ul>
            <li>电话：{number}</li>
            <li>{isHuman ? '人类' : '外星生物'}</li>
            <p>
              {
                tags.map((item, index) => {
                  return <span key="index">{item}</span>
                })
              }
            </p>
          </ul>
      </div>
    )
  }
}

// 写成函数的写法
// const NameCard = function (props) {
//   const { name, number, isHuman, tags } = props
//   // name = 'abc'      // 这里会报错 props之后的变量不可以在赋值 props的使用必须纯函数
//   return (
//     <div className="alert alert-success">
//       <h4 className="alert-heading">{name}</h4>
//       <ul>
//         <li>电话：{number}</li>
//         <li>{isHuman ? '人类' : '外星生物'}</li>
//         <p>
//           {
//             tags.map((item, index) => {
//               return <span key="index">{item}</span>
//             })
//           }
//         </p>
//       </ul>
//     </div>
//   )
// }

// 纯函数
function sum(a, b){
  return a + b
}

// 非纯函数
function sum2(a, b){
  a  = a + b
  return a
}

export default NameCard