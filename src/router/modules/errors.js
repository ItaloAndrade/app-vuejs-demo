
const errorsRouter = [ 
  {
    path: '/error/301',
    component: () => import('@/views/pages/ErrorPage'),
    name: 'Page301',
    props: {
      errorCode: 301
    },
  },
  {
    path: '/error/401',
    component: () => import('@/views/pages/ErrorPage'),
    name: 'Page401',
    meta: {
      title: 'route.errorPages.page401',
      noCache: true
    },
    props: {
      errorCode: 401
    },
  },
  {
    path: '/error/403',
    component: () => import('@/views/pages/ErrorPage'),
    name: 'Page403',
    meta: {
      title: 'route.errorPages.page403'
    },
    props: {
      errorCode: 403
    },
  },
  {
    path: '/error/404',
    component: () => import('@/views/pages/ErrorPage'),
    name: 'Page404',
    meta: {
      title: 'route.errorPages.page404'
    },
    props: {
      errorCode: 404
    },
  },
  {
    path: '/error/500',
    component: () => import('@/views/pages/ErrorPage'),
    name: 'Page500',
    meta: {
      title: 'route.errorPages.page500'
    },
    props: {
      errorCode: 500
    },
  }
]
 

export default errorsRouter;