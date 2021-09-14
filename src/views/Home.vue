<template>
  <div class="home">
    <div class="container">
 <slider
   :popular='TOP_FIVE_FILMS'
   />
    </div>

  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import Slider from '../components/slider.vue'
// @ is an alias to /src


export default {
  components:{Slider},
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
