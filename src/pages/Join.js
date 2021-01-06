import React from "react";

import { Form, Input, Button, InputNumber } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};

export const Join = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Agent Name"
        name="agent"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Desktop"
        name="desktop"
        rules={[{ required: true, message: "Please input your desktop!" }]}
      >
        <InputNumber  min={1} max={99}/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" shape="round">
        <SaveOutlined />
          Join
        </Button>
      </Form.Item>
    </Form>
  );
};
