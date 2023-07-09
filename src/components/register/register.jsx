import { Button, message, Form, Input } from "antd";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./register.less";
import { useDispatch } from 'react-redux'
import { registerdata } from "../../store/modules/counter";

const App = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const nameValue = Form.useWatch("username", form);
  const passwordValue = Form.useWatch("password", form);
  const phoneValue = Form.useWatch("phone", form);
  const codeValue = Form.useWatch("code", form);
  const dispatch = useDispatch()
  const [isDisabled, setDisabled] = useState(true);
  let rgdata = {};
  const onFinish = (values) => {
    messageApi.success("注册成功");
    rgdata.username = nameValue;
    rgdata.password = passwordValue;
    rgdata.phone = phoneValue;
    rgdata.code = codeValue;
    dispatch(registerdata(rgdata))
    localStorage.setItem("rgdata", JSON.stringify(rgdata));
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleClick = () => {
    console.log(phoneValue.length);
  };
  useEffect(() => {
    let reg = /^[1][3-9][0-9]{9}$/;
    if (phoneValue) {
      if (reg.test(phoneValue)) {
        setDisabled(!isDisabled);
      } else {
        setDisabled(true);
      }
    }
  }, [phoneValue]);
  return (
    <>
      {contextHolder}
      <div className="register">
        <div className="registers">
          <h3>用户注册</h3>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入账号",
                  max: 6,
                  pattern: "^[a-zA-Z0-9]{1,6}$",
                },
              ]}
            >
              <Input placeholder="请输入账号" />
            </Form.Item>

            <Form.Item
              label="手机号"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "请输入手机号",
                  pattern: "^[1][3-9][0-9]{9}$",
                },
              ]}
            >
              <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item
              label="验证码"
              name="code"
              rules={[
                {
                  required: true,
                  message: "请输入正确验证码",
                  pattern: new RegExp(/^[0-9]\d{5}$/, "g"),
                },
              ]}
            >
              <div>
                <Input placeholder="请输入验证码" style={{ width: "163px" }} />
                <Button
                  type="primary"
                  onClick={handleClick}
                  disabled={isDisabled}
                >
                  获取验证码
                </Button>
              </div>
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                  pattern:
                    "^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*,.])[0-9a-zA-Z!@#$%^&*,.]{6,20}$",
                },
              ]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div className="sub">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "260px" }}
                >
                  登录
                </Button>
              </div>

              <div className="pass">
                <p>
                  <Link to="/password">忘记密码？</Link>
                </p>
                <p>
                  已有账号？<Link to="/login">马上登录</Link>
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default App;
