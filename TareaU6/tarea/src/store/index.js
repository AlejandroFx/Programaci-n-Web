import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Object } from 'core-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: Object,
  },
  mutations: {
    SET_RESULTS(state, results){
      state.results=results.results
    },
  },
  getters: {
    datos: state => {
      return state.results
    }
  },
  actions: {
    getResults({commit}){
      axios.get('https://randomuser.me/api')
      .then(response =>{
      console.log(response.data);
      commit('SET_RESULTS', response.data)
      })
    },
    setResults({commit}, results){
        commit('SET_RESULTS', results)
    }
  },
  modules: {
  }
})
