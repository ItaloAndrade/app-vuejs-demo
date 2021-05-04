import {
  UsersService
} from '@/services/users.service';
import {
  AuthService
} from '@/services/auth.service';
import $store from '@/store'
import {
  isNullUndefinedEmpty
} from "@/infra/util";

const buildMenu = ({
  routes,
  rolesUser
}) => {
  const listWithPermisse = routes.filter((route) =>
    (!route.hidden && (route.meta.roles.includes("*") ||
      route.meta.roles.find(obj => rolesUser.includes(obj))))); /**remove todos menus sem permissão  */

  let list = [];
  /**tranforma o filhos em munu principal de acordo com regra hasSubMenu */
  listWithPermisse.map((item) => {
    if (Boolean(item.children) && /**tem ter filho */
      item.children.length && /**tem ter filho */
      !item.meta.hasSubMenu) {
      list = [...list, ...item.children]
    } else {
      list = [...list, item]
    }
  });
  return list;
}

export default {
  namespaced: true,
  state: {
    routes: [],
    user: {
      id: '',
      roles: [],
      name: '',
      email: '',
      token: '',
      avatar:  '',
    }
  },
  getters: {
    //permissionRoutes : (state)=> hasPermission(state.routes, state.role), /**verifica usuario tem acesso ao menu  */
    permissionRoutes: (state) => {
      return buildMenu({
        routes: state.routes,
        rolesUser: state.user.roles
      });
    },
    name: (state) => state.user.name,
    email: (state) => state.user.email,
    avatar: (state) => state.user.email == 'demo@gmail.com' ?  'https://avatars.githubusercontent.com/u/2882342?s=60&v=4': state.user.avatar,
    id: (state) => state.user.id
  },
  mutations: {
    SET_ROUTES: (state, payload) => (state.routes = payload),
    SET_CURRENT_USER(state, payload) {
      
      if (payload.logout) {
        state.user.id = '';
        state.user.role = '';
        state.user.name = '';
        state.user.email = '';
        state.user.token = '';
      } else {
        state.user.id = payload._id;
        state.user.role = payload.role;
        state.user.roles = payload.roles;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.token = payload.token;
      }
    },
  },
  actions: {
    login: async ({
      commit
    }, payload) => {
      try { 
        if (isNullUndefinedEmpty(payload.email) || 
        isNullUndefinedEmpty(payload.password)) {
          commit('snackbar/SHOW_MESSAGE', {
            message: 'Necessário Senha e Usuário',
            color: "pink accent-3",
            timeout: 3500
          }, {
            root: true
          })
        } else {
          const user = await AuthService.login({
            email: payload.email.trim(),
            password: payload.password
          });

          await commit('SET_CURRENT_USER', user.data);
          setTimeout(async() =>{  await $store.dispatch('favorito/get');},200);
        }
      } catch (err) {

        console.warn('[vuex.auth] Login', err);
        commit('snackbar/SHOW_MESSAGE', {
          message: err.message,
          color: "pink accent-3",
          timeout: 3500
        }, {
          root: true
        });
      }
    },
    refreshInfoUser: async ({
      commit,
    }) => {
      try {
        const user = await UsersService.getCurrent();
        const userChange = {
          ...user,
          ...{
            logout: false
          }
        } 
      
        commit('SET_CURRENT_USER', userChange);
        setTimeout(async() =>{  await $store.dispatch('favorito/get');},200);
      } catch (err) {
        console.warn('[vuex.auth] RefreshInfoUser', err);
        commit('snackbar/SHOW_MESSAGE', {
          message: err.message,
          color: "pink accent-3",
          timeout: 3500
        }, {
          root: true
        });
      }
    },
    logOut: async ({
      commit
    }) => {
      try {
        AuthService.logout();
        await commit('SET_CURRENT_USER', {});
        await $store.dispatch('favorito/clean');
      } catch (err) {
        console.warn('[vuex.user] LogOut', err);
      }
    },
    setInfoUser(commit, {
      item
    }) { 
      commit('SET_CURRENT_USER', item);
    },
    register: async ({
      commit,
    }, payload) => {
      try {
        const response = await AuthService.register({
          email: payload.email.trim(),
          name: payload.name.trim(),
          role: 'admin',
          status: true,
          password: payload.password,
          passwordConfirm: payload.password
        }); 
        await commit('SET_CURRENT_USER', response.data);
        setTimeout(async() =>{  await $store.dispatch('favorito/get');},200);
      } catch (err) {
        console.warn('[vuex.auth] Login', err);
        commit('snackbar/SHOW_MESSAGE', {
          message: err.message,
          color: "pink accent-3",
          timeout: 3500
        }, {
          root: true
        });
      }
    },
    generateMenu: async ({
      commit,
    }, payload) => {
      commit('SET_ROUTES', payload);
    }
  }
}