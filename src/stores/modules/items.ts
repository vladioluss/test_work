import type {ActionTree, GetterTree, MutationTree} from "vuex";
import {getItems} from "@/app/api";


interface State {
  items: object[]
  item: object
}

const state: State = {
  item: {},
  items: [],
}

const getters: GetterTree<State, any> = {
  lenItems(state: State): number {
    return state.items.length
  },
}

const mutations: MutationTree<State> = {
  setItems(state, items): void {
    state.items = items
  },

  setItem(state, item): void {
    state.item = item[0]
  },
}

const actions: ActionTree<State, any> = {
  async getUsers({ commit }: any, data: any) {
    // Ищем по id
    const numbers =
      (String(data?.value ?? data)?.split(',') ?? [])
        .filter(el => isFinite(Number(el.trim())))

    // Ищем по username
    const users =
      (String(data?.value ?? data)?.split(',') ?? [])
        .filter(el => !isFinite(Number(el.trim())))

    // Собираем параметры поиска
    const params = [
      ...numbers.length ? [`?id=${numbers.join('&id=')}`] : [],
      ...users.length ? [`?username=${users.join('&username=')}`] : [],
    ].join('&')

    return await getItems(`users${params}`)
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