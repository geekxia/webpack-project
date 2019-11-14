import React from 'react'
import {inject, observer} from 'mobx-react'

import { Table } from 'antd'

@inject('store') @observer
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
      ]
    }
  }
  componentDidMount() {
    console.log(this.props.store.time)
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
    return(
      <div>
        <h1>关于我们公司</h1>
        <h1>{this.props.store.time}</h1>
        <Table dataSource={list} columns={columns} rowKey='id' />
      </div>
    )
  }
}
