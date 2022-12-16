import { createStore } from 'vuex'
import user from './modules/user'
export default createStore({
  state: {
    num: 10
  },
  getters: {
    newNum: state => state.num
  },
  mutations: {
    updateNum (state) {
      state.num = 20
    }
  },
  actions: {
    updateNum (ctx) {
      setTimeout(() => {
        ctx.commit('updateNum')
      }, 1000)
    }
  },
  modules: {
    user
  }
})
