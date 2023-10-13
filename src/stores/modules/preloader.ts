import type { ActionTree, GetterTree, MutationTree } from "vuex";

const state = {
  active: false,
}

const mutations: MutationTree<any> = {
  setActive(state, error) {
    state.active = error
  },
}

export default {
  state,
  mutations
}