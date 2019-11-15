import React from 'react'

// 引入上下文对象
import { ThemeContext } from '../../util/context.js'

export default class TestContext extends React.Component {
  render() {
    console.log('context===============', this.context)
    let theme = this.context
    // let props = this.props
    return(
      <div>
        <h1>测试context上下文</h1>
        <button
        style={{backgroundColor: theme.background,color:theme.foreground}}>
        这是一个按钮
        </button>
      </div>
    )
  }
}
// 指定当前组件的contextType
TestContext.contextType = ThemeContext
