<template>
  <div class="v-header">
    <div class="container">
      <div class="v-header__wrapper">
        <div class="v-header__title"><h1>TMDB-API</h1></div>
        <div class="v-header__search">
          <input type="text" class="search" placeholder="Найти фильм..." />
          <svg viewBox="0 0 512 512" width="100" title="search" class="svg_search">
  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
</svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header",
};
</script>

<style lang="scss">
@import "src/assets/styles/main";
.v-header {
  position: relative;
  max-width: 100%;
  height: 50px;
  background-color: $black;
  margin-bottom: 20px;
  &__title {
    height: 50px;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__search{
    display: flex;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    z-index: 50;
    .search{
      width: 300px;
      height: 25px;
    }
  }
  .svg_search{
    height: 20px;
    width: 30px;
    fill: $white;
  }
}
</style>