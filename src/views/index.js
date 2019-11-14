import Home from './home/Home.js'
import LifePage from './lifepage/LifePage.js'
import FormPage from './formpage/FormPage.js'
import AntdPage from './antdpage/AntdPage.js'
import About from './about/About.js'
import News from './news/News.js'
import NewsDetail from './news/Detail.js'


const routes = [
  {
    id: 1,
    path: '/',
    text: '首页',
    component: Home
  },
  {
    id: 2,
    path: '/life',
    text: '生命',
    component: LifePage
  },
  {
    id: 3,
    path: '/form',
    text: '表单',
    component: FormPage
  },
  {
    id: 4,
    path: '/antd',
    text: 'UI库',
    component: AntdPage
  },
  {
    id: 5,
    path: '/about',
    text: '关于我们',
    component: About
  },
  {
    id: 6,
    path: '/news',
    text: '新闻列表',
    component: News,
    children: [
      {
        id: 601,
        path: '/detail/:id',
        text: '新闻详情',
        component: NewsDetail
      }
    ]
  },


]

export default routes
