import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: modules,
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomzCuSxHEvIVo3JVL8C5lpN-8dlaQfaRlCvoxOPvnQ9R78vRNq6QdJDcUcOGIWXfkGXE&usqp=CAU',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
  },
  actions: {}
})