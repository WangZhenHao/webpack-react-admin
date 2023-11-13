import style from "./index.module.scss";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'


type FieldType = {
    username?: string;
    password?: string;
};
export default function Login() {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log("Success:", values);
        navigate('/')
        
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <div className={`${style.loginWrap} absolute`}>
                <div className="text-center text-color-3 mb-10px">
                    后台管理系统
                </div>
                <div>
                    <Form
                        name="basic"
                        initialValues={{
                            username: "admin",
                            password: "123456",
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            name="username"
                            rules={[
                                { required: true, message: "请输入用户名" },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="用户名"
                            />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="password"
                            rules={[{ required: true, message: "请输入密码" }]}
                        >
                            <Input.Password
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{ width: "100%", height: '40px' }}
                                type="primary"
                                htmlType="submit"
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}
