import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 声明token
    user: JSON.parse(localStorage.getItem('userInfo')) || {}
    // user: getTonken() || {}
  },
  getters: {},
  mutations: {
    setUser (state, payload) {
      state.user = payload
      // token存储在本地
      localStorage.setItem('userInfo', JSON.stringify(payload))
      // storage.set('HEIMATOKEN', payload)
      // setTonken(payload)
    }
  },
  actions: {},
  modules: {}
})
