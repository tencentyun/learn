import React, { useState, useEffect, useRef, useContext } from 'react'

// 可以改变函数内组件的状态，并且每次在组件更新的时候 记录状态值

const LikeButton: React.FC = () => {
  // 数组里面第一个参数是state变量的值 函数调用时保存变量的方法，useState是一个新方法，与class里面的this.state功能完全一样，在函数退出后变量会消失，在state里面的变量会被react保留，每次函数调用里面的值都是全新的，和之前的值没什么关系
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const likeRef = useRef(0)
  useEffect(() => {         // 组件渲染完成或者更新完整之后执行
    console.log(111);
    document.title = `点击了${like}次`
  }, [like])

  function handleAlertClick(){
    setTimeout(() => {
      alert('you click on' + likeRef.current)
    }, 3000)
  }
  

  return (
    <div>
      <button onClick={() => {setLike(like + 1); likeRef.current++}}>
        {like} 👍
      </button>
      <button onClick ={handleAlertClick}>
        {on ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default LikeButton