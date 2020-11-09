<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="20px">
    <p :style="colorTotal">Mi total: {{total}}</p>
    <button @click="accionAumentar(5)">Aumentar</button>
    <h2>{{titulo}}</h2>
    <BotonDisminuir/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import BotonDisminuir from '../components/BotonDisminuir'

export default {
  name: 'Home',
  components: {
    BotonDisminuir
  },
  data() {
    return {
      titulo: 'Titulo Vuex'
    }
  },
  methods: {
    ...mapActions(['accionAumentar'])
  },
  computed: {
     ...mapState(['total']),
     colorTotal(){
       return this.total >= 100 ? {'color': 'green'} : {'color' : 'red'}
     }
  }
}
</script>
