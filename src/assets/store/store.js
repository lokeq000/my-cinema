import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList:[]
  },
  mutations: {
    SET_FILM_IN_MOVIE_LIST: (state,filmList)=>{
        filmList.forEach(e => {
          state.movieList.push(e)
        });
    }
  },
  actions: {
   GET_MOVIELIST_FROM_API({commit}){
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3d443aa4cf7777bb16b68b2da9b40f93&language=ru-RU&page=1&region=ru").then(res => {
        return res.data.results 
    }).then(res=>{
      commit("SET_FILM_IN_MOVIE_LIST", res)
    })
   }
  },
  getters:{
   TOP_FIVE_FILMS(state){
       return state.movieList.slice(0, 5)
   }
  },
  modules: {
  }
})