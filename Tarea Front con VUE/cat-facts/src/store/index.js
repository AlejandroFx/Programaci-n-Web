import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Object } from 'core-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facts: [],
    aFact: Object
  },
  mutations: {
    SET_FACTS(state, facts){
      state.facts=facts
    },
    SET_FACT(state, aFact){
      state.aFact=aFact
    }
  },
  getters: {
    datos: state => {
      return state.facts.all
    },
    dato: state => {
      return state.aFact
    }
  },
  actions: {
    getFacts({commit}){
      axios.get('https://cat-fact.herokuapp.com/facts')
      .then(response =>{
      console.log(response.data);
      commit('SET_FACTS', response.data)
      })
    },
    getFactsRandom({commit}){
      axios.get('https://cat-fact.herokuapp.com/facts/random')
      .then(response =>{
      console.log(response.data);
      commit('SET_FACT', response.data)
      })
    },
    setFacts({commit}, fact){
        commit('SET_FACTS', fact)
    },
    setFact({commit}, fact){
      commit('SET_FACT', fact)
  },
  },
  modules: {
  }
})
