import React from 'react'

import Radio from '../../components/radio/Radio.js'
import Checkbox from '../../components/checkbox/Checkbox.js'



export default class FormPage extends React.Component {
  constructor(props) {
    // 调用父组件的构造器方法
    super(props)
    this.state = {
      fruits: [
        { name: '苹果', id: 1 },
        { name: '橙子', id: 2 },
        { name: '西瓜', id: 3 },
        { name: '香蕉', id: 4 },
        { name: '芒果', id: 5 }
      ],
      favChecked: 5,  //单选
      checkedArr: [1,2,4]
    }
  }

  radioChange(x) {
    console.log(x)
    this.setState({
      favChecked: x
    })
  }

  checkboxChange(arr) {
    console.log('-----------------------------------', arr)
    this.setState({
      checkedArr: arr
    })
  }



  render() {
    let { fruits, favChecked, checkedArr } = this.state
    // console.log('--------------------', favChecked)
    return (
      <div>
        { /*<Radio
          options={fruits}
          defaultChecked={favChecked}
          onChange={this.radioChange.bind(this)}
          ></Radio>
        */}

        <Checkbox
          options={fruits}
          checkedArr={checkedArr}
          onChange={this.checkboxChange.bind(this)}
        >
        </Checkbox>
      </div>
    )
  }
}
