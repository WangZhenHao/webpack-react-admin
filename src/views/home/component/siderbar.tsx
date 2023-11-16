import {
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";

import style from "./component.module.scss";
import type { MenuProps } from "antd";
import { Layout, Menu, ConfigProvider } from "antd";
import { useState } from "react";
import { selectUserInfo } from "@store/user";
import { useAppSelector } from "@store/hooks";
import { toMakeTree } from '@js/utils/createTree'

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

function filterTreeList(list: any): any {
    const json = []
    for(let item of list) {
        const detial = {
            label: item.name, 
            key: item.path, 
            icon: '',
            children: null
        }
        

        if(item.child && item.child.length) {
            const children = filterTreeList(item.child)

            detial.children = children
        }
        json.push(detial)
    }

    return json;
}

export default function App() {
    const userInfo = useAppSelector(selectUserInfo);
    
    const treeList = toMakeTree(JSON.parse(JSON.stringify(userInfo?.list!)), '0')
    
    console.log(filterTreeList(treeList));
    // const items: MenuItem[] = [
    //     getItem("Option 1", "1", <PieChartOutlined />),
    //     getItem("Option 2", "2", <DesktopOutlined />),
    //     getItem("User", "sub1", <UserOutlined />, [
    //         getItem("Tom", "3"),
    //         getItem("Bill", "4"),
    //         getItem("Alex", "5"),
    //     ]),
    //     getItem("Team", "sub2", <TeamOutlined />, [
    //         getItem("Team 1", "6"),
    //         getItem("Team 2", "8"),
    //     ]),
    //     getItem("Files", "9", <FileOutlined />),
    // ];
    const items = filterTreeList(treeList) as MenuItem[]

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const menuClick: MenuProps['onSelect'] = (e) => {
        console.log(e);
        debugger;
    };
    return (
        <>
            <div
                className={`${style.silderWrap} relative  ${
                    collapsed ? style.with80 : ""
                } `}
            >
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
                    onSelect={menuClick}
                />
                {/* </ConfigProvider> */}
                {/* </Sider> */}
                <div
                    className={`${style.iconArrow} text-color-f absolute`}
                    onClick={toggleCollapsed}
                >
                    {collapsed ? (
                        <LeftOutlined className="text-14px" />
                    ) : (
                        <RightOutlined className="text-14px" />
                    )}
                </div>
            </div>
        </>
    );
}
