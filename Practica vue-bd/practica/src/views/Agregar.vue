<template>
  <div>
      <h1>Agregar personas</h1>
       <b-form @submit.prevent="guardarPersona">
           <Input 
                v-model="persona.nombre"
                label="Nombre"
                placeholder="Ingrese nombre de la persona"
                id="nombre"
                class="mb-2"
                :error="erroresValidacion && !validacionNombre"
                mensajeError="El nombre es obligatorio"
           />
            <Input 
                v-model="persona.direccion"
                label="Direccion"
                placeholder="Ingrese la direccion de la persona"
                :maxlength="150"
                id="direccion"
                class="mb-2"
           />
            <Input 
                v-model="persona.telefono"
                label="Teléfono"
                placeholder="Ingrese el teléfono de la persona"
                id="telefono"
                :maxlength="10"
           />
           <b-button variant="primary" type="submit" class="float-right mt-3">
               Guardar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            persona: {
                nombre: '',
                direccion: '',
                telefono: ''
            },
            erroresValidacion: false
        }
    },
    methods: {
        ...mapActions(['crearPersona']),
        guardarPersona(){
            if(this.validacionNombre) {
                this.erroresValidacion = false;
                this.crearPersona({
                    params: this.persona,
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
        validacionNombre() {
            return (
                this.persona.nombre !== undefined &&
                this.persona.nombre.trim() !== ''
            )
        }
    }
}
</script>

<style>
</style>