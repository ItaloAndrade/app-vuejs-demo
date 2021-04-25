import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  initCurrentUserStateMiddleware,
  checkAccessMiddleware,
  setPageTitleMiddleware
} from './middlewares'
Vue.use(VueRouter)


const routes = [{
    path: '/',
    alias: '/login',
    name: 'SignIn',
    component: () => import('@/views/pages/SignIn'),
  },
  {
    path: 'signUp',
    alias: '/register',
    name: 'SignUp',
    component: () => import('@/views/pages/SignUp'),
    hidden: true,
  },
  {
    path: '',
    component: () => import('@/views/layout/Layout'),
    children: [{
      path: '/dashboard',
      component: () => import('@/views/pages/Dashboard'),
      name: 'Dashboard',
      meta: {
        isAuth : true
      },
    }, ],
  },
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
  },
  { path: '*', redirect: '/error/404', hidden: true }
]


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(initCurrentUserStateMiddleware);
router.beforeEach(checkAccessMiddleware);
router.beforeEach(setPageTitleMiddleware);


export default router