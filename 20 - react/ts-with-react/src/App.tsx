import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MouseTracker from './components/MouseTracker'
import LikeButton from './components/LikeButton'
import useMouseMove from './hooks/useMouseMove'
import useURLLoader from './hooks/useURLLoader'

// interface IShowResult{
//   status: number,
//   message: []
// }

function App() {
  const [on, setOn] = useState(true)
  const positions = useMouseMove()
  const [data,loading] = useURLLoader('http://www.liulongbin.top:3005/api/getlunbo', [on])
  // const imgResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          <button onClick={() => {setOn(!on)}}>Toggle Tracker </button>
        </p>
        {
          loading ? <p>加载中</p> :  <img alt="" src={data && data.message[0].img} />
        }
        <p>X: {positions.x}; Y: {positions.y}</p>
        {on && <MouseTracker />}
        <LikeButton></LikeButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// Hook规则
// 1. 只在最顶层使用Hook
// 2. 只在React函数中调用Hook
