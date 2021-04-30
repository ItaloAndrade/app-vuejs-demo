import $store from '../store'
import {
  AuthService
} from '@/services/auth.service'
import {routes} from '@/router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style



NProgress.configure({
  showSpinner: false
}); // NProgress Configuration


export async function initCurrentUserStateMiddleware(to, from, next) {
 
  $store.dispatch('user/generateRoutes',routes); /** aqui pode ser adicionado  as regras relacionado a montagem do menu */
  NProgress.start();
  if (AuthService.hasToken() && !$store.getters["user/id"]) {
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
 * Check access permission to auth routes
 */
export function checkAccessMiddleware(to, from, next) {

  const isAuthRoute = to.matched.some(item => item.meta.isAuth)

  if (!isAuthRoute) next();
  else if (!$store.getters["user/id"]) {
    next({
      name: 'SignIn'
    });
  } else {  
    next();
  }
}

export function setPageTitleMiddleware(to, from, next) {
  const pageTitle = to.matched.find(item => item.meta.title)
  if (pageTitle) window.document.title = pageTitle.meta.title
  next();
}

export function closeNProgress() {
  setTimeout(() => {
    NProgress.done();
  }, 500);
}