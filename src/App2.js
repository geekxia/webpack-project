import React from 'react'
// 引入样式文件
import './assets/css/common.scss'
import './assets/css/style.css'
// 引入ant design 样式文件
import 'antd/dist/antd.css'

// 安装react-router： npm install react-router-dom -S
import {
  BrowserRouter,  // 浏览器路由，刷新、请求时404，需要后端做重定向处理
  HashRouter,  // 没有上述问题，但是URL上有一个#
  NavLink,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

// 布局组件
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

// 页面路由
import routes from './views/index.js'

import { ThemeContext, themes } from './util/context.js'
let { Provider } = ThemeContext

export default class App extends React.Component {
  constructor(props) {
    // 调用父组件的构造器方法
    super(props)
    this.state = {
      theme: themes.dark
    }
  }

  // 生成导航，导航不用考虑子级路由，只考虑一级路由
  createNavLink(routes) {
    let arr = []
    routes.map((ele,idx)=>{
      arr.push(
        <div key={ele.id}>
          <NavLink
            to={ele.path}
            exact
            activeClassName='on'
          >
          {ele.text}
          </NavLink>
        </div>
      )
    })
    return arr;
  }

  // 生成路由容器
  createRoute(routes) {
    let arr = []
    // 遍历一级路由
    routes.map((ele,idx)=>{
      arr.push(<Route
        exact
        key={ele.id}
        path={ele.path}
        component={ele.component}
      >
      </Route>)
      // 遍历子级路由
      if (ele.children && ele.children.length > 0) {
        ele.children.map((child,idx)=>{
          arr.push(<Route
            exact
            key={child.id}
            path={child.path}
            component={child.component}
          >
          </Route>)
        })
      }
    })
    return arr;
  }


  // 切换context主题色
  switchTheme() {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    })
  }

  render() {
    let { theme } = this.state
    return (
      <HashRouter>
        <Provider value={theme}>
        <div className='app'>
        <Layout style={{'height': '100%'}}>
          <Sider width='135'>
            <div>logo</div>
            {
              this.createNavLink(routes)
            }
          </Sider>
          <Layout>
            <Header>
              <div>用户名</div>
            </Header>
            <Content>
              <button onClick={this.switchTheme.bind(this)}>切换颜色</button>
              {
                this.createRoute(routes)
              }
            </Content>
          </Layout>
        </Layout>
        </div>
        </Provider>
      </HashRouter>
    )
  }
}
