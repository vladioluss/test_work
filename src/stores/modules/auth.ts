import type { ActionTree, GetterTree, MutationTree } from "vuex";
import type { User } from "@/models/user";


interface AuthState {
  user: User,
}

const state: AuthState = {
  user: {
    id: 1,
    login: 'admin',
    name: 'Пользователь',
  },
}

const getters: GetterTree<AuthState, object> = {
  username: (state) => state.user.name,
}

const mutations: MutationTree<AuthState> = {}

const actions: ActionTree<AuthState, any> = {}

export default {
  state,
  getters,
  actions,
  mutations
}