import { createStore } from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

// Vue.use(Vuex);

export const store = createStore({
  state: {
    pending: false,
    forecasts: null,
    error: null
  },
  mutations,
  actions,
  getters
});
