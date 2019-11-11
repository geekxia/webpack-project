// 入口文件

console.log('1')

// 引入图片文件
import icon from './assets/1.png'
console.log(icon)

// 引入css文件
import './assets/style.css'
// 引入scss文件
import './assets/common.scss'

// 引入js文件
import util from './util/test.js'
util.run()

// 测试热更新：本质上是浏览器与本地服务devServer之间的通信
if (module.hot) {
  module.hot.accept('./util/test.js', function() {
    // 重新加载发生了变化的文件模块
    const util = require('./util/test.js').default
    util.run()
    console.log('test.js文件发生了变化')
  })
}
