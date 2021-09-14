<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

// @ is an alias to /src


export default {

  name: 'Home',
  methods:{
    ...mapActions(['GET_MOVIELIST_FROM_API'])
  },

  mounted(){
  this.GET_MOVIELIST_FROM_API()

  }
}
</script>
<style lang="scss">
 @import "src/assets/styles/main";
</style>
