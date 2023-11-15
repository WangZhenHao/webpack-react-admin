import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import admin from "@img/admin.png";

import style from "./component.module.scss";



export default function App() {
    const loginOut = () => {
        alert(1)
    }
    const items: MenuProps["items"] = [
        {
            key: '1',
            label: (
                <span className="text-center" onClick={loginOut}>退出登录</span>
            )
        }
    ];

    return (
        <>
            <div
                className={`${style.headerWrap} flex justify-between items-center`}
            >
                <div className={style.leftWrap}>React版本-后台管理系统</div>
                <div className={style.rightwrap}>
                    <Dropdown menu={{ items }}>
                        <div className="flex items-center text-14px text-color-f">
                            <img
                                className={style.imgblock}
                                src={admin}
                                alt="头像"
                            />
                            <span className="pl-6px pr-4px">管理员</span>
                            <DownOutlined className="text-12px" />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </>
    );
}
