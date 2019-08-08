import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

// 导入react之后  任何大写的都是组件
import TodoList from './TodoList';


ReactDOM.render(<TodoList />, document.getElementById('root'));
