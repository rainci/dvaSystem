import React from 'react';
import { Layout } from 'antd'
import MenuSide from '../../components/Menu'
import { connect } from 'dva';

const { Content, Sider } = Layout;
const Main = props => {
  return(
    <Layout>
      <Sider>
       <MenuSide menuData={props.app.data}></MenuSide>
      </Sider>
      <Content>
        {props.children}
      </Content>
    </Layout>
  )
}
const mapStateToProps = ({ app, dispatch, loading }) => {
  return {
    app,
    loading,
    dispatch
  };
}

export default connect(mapStateToProps)(Main);
// export default Main;