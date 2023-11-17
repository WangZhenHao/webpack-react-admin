import type { RouteObject } from "react-router-dom";
import React, { Suspense } from "react";

import { Spin } from "antd";

const lazyLoad = (
    Component: React.LazyExoticComponent<any>
): React.ReactNode => (
    <Suspense
        fallback={
            <Spin
                size="default"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            />
        }
    >
        <Component />
    </Suspense>
);



  
const Login = React.lazy(() => import(`@views/login`));
const Home = React.lazy(() => import(`@views/home`));
const Overview = React.lazy(() => import(`@views/overview`));
const MenuList = React.lazy(() => import(`@views/system/menuList`));
const RoleList = React.lazy(() => import(`@views/system/roleList`));


type typeRouter = RouteObject & {
    name?: string;
    children?: typeRouter[]
}

const list: typeRouter[] = [
    {
        path: "/login",
        element: lazyLoad(Login),
        name: "登录",
    },
    {
        path: "/",
        element: lazyLoad(Home),
        children: [
            {
                path: "/overview",
                element: lazyLoad(Overview),
                name: '概况'
            },
            {
                path: "/system/menuList",
                element: lazyLoad(MenuList),
                name: '菜单列表'
            },
            {
                path: "/system/roleList",
                element: lazyLoad(RoleList),
                name: '角色列表'
            }
        ]
    },
];

export default list