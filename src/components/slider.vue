<template >
    <div>
        <div class="slider__inner">
          
     <div class="slider__content">
                
            <div class="slider" v-for="(movie, index) in popular" :key="index">
         <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="" class="slider__img">
           
                     <article class="slider-desc">
                              <div class="container">
                    <h2>{{movie.title}}</h2>
                    <p class="desc">{{movie.overview}}</p>
                      </div>
                </article>
            </div>
           
     
  
            </div>
       
         
  <svg viewBox="0 0 256 512" width="100" title="angle-right" class="prev"  @click="$refs.carousel.goToPrev()">
  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
  <svg viewBox="0 0 256 512" width="100" title="angle-right" class="next" @click="$refs.carousel.goToNext()">
  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
        
        </div>
      
    </div>
</template>
<script>

export default {
    data(){
        return{
            topList:[]
        }
    },
  
    name:'slider',
    props:['popular'],

mounted() {
    console.log('popular props check '+this.popular)
    this.popular.forEach(e => {
        console.log('eeeee'+e)
       
    });
    console.log('toplist ' + this.topList)
},
      
}

</script>
<style lang="scss" >
@import "src/assets/styles/main";

.prev, .next{
    cursor:pointer;
    position: absolute;
    top: 50%;

   
    width: auto;
    margin-top: -22px;
    padding: 12px;
    fill: rgb(107, 0, 0);
    font-weight: bold;
    font-size: 18px;
    transition: .6s ease;
    border-radius: 0 3px 3px 0;
    
    background-color: rgba(70, 70, 70, 0.5);
}
.prev{
  
      transform: rotate(180deg) translate(0, 50%);
}
.next{
    right: 0;
      transform: translate(0, -50%);
    border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover{
    background-color: rgba(0, 0, 0, 0.8);
}
    .slider__inner{
        position: relative;
        width: 1200px;
    }
    .slider__btn{
        position: absolute;
        top: 0;

    }
    .slider{
        
        position: relative;
  
        &__content{
            display: flex;
          
        }
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