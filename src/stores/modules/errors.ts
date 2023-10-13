import type { ActionTree, GetterTree, MutationTree } from "vuex";

const state = {
  error: '',
}

const mutations: MutationTree<any> = {
  setError(state, error) {
    state.error = error.message
  },
}

export default {
  state,
  mutations
}