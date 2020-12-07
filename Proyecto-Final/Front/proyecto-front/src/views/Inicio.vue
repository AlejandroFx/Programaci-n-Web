<template>
   <div>
       <h1>Inicio de Configuración Músical</h1>
       <hr>
       <h2>Seleccione el tipo de de genero de canción para su filtrado</h2>
       <hr>
       <ul class="list-group">
           <li class="list-group-item">
            <select  class="form-control" v-model="genero">
             <option  v-for="generos in allGeneros" :key="generos.id">
                 {{generos.genero}}
             </option>
            </select>
            </li>
           
           <li v-for="item in filtrar" :key="item.id" class="list-group-item">{{item.titulo}}</li>
       </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        genero: '',
    },
   
    computed: {
    ...mapGetters(['allCanciones', 'allGeneros', 'filtrados']),
    filtrar(){
    return this.allCanciones.filter((item)=> item.genero.includes(this.genero))
    }
  },
  methods: {
...mapActions(['setCanciones', 'setGeneros']),
    filtrar(genero){

    }
   
  },
  mounted() {
    this.setCanciones(),
    this.setGeneros();
  }
    
}
</script>

<style>
</style>