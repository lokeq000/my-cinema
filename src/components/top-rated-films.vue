<template>
  <div>
    <div class="container">
      <item-films
      v-for="filmItem in TOP_RATED" 
      :film="filmItem"
      :key="filmItem.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import itemFilms from "./item-films.vue";
export default {
  components: { itemFilms },
  name: "top-rated-films.vue",
  computed:{
      ...mapGetters(["TOP_RATED"])
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/main";
</style>