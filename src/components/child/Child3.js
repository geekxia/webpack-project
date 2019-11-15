import React from 'react'

export default class Child3 extends React.Component {
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
