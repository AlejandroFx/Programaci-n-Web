<template>
  <div>
    <h1>Personas Random</h1>
    
    <hr>
    <b-button variant="success" @click="getResults()">Obtener datos</b-button>
    <hr>

      <img class="imagen" :src=datos[0].picture.large>    
   <hr>
   <div class="info">
    <p class="dato">{{datos[0].name.first}} {{datos[0].name.last}} </p>
    <p>{{datos[0].gender}}</p>
    <p>{{datos[0].email}}</p>
    <p><img class="iconos" src="https://assets.stickpng.com/images/5a4525cd546ddca7e1fcbc84.png" alt=""> {{datos[0].phone}} </p>
    <p> <img  class="iconos" src="https://img.icons8.com/ios/452/cell-phone.png" alt=""> {{datos[0].cell}}</p>
   </div>
  
 
     
  </div>
</template>

<script>

import {mapState, mapActions, mapGetters} from 'vuex'
import diseño from '../components/diseño'

export default {
  name: 'Home',
  components: {
    diseño
  },
  methods:{
    ...mapActions(['setResults', 'getResults'])
  },
  computed:{
    ...mapState(['results']),
    ...mapGetters(['datos'])
  },
  mounted(){
    this.getResults()
  }
}
</script>

<style scoped>
h1{
color: rgb(21, 102, 21);
font-weight: bold;
}
.imagen{
border-radius: 8em;
width: 150px;
}
.info{
  background-color: darkseagreen;
  width: 25%;
  margin-left: 500px;
  border-radius: 2em;
  padding-top: 20px;
   padding-bottom: 20px;
}
.dato{
  font-size: 16px;
  font-weight: bold;
}
.iconos{
  width: 30px; height: 30px;
}
</style>