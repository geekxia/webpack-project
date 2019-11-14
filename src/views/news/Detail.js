import React from 'react'

export default class NewsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log('=========================', this.props.match.params.id)
  }
  render() {
    let { list } = this.state
    return(
      <div>
        <h1>新闻详情{this.props.match.params.id}</h1>

      </div>
    )
  }
}
