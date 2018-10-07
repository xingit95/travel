import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  // 在actions进行一些异步的操作，但这次没有，所以可以不需要actions，而是直接commit到mutations
  /*   actions: {
    changeCity (context, city) {
      // console.log(context, city)
      context.commit('changeCity', city)
    }
  }, */
  mutations: {
    changeCity (state, playload) {
      try {
        localStorage.city = playload
      } catch (e) {}
      state.city = playload
    }
  }
})
