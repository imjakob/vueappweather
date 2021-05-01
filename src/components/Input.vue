<template>
  <div class="input-section">
    <a-form layout="inline">
      <a-form-item>
        <a-input size="large" placeholder="Location" v-model:value="location" />
      </a-form-item>

      <a-form-item>
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          :disabled="isDisabled"
          @click="getWeather"
        >
          Search
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Input",

  computed: {
    isDisabled() {
      if (this.location.length === 0) {
        return true;
      }

      return false;
    },
  },
  data() {
    return {
      location: "",
    };
  },
  methods: {
    ...mapActions(["fetchForecasts"]),
    getWeather() {
      this.fetchForecasts({
        location: this.location,
      });
    },
  },
};
</script>

<style lang="scss" scoped="true">
.input-section {
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-input {
    margin: 0 0 10px 0;
  }
}
</style>
