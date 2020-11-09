<template>
  <div class="about">
    <h1>DATO RANDOM DE ALGÚN GATO :3</h1>
    <hr>
     <button type="button" class="btn btn-primary" @click="getFactsRandom()">Buscar un dato Random</button>
    <hr>
    <p class="texto"><span class="descripcion">Texto: </span> {{dato.text}}</p>
    <p class="tipo"><span class="descripcion">Tipo: </span> {{dato.type}}</p>
    <p class="usuario"><span class="descripcion">Usuario: </span>  {{dato.user}}</p>
     
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
    ...mapActions(['setFact', 'getFactsRandom'])
  },
  computed:{
    ...mapState(['aFact']),
    ...mapGetters(['dato'])
  },
  mounted(){
    this.getFactsRandom()
  }
}
</script>

<style>
.btn btn-primary{
  margin-top: 30px;
}
h1{
  margin-top: 30px;
  font-weight: bold;
}
.usuario{
    color:rgb(103, 148, 13);
    font-weight: 900;
    
}
.texto{
font-weight: 900;
color:rgb(103, 148, 13);
}
.tipo{
font-weight: 900;
color:rgb(103, 148, 13);
}
.descripcion{
  font-style: italic;
  color: rgb(180, 132, 8);
}
</style>