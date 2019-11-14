import React from 'react'

// 内部页面中，通常不推荐使用声明式路由
// import { Link } from 'react-router-dom'

export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, title: '深圳GDP', time: '2019'},
        { id: 2, title: '上海GDP', time: '2020'},
        { id: 3, title: '北京GDP', time: '2021'}
      ]
    }
  }
  componentDidMount() {
    console.log('---------------------', this.props)
  }
  skipToDetail(ele) {
    // 编程式路由跳转
    this.props.history.push('/detail/'+ele.id)
  }
  render() {
    let { list } = this.state
    return(
      <div>
        <h1>新闻列表</h1>
        {
          list.map((ele,idx)=>{
            return(
              <div key={ele.id} onClick={this.skipToDetail.bind(this, ele)}>
                <span>{ele.id}</span>
                <span>{ele.title}</span>
                <span>{ele.time}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
