import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { initCurrentUserStateMiddleware, checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/about',
    name: 'About',
    meta: { isAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  }
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
