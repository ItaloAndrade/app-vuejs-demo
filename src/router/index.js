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

router.beforeEach(initCurrentUserStateMiddleware);/*caso usuario tenha token valido e o tenha perdido o estado do vuex , o mesmo é restabelecido * */
router.beforeEach(checkAccessMiddleware); /** verifica se usuario tem acesso a pagina com base no token que está  no store */
router.beforeEach(setPageTitleMiddleware); /** set titulo da pagina de acordo com meta */
router.afterEach(closeNProgress);

export default router