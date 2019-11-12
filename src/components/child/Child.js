import React from 'react'

import './style.css'
export default class Child extends React.Component {
  childClick() {
    console.log('子组件事件执行了')
    // 执行父组件传递过来的自定义事件
    this.props.myEvent('000')
  }
  // 用户数据处理
  formatMsg(msg) {
    return msg + '000'
  }
  render() {
    let { msg } = this.props

    return (
      <div>
        {/* 这是标题注释 */}
        <h2 className='child' htmlFor="">child component</h2>
        <h2>{this.formatMsg(msg)}</h2>
        <button onClick={this.childClick.bind(this)}>点击</button>
      </div>
    )
  }
}
