import React from 'react'
import {inject, observer} from 'mobx-react'
import './todo.scss'

@inject('store') @observer
export default class TestMobx extends React.Component {

  componentDidMount() {
    let { MusicStore } = this.props.store
    MusicStore.getMusic()
  }
  // addTodo() {
  //   let { TodoStore } = this.props.store
  //   console.log(1)
  //   let todo = { id: 4, name: '一条新任务', time: Date.now()}
  //   TodoStore.updateList({
  //     type: 'add',
  //     item: todo
  //   })
  // }
  // deleteTodo(ele) {
  //   let { TodoStore } = this.props.store
  //   TodoStore.updateList({
  //     type: 'delete',
  //     item: ele
  //   })
  //   console.log('删除', ele.time)
  // }
  // resetTodo() {
  //   let { TodoStore } = this.props.store
  //   TodoStore.updateList({
  //     type: 'reset',
  //     item: null
  //   })
  // }


  handleTodo(type, ele) {
    let { TodoStore } = this.props.store
    switch (type) {
      case 'add':
        let todo = { id: 4, name: '一条新任务', time: Date.now()}
        TodoStore.updateList({
          type: 'add',
          item: todo
        })
        break;
      case 'reset':
        TodoStore.updateList({
          type: 'reset',
          item: null
        })
        break;
      case 'delete':
        TodoStore.updateList({
          type: 'delete',
          item: ele
        })
        break
      default:
    }
  }

  render() {
    let { TodoStore, MusicStore } = this.props.store

    return (
      <div className='test_mobx'>
        <div className='btns'>
          {/*
            <button onClick={this.addTodo.bind(this)}>添加一条任务</button>
            <button onClick={this.resetTodo.bind(this)}>清空所有任务</button>
          */}
          <button onClick={this.handleTodo.bind(this,'add')}>添加一条任务</button>
          <button onClick={this.handleTodo.bind(this,'reset')}>清空所有任务</button>
        </div>

        {/* TodoList 列表渲染 */}
        {
          TodoStore.list.map((ele,idx)=>{
            return(
              <div className='todo' key={ele.time}>
                <span>{ele.id}</span>
                <span>{ele.name}</span>
                <span>{ele.time}</span>
                <span onClick={this.handleTodo.bind(this, 'delete', ele)}>删除</span>
              </div>
            )
          })
        }
        <br/><hr/>
        <h1>测试mobx</h1>
        <h1>{TodoStore.time}</h1>
        <h1>{TodoStore.msg}</h1>

        <br/><hr/>

        {/* 周杰伦音乐列表渲染 */}
        <h1>{MusicStore.zjl}</h1>
        {
          MusicStore.list.map((ele, idx)=>{
            return(
              <div key={ele.id}>
                <span>{ele.name}</span>
              </div>
            )
          })
        }

      </div>
    )
  }
}
