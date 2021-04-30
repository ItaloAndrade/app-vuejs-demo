const dashboardRouter = [{
    path: '',
    component: () => import('@/views/layout/Layout'),
    children: [{
        path: '/dashboard',
        component: () => import('@/views/pages/Dashboard'),
        name: 'Dashboard',
        meta: {
            isAuth: true,
            icon: 'mdi-view-dashboard',
            title : 'route.dashboard',
        },
    }, ],
}]


export default dashboardRouter;