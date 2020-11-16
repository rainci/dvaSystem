import React from 'react';
import { Layout } from 'antd'
import MenuSide from '../../components/Menu'
const Mock = require('mockjs')
const defaultResult = {
  msg: 'success',
  code: 200, // code 200 是成功

};
const db = Mock.mock({
  ...defaultResult,
  [`data|10`]: [
    {
      'id|+1': 1,
      'title': '@name',
      'link': '',
      'type' : 'title',
      'children|0-2': [
        {
          'id|+1': 11,
          'title': '@name',
          'link': '',
          'type': 'menu'
        }
      ]
    }
  ],
})
console.log('db:',db)
const { Content, Sider } = Layout;
const Main = props => {
  return(
    <Layout>
      <Sider>
       <MenuSide menuData={db.data}></MenuSide>
      </Sider>
      <Content>
        {props.children}
      </Content>
    </Layout>
  )
}
export default Main;