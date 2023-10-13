import {createStore} from "vuex";
import auth from './modules/auth'
import items from './modules/items'
import errors from './modules/errors'
import preloader from './modules/preloader'


export default createStore({
  modules: {
    auth,
    items,
    errors,
    preloader,
  },
})