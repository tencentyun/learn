import {useState, useEffect} from 'react'

// 自定义hook
// 1. 将组件逻辑提取到可重用的函数中
// 2. 必须用use开头

const useMouseMove = () => {      // 必须用use开头
  const [positions, setPositions] = useState({x: 0, y: 0})

  useEffect(() => {     
    console.log('add effect', positions.x);
    const updateMouse = (e: MouseEvent) => {
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', positions.x);
      document.removeEventListener('click', updateMouse )
    }
  })
 
  return positions
}

export default useMouseMove


// HOC - Higher order component
// 高阶组件就是一个函数，接受一个组件作为参数，返回一个新的组件
 