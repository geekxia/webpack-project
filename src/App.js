import React from 'react'
// 引入样式文件
import './assets/css/common.scss'
import './assets/css/style.css'
import Child from './components/child/Child.js'
import News from './components/news/News.js'

// class关键字，用于定义一个App类
// export default 抛出这个类
// extends 表示继承，继承React.Component
export default class App extends React.Component {
  constructor(props) {
    // 调用父组件的构造器方法
    super(props)
    // 声明式的状态数据，state状态数据必须在这里定义
    this.state = {
      todo: '',   // 任务输入
      todoList: [],
      msg: 'hello 12134',
      name: 'geekxia',
      item: {
        id: 1,
        title: '双11大卖',
        content: '00000',
        author: 'geekxia'
      },
      list: [
        {
          id: 1,
          title: '双11大卖',
          content: '00000',
          author: 'geekxia'
        },
        {
          id: 2,
          title: '双12大卖',
          content: '00000',
          author: 'geekxia'
        },
        {
          id: 3,
          title: '双13大卖',
          content: '00000',
          author: 'geekxia'
        },
      ]
    }
    // this.getInputValue = this.getInputValue.bind(this)
  }
  handleClick(arg) {
    console.log('父组件事件执行了')
    console.log(arg)
  }

  // 文章列表渲染方法封装
  renderArticleList(arr) {
    return arr.map((ele,idx)=><News item={ele} key={ele.id}></News>)
  }


  // 获取表单的值
  // 第一种方法，使用ref来获取，通常不推荐这样做
  // 第二种方法，给表单绑定 onInput 事件，动态地获取表单的值
  // 添加todolist的任务
  getInputValue(arg) {
    // console.log('-------', this.refs.pwd.value)
    console.log(this.state.todo)
    let { todoList, todo } = this.state
    todoList.push({time: Date.now(), title: todo})
    this.setState({
      todoList: todoList,
      todo: ''
    })
  }
  // 表单事件，当表单输入值发生变化时，修改表单的value
  inputChange(e) {
    console.log()
    this.setState({
      todo: e.target.value
    })
  }
  // 删除一条todo
  deleteTodo(idx) {
    let { todoList } = this.state
    todoList.splice(idx, 1)
    this.setState({
      todoList: todoList
    })
  }




  render() {
    let { name, item, list, todo, todoList } = this.state

    return (
      <div>
        { /* 表达式 */ }
        <h1>{name}</h1>
        { /* className */ }
        <h1 className='hello'>hello world</h1>
        <hr/>
        <br/>

        { /* <Child msg='1234'></Child> */ }
        <Child
          msg={this.state.msg}
          myEvent={this.handleClick.bind(this)}
          userName='geek'>
        </Child>
        <News item={item}></News>
        <hr/>
        <br/>

        { /* 列表渲染 */ }
        {
          list.map((ele,idx)=>{
            return <News item={ele} key={ele.id}></News>
          })
        }
        <hr/>
        <br/>
        { /* 使用自定义的方法来渲染列表 */ }
        {
          this.renderArticleList(this.state.list)
        }

        <br/>
        <hr/>

        
        { /* 获取表单的值 */ }
        <input
          type="text"
          ref='pwd'
          value={todo}
          onInput={this.inputChange.bind(this)} />
        { /* 事件绑定，必须手动地改变this指向 */ }
        <button onClick={this.getInputValue.bind(this)}>添加一条任务</button>
        <br/>
        { /* 渲染todolist的任务列表 */ }
        {
          todoList.map((ele,idx)=>{
            return (
              <div className='todo'>
                <span>{ele.title}</span>
                <span></span>
                <span>{ele.time}</span>
                <span onClick={this.deleteTodo.bind(this, idx)}>删除</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
