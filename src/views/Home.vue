<template>
  <div class="home">
  <v-header/>
    <div class="container">
       <p v-if="SEARCH_FILM_STATE.length > 0" style="border-bottom:1px solid blueviolet; cursor:pointer;color:blueviolet" @click="CLEAR_SEARCH_LIST()">Очистить поиск</p>
      <item-films
        v-for="filmItem in SEARCH_FILM_STATE" 
      :film="filmItem"
      :key="filmItem.id"
      />
      <div class="div-title"><h2>Полулярное</h2></div>
 <slider
   :popular='TOP_FIVE_FILMS'
   />
    </div>
    <div class="div-title"><h2>Топ фильмов</h2></div>
    <top-rated-films/>
  <pagination/>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import ItemFilms from '../components/item-films.vue'

import Pagination from '../components/pagination.vue'
import Slider from '../components/slider.vue'
import TopRatedFilms from '../components/top-rated-films.vue'
import VHeader from '../components/v-header.vue'
// @ is an alias to /src


export default {
  components:{Slider, Pagination, TopRatedFilms, VHeader, ItemFilms},
  name: 'Home',
  data(){
    return{
 test:[]
    }
  },
  methods:{
    ...mapActions(['CLEAR_SEARCH_LIST'])
  },
  computed:{
    ...mapGetters(['TOP_FIVE_FILMS',"SEARCH_FILM_STATE"]),
  },
  mounted(){


  console.log('this.popular '+this.popular)
  }
}
</script>
<style lang="scss">
.div-title{
  text-transform: uppercase;
  text-align: center; 
  color: rgb(218, 218, 218);
  margin-top: 10px;
}
</style>