import TodoStore from './TodoStore.js'
import MusicStore from './MusicStore.js'


// store分模块的写法
class Store {
  constructor() {
    this.TodoStore = new TodoStore()
    this.MusicStore = new MusicStore()
  }
}

export default new Store()
