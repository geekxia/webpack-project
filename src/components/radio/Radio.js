import React from 'react'

export default class Radio extends React.Component {
  constructor(props) {
    super(props)
  }
  
  onChangeHandle(event) {
    this.props.onChange(event.target.checked)
    this.props.onChange(event.target.value)
  }
  render() {
    let { options, defaultChecked } = this.props

    return(
      <div>
        {
          options.map((ele,idx)=>{
            return(
              <div key={ele.id}>
                <input
                  onChange={this.onChangeHandle.bind(this)}
                  type="radio"
                  value={ele.id}
                  checked={ele.id === parseInt(defaultChecked)}/>
                <span>{ele.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
