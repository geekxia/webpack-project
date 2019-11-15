import React from 'react'

export default class Child2 extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let { msg } = this.props
    return (
      <div>
        <h1>{msg}</h1>
      </div>
    )
  }
}
