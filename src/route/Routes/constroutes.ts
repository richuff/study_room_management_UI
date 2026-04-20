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
    {
        path: '/register',
        component: () => import('@/common/register/index.vue'),
        name: 'register',
        meta: {
            title: 'register',
        },
    },
    {
        path: '/forgetpassword',
        component: () => import('@/common/forgetpwd/index.vue'),
        name: 'forgetpassword',
        meta: {
            title: 'forgetpassword',
        },
    },
    {
        path: '/userinfo',
        component: () => import('@/layout/userinfo/index.vue'),
        name: 'userinfo',
        meta: {
            title: 'userinfo',
        },
    },
    {
        path: '/retrieval',
        component: () => import('@/archive/retrieval/index.vue'),
        name: 'retrieval',
        meta: {
            title: 'retrieval',
        },
    },
    {
        path: '/appointment',
        component: () => import('@/archive/appointment/index.vue'),
        name: 'appointment',
        meta: {
            title: 'appointment',
        },
    },
    {
        path: '/inquiry',
        component: () => import('@/archive/Inquiry/index.vue'),
        name: 'inquiry',
        meta: {
            title: 'inquiry',
        },
    },
    {
        path: '/setting',
        component: () => import('@/common/setting/index.vue'),
        name: 'setting',
        meta: {
            title: 'setting',
        },
    },
]

export default constroutes;