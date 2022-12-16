const state = {
  name: 'zs'
}
const mutations = {
  getName (state) {
    state.name = 'ls'
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
