import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(<App/>, document.getElementById('app'))

// 测试热更新：本质上是浏览器与本地服务devServer之间的通信
if (module.hot) {
  module.hot.accept('./App.js', function() {
    // 重新加载发生了变化的文件模块
    const NewApp = require('./App.js').default
    ReactDOM.render(<NewApp/>, document.getElementById('app'))
  })
}
