import {createStore} from "vuex";
import auth from './modules/auth'
import items from './modules/items'


export default createStore({
  modules: {
    auth,
    items,
  },
})