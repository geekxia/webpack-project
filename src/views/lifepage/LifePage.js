import React from 'react'

import Life from '../../components/life/Life.js'


// 无状态组件 Pure Component 纯函数组件
function PureItem(props) {
  console.log('==================', props)
  let { item } = props
  return (
    <div>
      <span>{item.title}</span>
      <span>{item.time}</span>
    </div>
  )
}


export default class App extends React.Component {
  constructor(props) {
    // 调用父组件的构造器方法
    super(props)
    this.state = {
      name: '1234',
      flag: true,
      item: {
        title: '标题',
        time: '2019'
      }
    }
  }
  changeLifeProps() {
    this.setState({
      name: '4321'
    })
  }
  toggleFlag() {
    this.setState({
      flag: !this.state.flag
    })
  }

  componentWillMount() {  // beforeMounted()
    console.log('app will mount')
  }
  componentDidMount() {  // mounted()
    console.log('app did mount')
  }
  render() {
    console.log('app render')
    let { name, flag, item } = this.state
    return(
      <div>
        <button onClick={this.changeLifeProps.bind(this)}>父组件中的按钮</button>
        <button onClick={this.toggleFlag.bind(this)}>控制子组件的显示隐藏</button>

        { /* react中的显示与隐藏的实现方法 */}
        {
          flag && <Life name={name}></Life>
        }
        {/*
          !flag ? <Life name={name}></Life> : ''
        */}

        <PureItem item={item}></PureItem>

      </div>
    )
  }

}
