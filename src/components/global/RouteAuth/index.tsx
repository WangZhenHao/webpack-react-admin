import { useLocation, Navigate, useSearchParams  } from 'react-router-dom'
import { selectUserInfo } from '@store/user'
import {  useAppSelector } from '@store/hooks'

export default function App({ children }: { children: JSX.Element }) {
    const userInfo = useAppSelector(selectUserInfo);
    const location  = useLocation()
    // let [searchParams] = useSearchParams();
    // console.log(location, userInfo)

    const routerList = userInfo?.list
    if(routerList?.findIndex(item => item.path === location.pathname) === -1 && location.pathname != '/403') {
        return <Navigate to="/403" replace />
    }
    
    // debugger
    if(!userInfo && location.pathname !== '/login') {
        return <Navigate to="/login" replace />
    }

    if(location.pathname === '/login' && userInfo) {
        return <Navigate to="/overview" replace />
    }

    if(location.pathname === '/login' && !userInfo) {
        return children
    }

    return children
}