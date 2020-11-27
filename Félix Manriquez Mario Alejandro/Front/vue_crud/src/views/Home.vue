<template>
  <div class="home">
  <h1>Libros uwu</h1>
  <b-button to="/agregar-libros" variant="primary" class="float-right mb-3">Agregar</b-button>
    <Formulario :campos="campos" :items="todosLibros" />


  </div>
</template>

<script>

import Formulario from '../components/Formulario.vue'
import { mapGetters, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    Formulario
  },
   computed: {
    ...mapGetters(['todosLibros'])
  },
   methods: {
    ...mapActions(['setLibros']),
   },
  data() {
    return {
      campos: [
        { key: 'id', label: 'Id del Libro' },
        { key: 'titulo', label: 'Titulo del libro'},
        { key: 'autor', label: 'Autor'},
        { key: 'numPagina', label: 'Número de Páginas'},
        { key: 'añoPublicacion', label: 'Año de Publicacion'}
      ]
    }  
  },
  created() {
    this.setLibros();
  }
}
</script>
