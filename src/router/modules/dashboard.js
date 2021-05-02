const dashboardRouter = [{
    path: '',
    component: () => import('@/views/layout/Layout'),
    hidden: false,
    meta: {
        isAuth: true, /** indica se é necessário validação , filhos herdam o pai */
        hasSubMenu: false, /** indica se  o mesmo deve ser formado por menu com sub-menu , true para submenu */
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
            hasSubMenu: false, 
            isAuth: true,
        },
    },
    {
        path: '/favoritos',
        component: () => import('@/views/pages/Favorite'),
        name: 'Favoritos',
        hidden: false,
        meta: { 
            icon: 'mdi-heart',
            title : 'route.favorites',
            roles : ['superadmin'], 
            hasSubMenu: false, 
            isAuth: true,
        },
    } ],
}]


export default dashboardRouter;