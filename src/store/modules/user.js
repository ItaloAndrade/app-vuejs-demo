/* eslint-disable no-debugger */
import {
  UsersService
} from '@/services/users.service'; 



export default {
  namespaced: true,

  state: {
    currentUser: {
      id: '',
      role: '',
      name: '',
      email: ''
    }
  },

  mutations: {
    SET_CURRENT_USER(state, currentUserData) {
       debugger
      state.id = currentUserData._id;
      state.role = currentUserData.role;
      state.name = currentUserData.name;
      state.email = currentUserData.email;
    }
  },

  getters: {},

  actions: {
    getCurrent({
      commit
    }) {

      return UsersService.getCurrent()
        .then(user => commit('SET_CURRENT_USER',user))
        .catch(error => commit('snackbar/SHOW_MESSAGE', {
          message: error.message,
          color: "pink accent-3",
          timeout: 3500
        },{ root: true }));
    },
    setCurrent(commit, {
      item
    }) {
      commit('SET_CURRENT_USER', item);
    }
  }
}