<template>
  <div class="update-soon-section">
    <section>
      <h2>Thank for your visiting!</h2>
      <p>Update Soon</p>
      <img
        src="https://media.giphy.com/media/pylpD8AoQCf3CQ1oO2/giphy.gif"
        alt="ein gif"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "UpdateSoon"
};
</script>

<style lang="scss" scoped="true">
.update-soon-section {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    font-size: 1.5em;
    padding: 15px;
    box-sizing: border-box;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
