import React from 'react'

import { Table } from 'antd'

import Child1 from '../../components/child/Child1.js'
import Child2 from '../../components/child/Child2.js'
import Child3 from '../../components/child/Child2.js'



export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list : [
        {
          id: 1,
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          id: 2,
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
      msg: '1912'
    }
  }
  changeMsg(msg) {
    console.log(msg)
    this.setState({
      msg: msg
    })
  }
  render() {
    let { list } = this.state
    const columns = [
      {
        title: '明星',   // 第一列
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',   // 第二列
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',   // 第三列
        dataIndex: 'address',
        key: 'address',
      },
    ]
    let { msg } = this.state
    return(

      <div>
        <h1>关于我们公司</h1>
        {/*<Table dataSource={list} columns={columns} rowKey='id' />*/}
        <Child1 onChange={this.changeMsg.bind(this)}></Child1>
        <Child2 msg={msg}></Child2>
        <Child3 msg={msg}></Child3>

      </div>
    )
  }
}
