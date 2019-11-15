import axios from 'axios'

const baseUrl = 'http://localhost:8080'

function fetch(api, method, callback) {
  axios({
    url: baseUrl+api,
    method: method,
    headers: {
      token: '9898398398438949839843'
    }
  }).then(res=>{
    console.log('成功')
    let data = null
    if (res.data.code === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('失败', err)
  }).then(()=>{
    // 总会执行
  })
}

export default fetch
