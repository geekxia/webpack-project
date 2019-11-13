import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      fruits: [
        { name: '苹果', id: 1 },
        { name: '橙子', id: 2 },
        { name: '西瓜', id: 3 },
        { name: '香蕉', id: 4 },
        { name: '芒果', id: 5 }
      ],
      fruitId: 3,
      comment: '',
      agree: true
    }
  }

  // 获取非受控表单组件的value
  getUsername1(event) {
    console.log(event)
    console.log(this.refs.username.value)
  }
  // 获取受控表单组件的value
  getUsername2(event) {
    console.log(this.state.username)
  }
  usernameChange(event) {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  // select下拉框的使用
  getFruitName(e) {
    console.log(e)
  }
  fruitChange(event) {
    console.log(event.target.value)
    this.setState({
      fruitId: event.target.value
    })
  }

  // 多行文本框的使用
  getTextAreaData(event) {
    console.log(this.state.comment)
  }
  textareaChange(event) {
    console.log(event.target.value)
    this.setState({
      comment: event.target.value
    })
  }

  checkboxChange(event) {
    console.log(event.target.checked)
    console.log(event.target.value)
    this.setState({
      agree: event.target.checked
    })
  }
  getAgree() {
    console.log(this.state.agree)
  }




  render() {
    let { username, fruits, fruitId, comment, agree } = this.state

    return(
      <div>
        <h1>测试表单</h1>

        {/* 非受控组件：表单的value没有被当前组件的state控制 */}
        <div>
          <input type="text" ref='username'/>
          <span onClick={this.getUsername1.bind(this)}>获取用户名</span>
        </div>

        {/* 受控组件：表单的value被当前组件的state实时控制 */}
        <div>
          <input
            onChange={this.usernameChange.bind(this)}
            type="text"
            value={username}/>
          <span onClick={this.getUsername2.bind(this)}>获取用户名</span>
        </div>

        <br/>
        <hr/>
        {/* 文件上传组件，是非受控组件 */}
        <input type="file" />

        <br/>
        <hr/>

        <select value={fruitId} onChange={this.fruitChange.bind(this)}>
          {
            fruits.map((ele, idx)=>{
              return(
                <option key={ele.id} value={ele.id}>{ele.name}</option>
              )
            })
          }
        </select>
        <span onClick={this.getFruitName.bind(this)}>获取你选择的水果名称</span>

        <br/>
        <hr/>

        <textarea
          value={comment}
          onChange={this.textareaChange.bind(this)}>
        </textarea>
        <span onClick={this.getTextAreaData.bind(this)}>获取textarea表单值</span>

        <br/>
        <hr/>

        <div>
          <input
            onChange={this.checkboxChange.bind(this)}
            value='abc'
            checked={agree}
            type="checkbox"/>
          <span>请勾选<a href="#">《交易协议》</a></span>
          <button onClick={this.getAgree.bind(this)}>提交</button>
        </div>


      </div>
    )
  }
}
