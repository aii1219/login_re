import { Button, message, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./login.less";
import { useDispatch } from 'react-redux'
import { userdata } from "../../store/modules/counter";

const App = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const nameValue = Form.useWatch("username", form);
  const passwordValue = Form.useWatch("password", form);
  const dispatch = useDispatch()
  let userda = {}
  const onFinish = () => {
    messageApi.success('登录成功');
    userda.username=nameValue
    userda.password = passwordValue
    //数据存入redcu
    dispatch(userdata(userda))
    localStorage.setItem("userda", JSON.stringify(userda));
    console.log(userda);
  };
  const onFinishFailed = (errorInfo) => {
    messageApi.error('登录失败');
  };
  return (
    <>
    {contextHolder}
      <div className="login">
        <div className="logins">
          <h3>登录</h3>
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
                  message: "用户名输入不正确",
                  max: 6,
                  pattern: "^[a-zA-Z0-9]{1,6}$",
                },
              ]}
            >
              <Input placeholder="请输入账号" />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "用户密码输入不正确",
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
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <div className="pass">
                <p>
                  <Link to="/password">忘记密码？</Link>
                </p>
                <p>
                  没有账号？<Link to="/register">快速注册</Link>
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
