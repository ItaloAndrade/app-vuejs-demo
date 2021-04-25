import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  initCurrentUserStateMiddleware,
  checkAccessMiddleware,
  setPageTitleMiddleware
} from './middlewares';
Vue.use(VueRouter);
import errorsRouter from './modules/errors';
import authRouter from './modules/auth';
import dashboardRouter from './modules/dashboard';
const routes = [
  ...authRouter,
  ...dashboardRouter,
  ...errorsRouter,
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