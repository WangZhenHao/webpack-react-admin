const map = {
    '/login': {
        path: '/login',
        lazy: () => import("@views/login"),
        name: '登录'
    }
}

export default map