<template>
  <div>
      <h1>Agregar Libros</h1>
       <b-form @submit.prevent="guardarLibro">
           <Input 
                v-model="libro.titulo"
                label="Titulo del Libro"
                placeholder="Ingrese el titulo del libro"
                :maxlength="100"
                id="titulo"
                class="mb-2"
                :error="erroresValidacion && ! validacionTituloAutor"
                mensajeError="El titulo es obligatorio"
           />
            <Input 
                v-model="libro.autor"
                label="Autor"
                placeholder="Ingrese el autor del libro"
                :maxlength="80"
                id="libro"
                class="mb-2"
                 :error="erroresValidacion && ! validacionTituloAutor"
                 mensajeError="El autor es obligatorio"
           />
            <Input 
                v-model="libro.numPagina"
                label="Número de páginas del Libro"
                placeholder="Ingrese el número de páginas"
                id="numPagina"
                :maxlength="4"
           />
           <Input 
                v-model="libro.añoPublicacion"
                label="Año de publicación del libro"
                placeholder="Ingrese el año de publicación"
                id="añoPublicacion"
                :maxlength="4"
           />
           <b-button variant="primary" type="submit" class="float-right mt-3">
               Guardar registro del libro
            </b-button>
       </b-form>
  </div>
</template>

<script>

import Input from '../components/Input'
import { mapActions } from 'vuex'
export default {
name: 'AgregarLibros',
    components: {
        Input
    },
    data() {
        return {
            libro: {
                titulo: '',
                autor: '',
                numPagina: '',
                añoPublicacion: ''
            },
            erroresValidacion: false
        }
    },
    methods: {
        ...mapActions(['crearLibro']),
        guardarLibro(){
            if(this.validacionTituloAutor) {
                this.erroresValidacion = false;
                this.crearLibro({
                    params: this.libro,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'Home'
                        })
                    },
                    onError: (error) => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje,
                        });
                    }
                })
            } else {
                this.erroresValidacion = true;
            }
        }
    },
    computed: {
        validacionTituloAutor() {
            return (
                this.libro.titulo !== undefined &&
                this.libro.titulo.trim() !== '',
                this.libro.autor !== undefined &&
                this.libro.autor.trim() !== ''
            )
        }
    }
}
</script>

<style>

</style>