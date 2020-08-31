import React from 'react'

interface IHelloProps{
  message: string
}

const Hello: React.FC<IHelloProps> = (props) => {   // interface与generics之间的使用，React.FC是一个interface，可以描述函数，并提供一个泛型<>
  return <h2>{props.message}</h2>
}

export default Hello 


// 没有破坏性改动、完全可选、百分百向后 兼容、没有计划从React移除class
// React组件一直是函数，使用Hook完全拥抱函数





