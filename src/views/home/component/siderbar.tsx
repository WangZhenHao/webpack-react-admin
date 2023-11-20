// import {
//     LeftOutlined,
//     RightOutlined,
// } from "@ant-design/icons";

// import * as AllIcon from "@ant-design/icons"
import Icon from '@/components/global/Icon'

import style from "./component.module.scss";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState, useEffect } from "react";
import { selectUserInfo } from "@store/user";
import { useAppSelector } from "@store/hooks";
import { toMakeTree } from '@js/utils/createTree'
import { useNavigate, useLocation } from "react-router-dom";
// const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[]
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

function filterTreeList(list: any): any {
    const json = []
    for(let item of list) {
        // const a = item.icon as keyof typeof AllIcon
        // const Compoent = AllIcon[a]
        const detial = {
            label: item.name, 
            key: item.path ? item.path : item.name, 
            icon: item.icon ? <Icon icon={item.icon} /> : '',
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

function findOpenKey(path: string, list: any, parenList?: any) {
    let openKeys = ''
    
    for(let item of list) {

        if(item.children && item.children.length) {
            openKeys =  findOpenKey(path, item.children, item)
            return openKeys;
        } 

        if(item.key === path) {
            return parenList ? parenList.key : item.key

        }
    }
    return openKeys;
}

export default function App() {
    const userInfo = useAppSelector(selectUserInfo);
    const href = useLocation();

    const navigate = useNavigate();

    const [selectedKeys, setSelectedKeys] = useState<string[]>([href.pathname]);
    
    const treeList = toMakeTree(JSON.parse(JSON.stringify(userInfo?.list!)), '0')
    
    
    // console.log(filterTreeList(treeList), treeList);
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

    const [openKeys] = useState<string[]>([findOpenKey(href.pathname, items)]);
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const menuClick: MenuProps['onSelect'] = (e) => {
        console.log(e);
        navigate(e.key)
        setSelectedKeys([e.key])
    };

    
    return (
        <>
            <div
                className={`${style.silderWrap} relative  ${
                    collapsed ? style.with80 : ""
                } `}
            >
                <Menu
                    inlineCollapsed={collapsed}
                    theme="dark"
                    mode="inline"
                    items={items}
                    onSelect={menuClick}
                    defaultSelectedKeys={selectedKeys}
                    defaultOpenKeys={openKeys}
                />
                <div
                    className={`${style.iconArrow} text-color-f absolute`}
                    onClick={toggleCollapsed}
                >
                    {collapsed ? (
                        // <LeftOutlined className="text-14px" />
                        <Icon icon="LeftOutlined" className='text-14px' />
                    ) : (
                        <Icon icon="RightOutlined" className='text-14px' />
                        // <RightOutlined className="text-14px" />
                    )}
                </div>
            </div>
        </>
    );
}
