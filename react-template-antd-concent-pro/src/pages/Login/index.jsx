import styles from "./styles.module.css";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import bgImg from "@/static/images/img_bg.jpg";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export default function LoginView(props) {
  const bgStyle = {
    background: `url(${bgImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="full" style={bgStyle}>
      <Row className={styles.login_form_box}>
        <Col
          xs={24}
          sm={18}
          md={12}
          lg={6}
          xl={8}
          className={styles.login_form}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h1 className={styles.login_form_title}>登录</h1>
            <Form.Item
              label=""
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input placeholder="用户名" allowClear />
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password placeholder="密码" allowClear />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住账号</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
