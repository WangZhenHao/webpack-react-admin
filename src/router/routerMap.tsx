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
type typeRouter = RouteObject & {
    name?: string;
};
const Login = React.lazy(() => import(`@views/login`));
const Home = React.lazy(() => import(`@views/home`));

const list: typeRouter[] = [
    {
        path: "/login",
        element: lazyLoad(Login),
        name: "登录",
    },
    {
        path: "/",
        element: lazyLoad(Home),
    },
];

export default list