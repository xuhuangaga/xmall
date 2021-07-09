import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartsList: localStorage.getItem('carList')
  },
  mutations: {
    setCartsList(state, data) {
      state.cartsList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
