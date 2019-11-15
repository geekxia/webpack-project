import { observable, action } from 'mobx'

class Store {
  @observable time = '2019年11月15日'
  @observable msg = 'hello 1912'

  @observable list = [
    { id: 1, name: '打球', time: '2019'},
    { id: 2, name: '敲代码', time: '201911'},
    { id: 3, name: '睡觉', time: '201900'}
  ]

  // @action add(payload) {
  //   console.log('store add 执行了')
  //   this.list.push(payload)
  // }

  @action updateList(payload) {
    console.log(payload)
    switch (payload.type) {
      case 'delete':
        let list = this.list
        list.map((ele,idx)=>{
          if (ele.time === payload.item.time) {
            list.splice(idx, 1)
          }
        })
        this.list = list
        break
      case 'add':
        this.list.push(payload.item)
        break
      case 'reset':
        this.list = []
        break
      default:
    }
  }
}
export default Store
