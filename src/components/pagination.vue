<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <div
        class="pagination__item"
        v-for="(item, id) in PAGIN"
        :key="id"
        @click="pagClick(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "pagination",
  data() {
    return {
        curPage:1,
    };
  },
  computed: {
    ...mapGetters(["PAGIN"]),
  },
  methods: {
      ...mapActions(["GET_TOP_RATED_FROM_API"]),
    pagClick(i) {
      window.scrollTo(0,0)
      console.log(this.$router);
      this.$router.push({ name: "Home", query: { page: i } });
      this.curPage = this.$route.query.page
      this.GET_TOP_RATED_FROM_API(i)
    },
  },
  mounted(){
       
      this.curPage = this.$route.query.page
      this.GET_TOP_RATED_FROM_API(this.curPage)
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/main";
.pagination {
  &__wrapper {
    margin-top: 20px;
    justify-content: center;
    display: flex;
    color: white;
  }
  &__item {
    cursor: pointer;
    padding: 5px;
    border: 1px solid $black;
    margin-right: 10px;
    &:hover {
      background-color: blueviolet;
    }
  }
}
</style>