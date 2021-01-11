import React, { useState } from 'react';

import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};

export const Join = () => {

    const history = useHistory();
    const [ user ] = useState( getUserStorage() );

    useHideMenu( false );

  const onFinish = ({ agent, desktop }) => {

    localStorage.setItem('agent', agent);
    localStorage.setItem('desktop', desktop);

    history.push('/desktop')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if( user.agent && user.desktop ){
    return <Redirect to="/desktop" />
  }

  return (
    <>
      <Title level={2}>Enter</Title>
      <Text>Enter your Name and desk number</Text>
      <Divider/>

      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Agent Name'
          name='agent'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Desktop'
          name='desktop'
          rules={[{ required: true, message: 'Please input your desktop!' }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' shape='round'>
            <SaveOutlined />
            Join
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
