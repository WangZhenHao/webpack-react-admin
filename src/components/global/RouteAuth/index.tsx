import { useLocation, Navigate, useSearchParams  } from 'react-router-dom'
import { selectUserInfo } from '@store/user'
import {  useAppSelector } from '@store/hooks'

export default function App({ children }: { children: JSX.Element }) {
    const userInfo = useAppSelector(selectUserInfo);
    const location  = useLocation()
    // let [searchParams] = useSearchParams();
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