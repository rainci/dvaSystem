import React from 'react';
import { connect } from 'dva';
// import React, { useReducer } from 'react';
import styles from './IndexPage.css';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons'
const FormItem = Form.Item;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

function IndexPage({ dispatch, loading, login }) {
  const { username, password, remember } = login
  const onFinish = values => {
    console.log('Success:', values);
    dispatch({
      type: 'login/fetchLogin',
      payload: values
    })
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember, password, username }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormItem
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </FormItem>
          <FormItem
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input prefix={<UserOutlined />} type="password" placeholder="Password" />
          </FormItem>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};
const mapStateToProps = ({ login, dispatch, loading }) => {
  return {
    login,
    loading,
    dispatch
  };
}

export default connect(mapStateToProps)(IndexPage);
