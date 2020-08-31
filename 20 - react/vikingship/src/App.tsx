import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
      </header>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>按钮</Button>
    </div>
  );
}

export default App;


// 样式系统文件结构
// 1. styles: _variables.scss(各种变量以及可配置设置); _mixins.scss(全局 mixins); _functions.scss(全局 functions)
// 2. components: Button/style.scss(组件单独的样式)
