<template>
  <div class="v-header">
    <div class="container">
      <div class="v-header__wrapper">
        <div class="v-header__title"><h1 @click="goHome">TMDB-API</h1></div>
        <div class="v-header__search">
          <input type="text" class="search" placeholder="Найти фильм..." v-model="searchValue" />
          <svg viewBox="0 0 512 512" width="100" title="search" class="svg_search" @click="search">
  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
</svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: "v-header",
  data(){
    return{
      searchValue:""
    }
  },
  computed:{
    ...mapGetters(["SEARCH_FILM_STATE"])
  },
  methods:{
    ...mapActions(['SEARCH_FILM',"CLEAR_SEARCH_LIST"]),
    goHome(){
      this.$router.push({name:"Home"})
      this.CLEAR_SEARCH_LIST()
    },
    search(){
      this.SEARCH_FILM(this.searchValue)
    }
  },
  mounted(){
    let v = this
      document.querySelector(".search").addEventListener('keydown',function(e){
        if (e.keyCode === 13){
          v.SEARCH_FILM(v.searchValue)
        }
      })
    
  }
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
  @include media(tablet) {
         height: 100px;
      }
  &__wrapper{
      @include media(tablet) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
      }
  }
  &__title {
    height: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
      h1{
     width: 300px;
     cursor: pointer;
      @include media(tablet) {
           width: 100%;
      }
  }
  }
  &__search{
    display: flex;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    z-index: 50;
     @include media(tablet) {
      
          transform: translateX(0) translateY(0);
           position: static;
      }
    .search{
      width: 300px;
      height: 25px;
    }
  }
  .svg_search{
    height: 20px;
    width: 30px;
    fill: white;
  }
}
</style>