<template>
  <div class="slider">
    <div class="slides">
      <div v-for="(prop, index) in forecasts[current].data" :key="index">
        <section class="first-view">
          <template v-if="current === 'daily'">
            <p>
              {{ prop.apparentTemperatureHigh }} /
              {{ prop.apparentTemperatureLow }}
              {{ " " }}
              °C
            </p>
          </template>
          <template v-else>
            <p>{{ prop.temperature }} °C</p>
          </template>

          <p>{{ prop.summary }}</p>
        </section>

        <section class="detail">
          <p>
            UV Index: <span>{{ prop.uvIndex }}</span>
          </p>
          <p>
            Wind: <span>{{ prop.windSpeed }} km/h</span>
          </p>
          <p>
            Gusts: <span>{{ prop.windGust }} km/h</span>
          </p>
          <p>
            Humidity: <span>{{ prop.humidity }} %</span>
          </p>
          <p>
            Dew Point: <span>{{ prop.dewPoint }} °C</span>
          </p>
          <p>
            Visibility: <span>{{ prop.visibility }} km</span>
          </p>
          <p>
            Cloud Cover: <span>{{ prop.cloudCover }} %</span>
          </p>
          <p>
            Pressure: <span>{{ prop.pressure }} mbar</span>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    forecasts: {
      type: Object,
      default: () => {}
    },
    current: {
      type: String,
      default: "now"
    }
  }
};
</script>

<style lang="scss" scoped="true">
.slider {
  margin: 20px 0;
  width: 70vw;
  max-width: 1200px;
  overflow: hidden;
}

.slides {
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    border: 1px solid;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  margin-right: 30px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  text-align: left;
  font-weight: 400;
  word-spacing: 4px;
  line-height: 20px;
  width: 220px;
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

  span {
    font-weight: 800;
  }
}
</style>
