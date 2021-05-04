export default {
  namespaced: true,
  state: {
    message: "",
    color: "",
    timeout: "",
  },

  mutations: {
   
    SHOW_MESSAGE (state, payload) { 
      state.message = payload.message;
      state.color = payload.color;
      state.timeout = payload.timeout; 
    }
  },
  actions: {
    showSnack({ commit }, payload) {
      commit("SHOW_MESSAGE", payload);
    },
  },
}
