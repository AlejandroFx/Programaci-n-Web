<template>
  <div>
 <h1>Generos Músicales</h1>
  <b-button to="/agregar-genero" variant="primary" class="float-right mb-3">Agregar Genero</b-button>
  
 
 <Tabla :campos="campos" :items="allGeneros">
    <template slot="actions" slot-scope="{ item }">
       
        <b-button
          @click="onEliminar(item)"
          variant="danger"
          class="ml-2"
        >
          Eliminar este Genero
        </b-button>
      </template>
 </Tabla>
  </div>
</template>

<script>
import Tabla from '../components/Tabla'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Genero',
  components: {
    Tabla
  },
   data() {
    return {
      campos: [
        { key: 'id', label: 'ID' },
        { key: 'genero', label: 'Genero'},
        { key: 'actions', label: 'Acciones'}
      ]
    }  
  },
  computed: {
    ...mapGetters(['allGeneros'])
  },
  methods: {
    ...mapActions(['setGeneros', 'eliminarGenero']),
    
    onEliminar(item) {
      console.log(item)
        this.$bvModal.msgBoxConfirm('Se eliminará este Genero', {
          title: '¿Esta seguro que desea eliminar?',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value) {
              this.eliminarGenero({
              genero: item.item.genero,
              onComplete: (response) => {
                  console.log(response)
                  this.$notify({
                      type: 'success',
                      title: response.data.mensaje
                  })
                  setTimeout(() => this.setGeneros(), 1000)
                },
              onError: (error) => {
                  this.$notify({
                      type: 'error',
                      title: error.response.data.mensaje
                  })
                }
            })
            }
          
          })
          .catch(err => {
          // An error occurred
          })
    }
},
mounted() {
    this.setGeneros();
  }
}
</script>
