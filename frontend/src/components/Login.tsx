import { Form, Input, Button, message } from "antd";
import React, { useEffect } from "react";
import { postRequests } from "../apis/api";

function Login() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log("Success:", values);

    const res = await postRequests("/login", values);

    if (res.status) {
      localStorage.setItem("loginCode", "logged-in");
      localStorage.setItem("chairperson", res.data.chairman);
      window.location.href = "/voting";
    } else {
      message.error("Invalid username or password");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("loginCode")) {
      window.location.href = "/voting";
    }
  }, []);

  return (
    <Form
      name="basic"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ width: "400px", margin: "auto", marginTop: "20px" }}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <h1 style={{ textAlign: "center", fontSize: 35 }}>Login</h1>
      <Form.Item
        label="UserName"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        style={{ padding: 0 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        style={{ padding: 0 }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
