const constroutes = [
    {
        path: '/',
        component: () => import('@/page/home/index.vue'),
        name: 'home',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/page/home/index.vue'),
                meta: {
                    title: '主页',
                },
            }
        ]
    },
    {
        path: '/archive',
        component: () => import('@/page/archive/index.vue'),
        name: 'archive',
        meta: {
            title: 'archive',
        },
    },
    {
        path: '/404',
        component: () => import('@/common/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
        },
    },
    {
        path: '/login',
        component: () => import('@/common/login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',
        },
    },
]

export default constroutes;