import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [],
    topRated: [],
    pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    filmById:{},
    searchFilms:[]
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
    },
    SET_SEARCH_LIST:(state,filmList)=>{
      filmList.forEach(e=>{
        state.searchFilms.push(e)
      })
     
    },
    CLEAR_SEARCH:(state)=>{
      state.searchFilms = []
    },
    CHANGE_PAGIN:(state,page)=>{
      let paginLastNumb = state.pagination[state.pagination.length-1]
      let paginFirstNumb = state.pagination[0]
      if (page > state.pagination[6]){
        state.pagination.splice(9,0,paginLastNumb+1,paginLastNumb+2,paginLastNumb+3)
        state.pagination.splice(0,3)
      }
      if (page > 3){
        if (page <= state.pagination[3]){
          state.pagination.splice(6,3)
        state.pagination.splice(0,0,paginFirstNumb-3,paginFirstNumb-2,paginFirstNumb-1)
        }
      }
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
      commit("CHANGE_PAGIN", page)
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
    },
    SEARCH_FILM({commit},value){
      return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3d443aa4cf7777bb16b68b2da9b40f93&language=ru-RU&query=${value}&page=1&include_adult=false`)
      .then(res=>{
        commit("SET_SEARCH_LIST", res.data.results)
      })
    },
    CLEAR_SEARCH_LIST({commit}){
      commit("CLEAR_SEARCH")
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
    },
    SEARCH_FILM_STATE(state){
      return state.searchFilms
    }
  },
  modules: {
  }
})