import React from 'react'

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }

  onChangeHandle(event) {
    let { checkedArr } = this.props
    let value = parseInt(event.target.value)

    if (event.target.checked) {
      checkedArr.push(value)
    } else {
      // 没有ele.id
      let idx = checkedArr.findIndex(ele => ele === value)
      checkedArr.splice(idx, 1)
    }
    this.props.onChange([...new Set(checkedArr)])
  }

  render() {
    let { options, checkedArr } = this.props

    options.map((ele, idx)=>{
      if (checkedArr.includes(ele.id)) {
        options[idx].checked = true
      } else {
        options[idx].checked = false
      }
    })

    return(
      <div>
        {
          options.map((ele,idx)=>{
            return(
              <span key={ele.id}>
                <input
                  onChange={this.onChangeHandle.bind(this)}
                  type="checkbox"
                  value={ele.id}
                  checked={ele.checked}/>
                <span>{ele.name}</span>
              </span>
            )
          })
        }
      </div>
    )
  }
}
