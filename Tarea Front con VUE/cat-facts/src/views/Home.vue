<template>
  <div class="home">
    <h1>Lista de FACTS</h1>
     <Lista v-for="fact in datos" :key="fact.id" :texto="fact.text" :tipo="fact.type" :usuario="fact.user" />
  </div>
</template>

<script>

import {mapState, mapActions, mapGetters} from 'vuex'
import Lista from '../components/Lista'

export default {
  name: 'Home',
  components: {
    Lista
  },
  methods:{
    ...mapActions(['getFacts', 'setFacts'])
  },
  computed:{
    ...mapState(['facts']),
    ...mapGetters(['datos'])
  },
  mounted(){
    this.getFacts()
  }
}
</script>


