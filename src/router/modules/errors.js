
const errorsRouter = [ {
  path: '',
  component: () => import('@/views/layout/Layout'),
  hidden: false,
  meta: {
      isAuth: true, /** indica se é necessário validação , filhos herdam o pai */
      hasSubMenu: true, /** indica se  o mesmo deve ser formado por menu com sub-menu , true para submenu */
      icon: 'mdi-alert-circle',
      title : 'route.errors',
      roles : ['*'],
  },
  children :[
    {
      path: '/error/301',
      component: () => import('@/views/pages/ErrorPage'),
      name: 'Page301',
      props: {
        errorCode: 301,
      },
      hidden: false,
      meta: {
        title: 'route.errorPages.page301',  
        roles : ['admin','default'],
        hasSubMenu: true, 
      },
    },
    {
      path: '/error/401',
      component: () => import('@/views/pages/ErrorPage'),
      name: 'Page401',
      hidden: false,
      meta: {
        title: 'route.errorPages.page401', 
        roles : ['admin','default'],
        hasSubMenu: true, 
      },
      props: {
        errorCode: 401
      },
    },
    {
      path: '/error/403',
      component: () => import('@/views/pages/ErrorPage'),
      name: 'Page403',
      hidden: false,
      meta: {
        title: 'route.errorPages.page403', 
        roles : ['admin','default'],
        hasSubMenu: true, 
      },
      props: {
        errorCode: 403
      },
    },
    {
      path: '/error/404',
      component: () => import('@/views/pages/ErrorPage'),
      name: 'Page404',
      hidden: false,
      meta: {
        title: 'route.errorPages.page404',  roles : ['admin','default'], hasSubMenu: true, 
      },
      props: {
        errorCode: 404
      },
    },
    {
      path: '/error/500',
      component: () => import('@/views/pages/ErrorPage'),
      name: 'Page500',
      hidden: false,
      meta: {
        title: 'route.errorPages.page500', 
        roles : ['admin','default'],
        hasSubMenu: true, 
      },
      props: {
        errorCode: 500
      },
    }
  ],
}
]
 

export default errorsRouter;