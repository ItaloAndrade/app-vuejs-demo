const dashboardRouter = [{
    path: '',
    component: () => import('@/views/layout/Layout'),
    hidden: false,
    meta: {
        isAuth: true, /** indica se é necessário validação , filhos herdam o pai */
        hasSubMenu: false, /** indica se  o mesmo deve ser formado por menu com sub-menu , true para submenu */
        icon: 'mdi-view-dashboard',
        title : 'route.dashboard',
        roles : ['*'],
    },
    children: [{
        path: '/dashboard',
        component: () => import('@/views/pages/Dashboard'),
        name: 'Dashboard',
        hidden: false,
        meta: { 
            icon: 'mdi-view-dashboard',
            title : 'route.dashboard',
            roles : ['superadmin'],
            primary : true,
            hasSubMenu: false, 
        },
    }, ],
}]


export default dashboardRouter;