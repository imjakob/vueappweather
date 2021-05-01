import types from "./types";

export default {
  [types.FETCHING_FORECASTS](state) {
    state.pending = true;
  },
  [types.FETCH_FORECASTS_SUCCESS](state, forecasts) {
    state.forecasts = forecasts;
    state.pending = false;
  },
  [types.FETCH_FORECASTS_ERROR](state, error) {
    state.pending = false;
    state.forecasts = null;
    state.error = error;
  }
};
