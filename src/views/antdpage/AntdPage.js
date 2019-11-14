import React from 'react'

// npm install antd -S 安装
import { Button, Icon, Row, Col, Layout, Affix } from 'antd'
const { Header, Footer, Content } = Layout


export default class AntdPage extends React.Component {
  constructor(props) {
    // 调用父组件的构造器方法
    super(props)
    this.state = {
      top: 10
    }
  }


  render() {

    return (
      <div>
        <Button>按钮</Button>
        <Button type="danger">Danger</Button>

        <Icon type="loading" />

        {/* 第一行 */}
        <Row>
          <Col span={12}>
            <div>col-12</div>
          </Col>

          <Col span={12}>
            <div>col-12</div>
          </Col>
        </Row>


        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>

        <br/>

        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            Affix top
          </Button>
        </Affix>


      </div>
    )
  }
}
