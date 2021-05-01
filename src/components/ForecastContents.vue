<template>
  <div class="section-forecasts-content">
    <a-spin size="large" v-if="pending" />
    <template v-else-if="forecasts">
      <h2 class="location">{{ forecasts.location }}</h2>

      <section class="section-buttons">
        <button
          :class="current === 'now' ? 'active' : 'inactive'"
          @click="current = 'now'"
        >
          now
        </button>
        <button
          :class="current === 'hourly' ? 'active' : 'inactive'"
          @click="current = 'hourly'"
        >
          hourly
        </button>
        <button
          :class="current === 'daily' ? 'active' : 'inactive'"
          @click="current = 'daily'"
        >
          daily
        </button>
      </section>

      <template v-if="current === 'now'">
        <div class="forecast-currently">
          <section class="first-view">
            <p>{{ forecasts.forecast.currently.temperature }} °C</p>
            <p>{{ forecasts.forecast.currently.summary }}</p>
          </section>

          <section class="detail">
            <p>
              UV Index: <span>{{ forecasts.forecast.currently.uvIndex }}</span>
            </p>
            <p>
              Wind:{{ " " }}
              <span>{{ forecasts.forecast.currently.windSpeed }} km/h</span>
            </p>
            <p>
              Gusts:{{ " " }}
              <span>{{ forecasts.forecast.currently.windGust }} km/h</span>
            </p>
            <p>
              Humidity:{{ " " }}
              <span>{{ forecasts.forecast.currently.humidity }} %</span>
            </p>
            <p>
              Dew Point:{{ " " }}
              <span>{{ forecasts.forecast.currently.dewPoint }} °C</span>
            </p>
            <p>
              Visibility:{{ " " }}
              <span>{{ forecasts.forecast.currently.visibility }} km</span>
            </p>
            <p>
              Cloud Cover:{{ " " }}
              <span>{{ forecasts.forecast.currently.cloudCover }} %</span>
            </p>
            <p>
              Pressure:{{ " " }}
              <span>{{ forecasts.forecast.currently.pressure }} mbar</span>
            </p>
          </section>
        </div>
      </template>

      <template v-else-if="current === 'hourly'">
        <Swiper :forecasts="forecasts.forecast" :current="current" />
      </template>

      <template v-else-if="current === 'daily'">
        <Swiper :forecasts="forecasts.forecast" :current="current" />
      </template>
    </template>
    <template v-else-if="error">{{ error }}</template>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Swiper from "./Swiper";

export default {
  name: "ForecastContents",
  components: {
    Swiper,
  },
  data() {
    return {
      current: "now",
    };
  },
  computed: {
    ...mapState({
      pending: (state) => state.pending,
      forecasts: (state) => state.forecasts,
      error: (state) => state.error,
    }),
  },
};
</script>

<style lang="scss" scoped="true">
.section-forecasts-content {
  max-height: 100%;
  min-height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .location {
    font-size: 2vh;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .section-buttons {
    display: flex;
    border: 1px solid;
    justify-content: space-between;
    background-color: #fff;
    box-sizing: border-box;

    button {
      border-radius: 0px;
      text-transform: uppercase;
      padding: 15px;
      width: 96px;
      border: unset;
      background: unset;
      outline: none;
    }

    .active {
      background-color: #565656;
      color: #fff;
    }

    .inactive {
      background-color: #fff;
    }
  }

  .forecast-currently {
    font-weight: 400;
    word-spacing: 4px;
    line-height: 20px;
    background-color: #eee;
    width: 220px;
    margin: 20px 0;
    text-align: left;
    border: 1px solid;

    .first-view {
      border-bottom: 1px solid;
      padding: 5px;
      height: 126px;
    }

    .first-view > p:first-child {
      padding-bottom: 20px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
      padding-top: 10px;
    }

    .detail {
      padding: 5px;
    }

    .detail > p {
      padding-bottom: 20px;
    }

    .detail > p:first-child {
      padding-top: 10px;
    }

    .detail > p:last-child {
      padding-bottom: 10px;
    }
  }

  span {
    font-weight: 800;
  }
}
</style>
