import React from 'react'

export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this, '1', '2')
  }

  // 事件对象是事件处理器的最后一个参数
  clickHandle(arg1, arg2, event) {
    console.log('arg1', arg1)
    console.log('arg2', arg2)
    console.log('event', event)
  }

  // 鼠标事件
  mouseEnterHandle(event) {
    console.log(event)
  }
  render() {
    return (
      <div>
        <h1>测试事件</h1>

        {/* 使用bind手动改变this指向 */}
        <div onClick={this.clickHandle.bind(this, '1', '2')}>点击1</div>

        {/* 使用箭头函数来解决 this指向问题 */}
        <div onClick={(event)=>this.clickHandle('1', '2', event)}>点击2</div>

        {/* 在构造器constructor中进行this指向的修正 */}
        <div onClick={this.clickHandle}>点击3</div>

        <div onMouseEnter={this.mouseEnterHandle.bind(this)}>鼠标事件</div>

      </div>
    )
  }
}
