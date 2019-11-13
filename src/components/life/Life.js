import React from 'react'
import moment from 'moment'

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello 1912',
      time: ''   // 时间
    }
  }
  // 一、实例化阶段(3个钩子)
  componentWillMount() {
    console.log('--------------- life will mount')
  }
  // render() 执行
  componentDidMount() {
    console.log('--------------- life did mount')
    // 调接口api
    // 第三方插件的实例化
    // 开启定时
    this.timer = setInterval(()=>{
      let t = Date.now()
      this.setState({
        time: moment(t).format('HH:mm:ss')
      })
    }, 1000)
  }

  // 二、存在期阶段(4个新的 + render)
  // 当父组件传递过来的props发生改变时，触发该钩子
  componentWillReceiveProps() {
    console.log('--------------- life will recieve props')
  }
  // 控制diff运算的结果，是否同意更新渲染到真实的DOM结构上
  shouldComponentUpdate() {
    console.log('--------------- life should update 这是个开关')
    return true
  }
  // 更新前
  componentWillUpdate() {
    console.log('--------------- life will update')
  }
  // render() 执行
  // 更新完成
  componentDidUpdate() {
    console.log('--------------- life did update')
  }


  // 三、销毁阶段(1)
  componentWillUnmount() {
    console.log('--------------- life will unmount')
    // 清除定时器
    // 清除一些比较占内存的长连接、缓存数据
    // 手动销毁定时器
    clearInterval(this.timer)
  }



  render() {
    console.log('--------------- life render')
    let { name } = this.props
    let { msg, time } = this.state
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={()=>this.setState({msg: 'hello world'})}>改变</button>
        <br/>
        <h1>{name}</h1>
        <br/>
        <h2>{time}</h2>
      </div>
    )
  }
}
