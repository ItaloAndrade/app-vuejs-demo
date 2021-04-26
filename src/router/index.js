import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  initCurrentUserStateMiddleware,
  checkAccessMiddleware,
  setPageTitleMiddleware,
  closeNProgress
} from './middlewares';
import errorsRouter from './modules/errors';
import authRouter from './modules/auth';
import dashboardRouter from './modules/dashboard';


Vue.use(VueRouter);

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

router.beforeEach(initCurrentUserStateMiddleware);/*caso api tenh* */
router.beforeEach(checkAccessMiddleware); /** verifica se usuario tem acesso a pagina com base no token que está  no store */
router.beforeEach(setPageTitleMiddleware); /** set titulo da pagina */
router.afterEach(closeNProgress);

export default router