import {
  UsersService
} from '@/services/users.service';
import {
  AuthService
} from '@/services/auth.service'; 



export default {
  namespaced: true,
  state: {
    user: {
      id: '',
      role: '',
      name: '',
      email: '',
      token: '',
    }
  },
  getters: { 
    name (state) {return state.user.name} ,
    email  (state)  {return state.user.email} ,
    id (state) {return state.user.id} 
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {
 // eslint-disable-next-line no-debugger
 debugger
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