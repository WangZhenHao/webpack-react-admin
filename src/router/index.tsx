import type { RouteObject  } from 'react-router-dom'
import React from "react";
import { createHashRouter } from "react-router-dom";
// const lazyLoad = (Component) => {
//     return <Component />
// }
type typeRouter =  RouteObject & {
    name?: string
}
const Login = React.lazy(() => import(`@views/login`));
const Home = React.lazy(() => import(`@views/home`));

const list: typeRouter[] = [
    {
        path: '/login',
        element: <Login  />,
        name: '登录'
    },
    {
        path: '/',
        element: <Home />
    }
]

const router = createHashRouter(list)


export default router;