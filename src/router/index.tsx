import type { RouteObject  } from 'react-router-dom'
import React, { Suspense } from "react";
import { createHashRouter } from "react-router-dom";
// const lazyLoad = (Component) => {
//     return <Component />
// }
type typeRouter =  RouteObject & {
    name?: string
}
const Login = React.lazy(() => import(`@views/login`));
const Home = React.lazy(() => import(`@views/home`));

const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => (
    <Suspense fallback={<div>页面加载中...</div>}>
      <Component />
    </Suspense>
  )

  
const list: typeRouter[] = [
    {
        path: '/login',
        element: lazyLoad(Login),
        name: '登录'
    },
    {
        path: '/',
        element: lazyLoad(Home)
    }
]

const router = createHashRouter(list)


export default router;