<template>
  <div>
      <ul>
          <h3>{{titulo}}</h3>
          <li v-for="(el, index) in elementos" :key="el.id">
              
              {{el.nombre}} 
              <span>{{el.cantidad}}</span>
                <AccionElement texto="+" @accion="aumentar(index)"/>
                <AccionElement texto="-" @accion="restar(index)"/>


          </li>
      </ul>
        <div>Cantidad total de frutas: {{sumarElementos}}</div>
  </div>
</template>

<script>
import AccionElement from './AccionElement.vue';

export default {
    name: 'ListaElementos',
    components: {
        AccionElement
    },
    props: {
        elementos: Array,
        titulo: {
            type: String,
            default: 'Mi lista'
        }
    },
    data(){
        return{
            misElementos: this.elementos
        }
       
    },
    methods: {
        aumentar(index){
            this.misElementos[index].cantidad++;
        },

        restar(index){
            this.misElementos[index].cantidad--;
        }
    },
    computed: {
        sumarElementos(){
            this.total=0;
            for(let el of this.misElementos){
                this.total= this.total + el.cantidad;
            }
            return this.total;
        }
    }

}
</script>

<style scope>
    span{
        font-weight: bold;
    }
</style>