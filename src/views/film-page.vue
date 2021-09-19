<template>
  <div class="film-page">
      <div class="container">
           <div class="film-page__img"><img  :src="'https://image.tmdb.org/t/p/original/' + FILM_BY_ID.backdrop_path" alt=""></div>
           <div class="film-page__desc">
               <div class="film-page__title"><h3>Название фильма</h3></div>
               <div class="film-page__origTitle"><h3>Название фильма</h3>  </div>
               <div class="film-page__tagline"><h3>Название фильма</h3></div>
               <div class="film-page__vote"><h3>Название фильма</h3></div>
               <div class="film-page__release"><h3>Название фильма</h3></div>
               <div class="film-page__runtime"><h3>Название фильма</h3></div>
               <div class="film-page__budget"><h3>Название фильма</h3></div>
               <div class="film-page__status"><h3>Название фильма</h3></div>
               <div class="film-page__orig-lang"><h3>Название фильма</h3></div>
               <div class="film-page__overview"><h3>Название фильма</h3></div>
               <div class="film-page__production_companies"><h3>Название фильма</h3></div>
               <div class="film-page__productiom_countries"><h3>Название фильма</h3></div>
           </div>
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
        ...mapActions(['GET_FILM_BY_ID'])
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
        &__img{
         
            img{
                   max-width: 100%;
            }
        }
    }
</style>