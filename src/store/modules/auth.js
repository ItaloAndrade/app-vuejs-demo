import {
  UsersService
} from '@/services/users.service';
import {
  AuthService
} from '@/services/auth.service';

export default {
  namespaced: true,
  state: {
    routes: [],
    user: {
      id: '',
      role: '',
      name: '',
      email: '',
      token: '',
    }
  },
  getters: {
    permissionRoutes: (state) => state.routes,
    name(state) {
      return state.user.name
    },
    email(state) {
      return state.user.email
    },
    id(state) {
      return state.user.id
    }
  },
  mutations: {
    SET_ROUTES: (state, payload) => {
      console.log(1)
      console.log(payload)
      state.routes = payload;
    },
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
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.token = payload.token;
      }
    },

  },
  actions: {
    login: async ({
      commit,
    }, payload) => {
      try {
        const user = await AuthService.login({
          email: payload.email.trim(),
          password: payload.password
        });

        await commit('SET_CURRENT_USER', user);

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

        const user = {
          ...response.data.data,
          ...{
            token: response.data.token,
            logout: false
          }
        }
        await commit('SET_CURRENT_USER', user);

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
    generateRoutes: async ({
      commit,
    }, payload) => {
        commit('SET_ROUTES', payload);    
    }
  }
}