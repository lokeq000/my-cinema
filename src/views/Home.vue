<template>
  <div class="home">
   <slider
   :popular='popular'
   />
  </div>
</template>

<script>
import server from "@/assets/libs/server.js"
import Slider from '../components/slider.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{
      popular:[]
      
    }
  },
  created(){
   server('popular').then(data=>{
     this.popular = data.results.slice(0, 5)
   })
  },
  components: {
    Slider
  
  }
}
</script>
