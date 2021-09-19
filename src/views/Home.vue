<template>
  <div class="home">
  <v-header/>
    <div class="container">
 <slider
   :popular='TOP_FIVE_FILMS'
   />
    </div>
    <top-rated-films/>
  <pagination/>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

import Pagination from '../components/pagination.vue'
import Slider from '../components/slider.vue'
import TopRatedFilms from '../components/top-rated-films.vue'
import VHeader from '../components/v-header.vue'
// @ is an alias to /src


export default {
  components:{Slider, Pagination, TopRatedFilms, VHeader},
  name: 'Home',
  data(){
    return{
 test:[]
    }
  },
  methods:{
  
  },
  computed:{
    ...mapGetters(['TOP_FIVE_FILMS']),
  },
  mounted(){


  console.log('this.popular '+this.popular)
  }
}
</script>
