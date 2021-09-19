<template>
  <div class="film-page">
      <div class="container">
           <div class="film-page__img"><img  :src="'https://image.tmdb.org/t/p/original/' + FILM_BY_ID.backdrop_path" alt=""></div>
           <div class="film-page__desc">
               <div class="film-page__title"><h3>Название фильма: </h3><p>{{FILM_BY_ID.title}}</p></div>
               <div class="film-page__origTitle"><h3>Оригинальное азвание фильма: </h3> <p>{{FILM_BY_ID.original_title}}</p>  </div>
               <div class="film-page__tagline"><h3>Слоган: </h3> <p>{{FILM_BY_ID.tagline}}</p></div>
               <div class="film-page__vote"><h3>Оценка: </h3> <p>{{FILM_BY_ID.vote_average}}</p></div>
               <div class="film-page__release"><h3>Дата релиза: </h3> <p>{{FILM_BY_ID.release_date}}</p></div>
               <div class="film-page__runtime"><h3>Длительность: </h3> <p>{{FILM_BY_ID.runtime}}</p></div>
               <div class="film-page__budget"><h3>Бюджет: </h3> <p>{{FILM_BY_ID.budget}}$</p></div>
               <div class="film-page__status"><h3>Статус: </h3> <p>{{FILM_BY_ID.status}}</p></div>
               <div class="film-page__orig-lang"><h3>Оригинальный язык: </h3> <p>{{FILM_BY_ID.original_language}}</p></div>
               <div class="film-page__overview"><h3>Описания: </h3> <p>{{FILM_BY_ID.overview}}</p></div>
               <div class="film-page__production_companies"><h3>Компания: </h3> <p v-for="(item,id) in FILM_BY_ID.production_companies" :key="id">{{item.name}}* </p></div>
               <div class="film-page__productiom_countries"><h3>Страна: </h3> <p v-for="(item,id) in FILM_BY_ID.production_countries" :key="id">{{item.name}}* </p></div>
           </div>
           <div class="film-page__btn"><button class="button" @click="btnClick">На главную</button></div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name:'film-page',
    data(){
        return{
            filmId:1
        }
    },
    methods:{
        ...mapActions(['GET_FILM_BY_ID']),
        btnClick(){
            this.$router.push({name:"Home"})
        }
    },
    computed:{
        ...mapGetters(['FILM_BY_ID'])
    },
    mounted(){
        this.filmId=this.$route.query.film_page
        this.GET_FILM_BY_ID(this.filmId)
    }
}
</script>

<style lang="scss">
    @import "src/assets/styles/main";
    .film-page{
        margin-top: 15px;
        line-height: 1.5;
        font-size: 18px;
        &__btn{
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
        }
        div{
            margin-top: 5px;
        }
        &__desc{
            padding: 15px;
        }
        h3{
            font-size: 15px;
        }
        &__img{
            img{
                   max-width: 100%;
            }
        }
    }
</style>