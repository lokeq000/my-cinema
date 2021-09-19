import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [],
    topRated: [],
    pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    filmById:{}
  },
  mutations: {
    SET_FILM_IN_MOVIE_LIST: (state, filmList) => {
      filmList.forEach(e => {
        state.movieList.push(e)
      });
    },
    SET_TOP_RATED: (state, filmList) => {
      state.topRated = []
      filmList.forEach(e => {
        state.topRated.push(e)
      })
    },
    SET_FILM_BY_ID:(state,film)=>{
      state.filmById = film
    }
  },
  actions: {
    GET_MOVIELIST_FROM_API({ commit }) {
      return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3d443aa4cf7777bb16b68b2da9b40f93&language=ru-RU&page=1&region=ru").then(res => {
        return res.data.results
      }).then(res => {
        commit("SET_FILM_IN_MOVIE_LIST", res)
      })
    },
    GET_TOP_RATED_FROM_API({ commit }, page) {
      return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=3d443aa4cf7777bb16b68b2da9b40f93&language=ru-RU&page=${page}&region=ru`)
        .then(res => {
          commit("SET_TOP_RATED", res.data.results)
        })
    },
    GET_FILM_BY_ID({commit},id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3d443aa4cf7777bb16b68b2da9b40f93&language=ru-RU`)
      .then(res=>{
        console.log(res)
        commit("SET_FILM_BY_ID", res.data)
      })
    }
  },
  getters: {
    TOP_FIVE_FILMS(state) {
      return state.movieList.slice(0, 5)
    },
    PAGIN(state) {
      return state.pagination
    },
    TOP_RATED(state){
      return state.topRated
    },
    FILM_BY_ID(state){
      return state.filmById
    }
  },
  modules: {
  }
})