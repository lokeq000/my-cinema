89<template >
  <div>
    <div class="slider__inner">
      <carousel :per-page="1" :autoplay="true">
        <slide class="slider" v-for="(movie, index) in popular" :key="index">
          <div class="slider-btn"><button @click="btnClick(movie.id)" class="button">Подробнее</button></div>
          <div class="slider-img">
            <img
            :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path"
            alt=""
            class="slider__img"
          />
            </div>

          <article class="slider-desc">
            <div class="container">
              <h2>{{ movie.title }}</h2>
              <p class="desc">{{ movie.overview }}</p>
            </div>
          </article>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topList: [],
    };
  },
  methods:{
    btnClick(id){
       this.$router.push({ name: "filmPage", query: { film_page:id} });
    }
  },
  name: "slider",
  props: ["popular"],

  mounted() {
    console.log("popular props check " + this.popular);
    this.popular.forEach((e) => {
      console.log("eeeee" + e);
    });
    console.log("toplist " + this.topList);
  },
};
</script>
<style lang="scss" >
@import "src/assets/styles/main";

.slider-btn{
  position: absolute;
  left: 10px;
  top: 10px;
}
.slider__inner {
  
  position: relative;
  width: 100%;
}
.slider__btn {
  position: absolute;
  top: 0;
}
.slider {
  
  position: relative;
  .slider-desc {
    
    background: $black;
    background: -moz-linear-gradient(
      top,877777777777777777777777777777777777777774
      rgba($white, 0) 0%,
      rgba($black, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba($white, 0) 0%,
      rgba($black, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba($white, 0) 0%,
      rgba($black, 1) 100%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: $white;
    padding: 10px 10px;

    .desc {
      
      line-height: 1.5;
      font-size: 16px;
      @include media(tablet) {
        font-size: 12px;
      }
      @include media(desctop) {
        font-size: 14px;
        line-height: 1, 2;
      }
      @include media(mobile) {
        display: none;
      }
    }
  }
}
</style>