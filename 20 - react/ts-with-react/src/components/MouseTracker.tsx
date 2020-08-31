import React from 'react' 
import useMouseMove from '../hooks/useMouseMove'

const MouseTracker: React.FC = () => {
  // const [positions, setPositions] = useState({x: 0, y: 0})
  // console.log('before render', positions.x); 
  // 每次更新呢都会调用这个useEffect函数 这样会添加越来越多的click事件
  // 但是没有清除他 由于这个添加和删除这个订阅的代码的紧密性呢 所有的useEffect设计呢是在同一个地方执行
  // 如果useEffect返回是一个函数 react将在执行清除操作时调用他
  // useEffect(() => {     
  //   console.log('add effect', positions.x);
  //   const updateMouse = (e: MouseEvent) => {
  //     setPositions({x: e.clientX, y: e.clientY})
  //   }
  //   document.addEventListener('click', updateMouse)
  //   return () => {
  //     console.log('remove effect', positions.x);
  //     document.removeEventListener('click', updateMouse )
  //   }
  // }, [])      // 第二个参数传入空数组 代表只首次渲染执行一次

  const positions = useMouseMove()
  
  return(
    <div>
      <p>X: {positions.x}; Y: {positions.y}</p>
    </div>
  )
}

export default MouseTracker