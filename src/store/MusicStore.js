import { observable, action } from 'mobx'

import fetch from '../util/fetch.js'

class MusicStore {
  @observable zjl = '周杰伦'
  @observable list = []

  // 调接口
  @action getMusic() {
    let api = '/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=54977806238856592&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

    fetch(api, 'GET', (data)=>{
      console.log('周杰伦音乐列表', data.song.list)
      this.list = data.song.list
    })
  }
}

export default MusicStore
