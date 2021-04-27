import {
  UsersService
} from '@/services/users.service';
import {
  AuthService
} from '@/services/auth.service';
import {$router} from '@/router'

export default {
  namespaced: true,
  state: {
    currentUser: {
      id: '',
      role: '',
      name: '',
      email: '',
      token: '',
    }
  },
  getters: {
    name: (state) => state.name,
    email: (state) => state.email,
    id: (state) => state.id
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {

      if (payload.logout) {
        state.id = '';
        state.role = '';
        state.name = '';
        state.email = '';
        state.token = '';
      } else {
        state.id = payload._id;
        state.role = payload.role;
        state.name = payload.name;
        state.email = payload.email;
        state.token = payload.token;
      }
    },

  },
  actions: {
    login: async ({
      commit,
    }, payload) => {
      try {
        const response = await AuthService.login({
          email: payload.email.trim(),
          password: payload.password
        });

       
        await commit('SET_CURRENT_USER', user);
        $router.push({
          name: 'Dashboard'
          , replace: true
        }).catch(() => {});

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
        await commit('SET_USER_INFO', {});
        $router.push({
          name: 'SignIn',
           replace: true
        }).catch(() => {});
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
          passwordConfirm:  payload.password
        });

         
        const user = {
          ...response.data.data,
          ...{
            token: response.data.token,
            logout: false
          }
        }
        await commit('SET_CURRENT_USER', user);
        $router.push({
          name: 'Dashboard'
          , replace: true
        }).catch(() => {});
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
  }
}