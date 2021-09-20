<template>
  <div class="film-item">
    <div class="film-item__wrapper">
      <div class="film-item__poster">
        <img
          :src="'https://image.tmdb.org/t/p/original/' + film.poster_path"
          alt=""
          class="fst-img"
        />
         <img
          :src="'https://image.tmdb.org/t/p/original/' + film.backdrop_path"
          alt=""
          class="adapt-img"
        />
      </div>

      <div class="film-item__desc">
        <div class="film-item__title">
          <h2>{{ film.title }}</h2>
        </div>
        <div class="film-item__txt">
          <div class="film-item__txt__desc">
         <h3>Описание:</h3>
          <p>{{ film.overview }}</p>
          </div>
       
          <div class="film-item__release">
            <h3>Дата релиза:</h3>
            <p>{{ film.release_date }}</p>
          </div>
          <div class="film-item__average">
            <h3>Оценка:</h3>
            <p>{{ film.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="film-item__btn">
      <button class="button" @click="btnClick(film.id)">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    film: { type: Object },
  },
  name: "item-films.vue",
  methods: {
    btnClick(id) {
      window.scrollTo(0, 0);
      this.$router.push({ name: "filmPage", query: { film_page: id } });
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles/main";
.film-item {
  position: relative;
  margin-top: 20px;
  background-color: #e5e5e5;
  box-shadow: 0px 0px 5px rgb(0, 0, 0);
  height: 580px;

        @include media(tablet) {
        height: 416px;
      }
        @include media(mobile) {
            height: 700px;
      }
  &__btn {
    bottom: 15px;
    right: 15px;
    position: absolute;
  }
  &__average {
    margin-top: 10px;
  }
  &__release {
    margin-top: 10px;
  }
  &__txt {
    &__desc{
 height: 200px;
 overflow-y:auto;
    }
   
    overflow: hidden;
    h3 {
      display: inline;
    }
    p {
      display: inline;
    }
    padding: 20px;
    line-height: 1.4;
  }
  &__title {
    text-align: center;
    margin-top: 10px;
    h2{
        @include media(tablet) {
        font-size: 24px;
      }
    }
  }
  &__desc {
    flex-grow: 1;
  }
  &__wrapper {
     @include media(mobile) {
        flex-direction: column;
      }
    display: flex;
     @include media(desktop) {
        font-size: 15px;
      }
  }
  &__poster {
     
    flex-shrink: 0;
    img {
      width: 390px;
      height: 580px;
      
            @include media(tablet) {
        width: 280px;
        height: 416px;
      }
      @include media(mobile) {
            width: 100%;
            height: auto;
      }
    }
  }
  
}
.fst-img{
   @include media(mobile) {
       display: none;
      }
}
.adapt-img{
   @include media(mobile) {
       display: block;
      }
  display: none;
  
}
</style>