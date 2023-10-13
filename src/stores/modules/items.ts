import type {ActionTree, GetterTree, MutationTree} from "vuex";
import {getItems} from "@/app/api";


interface State {
  items: object[]
}

const state: State = {
  items: [],
  item: {},
}

const getters: GetterTree<State, any> = {
  lenItems(state: State): number {
    return state.items.length
  },
}

const mutations: MutationTree<State> = {
  setItems(state, items) {
    state.items = items
  },

  setItem(state, item) {
    state.item = item[0]
  },
}

const actions: ActionTree<State, any> = {
  async getUsers({ commit }: any, data: object) {
    return await getItems('users', data)
      .then(result => {
        commit('setItems', result.data)
        return result.data
      })
      .catch(err => console.error(err))
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}