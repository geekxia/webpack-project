import React from 'react'

export default class News extends React.Component {
  // 构造器，当new的时候，它会被自动调用
  constructor(props) {
    super(props)
  }
  render() {
    let { item } = this.props
    return(
      <div>
        <span>{item.id}</span>
        <span>{item.title}</span>
        <span>{item.content}</span>
      </div>
    )
  }
}
