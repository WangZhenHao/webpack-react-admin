import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";

import style from "./component.module.scss";
import type { MenuProps } from "antd";
import { Layout, Menu, ConfigProvider } from "antd";
import { useState } from 'react'

// const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export default function App() {
    const items: MenuItem[] = [
        getItem("Option 1", "1", <PieChartOutlined />),
        getItem("Option 2", "2", <DesktopOutlined />),
        getItem("User", "sub1", <UserOutlined />, [
            getItem("Tom", "3"),
            getItem("Bill", "4"),
            getItem("Alex", "5"),
        ]),
        getItem("Team", "sub2", <TeamOutlined />, [
            getItem("Team 1", "6"),
            getItem("Team 2", "8"),
        ]),
        getItem("Files", "9", <FileOutlined />),
    ];

    const [collapsed, setCollapsed] = useState(false); 
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
      };
    return (
        <>
            <div className={`${style.silderWrap} relative  ${collapsed ? style.with80 : ''} `}>
                {/* <Sider> */}
                    {/* <ConfigProvider theme={{
                        token: {
                            colorBgContainer: '#f6ffed'
                        }
                    }}> */}
                        <Menu
                            inlineCollapsed={collapsed}
                            theme="dark"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            items={items}
                        />
                    {/* </ConfigProvider> */}
                {/* </Sider> */}
                <div className={`${style.iconArrow} text-color-f absolute`} onClick={toggleCollapsed}>
                   {collapsed ? <LeftOutlined className="text-14px" /> : <RightOutlined className="text-14px" />}  
                </div>
            </div>
        </>
    );
}
