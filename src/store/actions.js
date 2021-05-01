import types from "./types";

export default {
  async fetchForecasts({ commit }, { location }) {
    commit(types.FETCHING_FORECASTS);

    fetch(
      `https://jakobweather.herokuapp.com/jakobweather-dev?address=${location}`
    )
      .then(res => {
        res.json().then(data => {
          if (data.error) {
            return commit(types.FETCH_FORECASTS_ERROR, data.error);
          }

          commit(types.FETCH_FORECASTS_SUCCESS, data);
        });
      })
      .catch(() => {
        commit(
          types.FETCH_FORECASTS_ERROR,
          "Unable To Connect To Weather Service!"
        );
      });
  }
};
