<template >
    <div>
       
            <section class="slider" v-for="(movie, index) in popular" :key="index">
                <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="">
           
                     <article class="slider-desc">
                              <div class="container">
                    <h2>{{movie.title}}</h2>
                    <p class="desc">{{movie.overview}}</p>
                      </div>
                </article>
              
            
            </section>
      
    </div>
</template>
<script>

export default {
    name:'slider',
    props:['popular'],
}
</script>
<style lang="scss" >
@import "src/assets/styles/main";
    .slider{
        position: relative;
        .slider-desc{
         background: $black;
         background: -moz-linear-gradient(top,  rgba($white,0) 0%, rgba($black,1) 100%);
         background: -webkit-linear-gradient(top,  rgba($white,0) 0%,rgba($black,1) 100%);
         background: linear-gradient(to bottom,  rgba($white,0) 0%,rgba($black,1) 100%);
         position: absolute;
         left: 0;
         right: 0;
         bottom: 0;
         color: $white;
         padding: 10px 0;

         .desc{
              line-height: 1.5;
             font-size: 16px;
                 @include media(tablet){
                 font-size: 12px;
             }
              @include media(desctop){
                 font-size: 14px;
                 line-height: 1,2;
             }
             @include media(mobile){
                 display: none;
             }
         }
        }
    }
</style>