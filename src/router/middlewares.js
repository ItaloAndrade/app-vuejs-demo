import $store from '../store'
import {
  AuthService
} from '@/services/auth.service'

  
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import {
  routes
} from '@/router';

import {  isNullUndefinedEmpty } from "@/infra/util";

import i18n from '@/locate'; 

NProgress.configure({
  showSpinner: false
}); // NProgress Configuration

/**
 * caso usuario tenha token valido e o tenha perdido o estado do vuex , o mesmo é restabelecido
 * @param  {} to
 * @param  {} from
 * @param  {} next
 */
export async function initCurrentUserStateMiddleware(to, from, next) {

  NProgress.start();
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)  
  if (!isAuthRoute) {
    next();
  } else if (AuthService.hasToken()
        && isNullUndefinedEmpty($store.getters["user/id"])) {
    try { 
      await $store.dispatch('user/refreshInfoUser');
      next()
    } catch (err) {
      console.warn('Middleware', err);
    }
  } else { 
    next();
  }
}

/**
 * constroi menu de acordo com as permisões  
 * @param  {} to
 * @param  {} from
 * @param  {} next
 * 
 */
export async function buildMenu(to, from, next) {
    
  if (AuthService.hasToken()){
    await $store.dispatch('user/generateMenu', routes);
  }
  next();
}

/**
 *   verifica se usuario tem acesso a pagina com base no token que está  no store  
 * @param  {} to
 * @param  {} from
 * @param  {} next
 */
export function checkAccessMiddleware(to, from, next) {
   
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)
  
  if (!isAuthRoute) next();
  else if (!$store.getters["user/id"]) {
    next({
       path :'/'
    });
    NProgress.done();
  } else {
    next();
  }
}

/**
 * verifica se usuario tem acesso a pagina com base no token que está  no store 
 * @param  {} to
 * @param  {} from
 * @param  {} next
 */
export function setPageTitleMiddleware(to, from, next) {
   
  const pageTitle = to.matched.find(item => item.meta.title)
  if (pageTitle) window.document.title = i18n.t(pageTitle.meta.title)
  next();
}

/**
 * set titulo da pagina de acordo com meta
 */
export function closeNProgress() {
  setTimeout(() => {
    NProgress.done();
  }, 500);
}