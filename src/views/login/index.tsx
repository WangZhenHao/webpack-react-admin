import style from "./index.module.scss";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLoginIn } from "@api/login";
import { useAppDispatch } from "@store/hooks";

import { login } from "@store/user";

type typeLoginParmas = Parameters<typeof userLoginIn>[0];

export default function Login() {
    const [loadings, setLoadings] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFinish = (values: typeLoginParmas) => {
        setLoadings(true);
        dispatch(
            login({
                params: values,
                cb: () => {
                    setLoadings(false);
                },
            })
        );
        // userLoginIn(values).then(res => {
        //     console.log(res)
        //     setTimeout(() => {
        //         setLoadings(false)
        //         // navigate('/')
        //     }, 2000)
        // })
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
                        <Form.Item<typeLoginParmas>
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
                        <Form.Item<typeLoginParmas>
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
                                style={{ width: "100%", height: "40px" }}
                                type="primary"
                                htmlType="submit"
                                loading={loadings}
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
