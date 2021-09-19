<template>
  <div class="film-item">
    <div class="film-item__wrapper">
      <div class="film-item__poster">
        <img
          :src="'https://image.tmdb.org/t/p/original/' + film.poster_path"
          alt=""
        />
      </div>

      <div class="film-item__desc">
        <div class="film-item__title">
          <h2>{{ film.title }}</h2>
        </div>
        <div class="film-item__txt">
          <h3>Описание: </h3>
          <p>{{ film.overview }}</p>
          <div class="film-item__release"> <h3>Дата релиза: </h3><p>{{film.release_date}}</p></div>
          <div class="film-item__average"> <h3>Оценка: </h3><p>{{film.vote_average}}</p></div>
        </div>
        
      </div>
    </div>
    <div class="film-item__btn"><button class="button" @click="btnClick(film.id)"> Подробнее</button></div>
  </div>
</template>

<script>
export default {
  props: {
    film: { type: Object },
  },
  name: "item-films.vue",
  methods:{
      btnClick(id){
        
           this.$router.push({ name: "filmPage", query: { film_page:id} });
      }
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/main";
.film-item {
    position: relative;
  margin-top: 20px;
  background-color: #e5e5e5;

  height: 580px;
  &__btn{
      bottom: 15px;
      right: 15px;
      position: absolute;
  }
  &__average{
      margin-top: 10px;
  }
  &__release{
      margin-top: 10px;
  }
  &__txt {
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
  }
  &__desc {
    flex-grow: 1;
  }
  &__wrapper {
    display: flex;
  }
  &__poster {
      flex-shrink: 0;
    img {
      width: 390px;
      height: 580px;
    }
  }
}
</style>