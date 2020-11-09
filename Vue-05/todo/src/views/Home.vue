<template>
  <div class="home">
    <h1 class="my-4">Agregar Todo</h1>
  <form @submit="guardarTodo">
    <!--Metodo del boton en este caso Guardar-->
  <div class="form-group">
    <label for="exampleInputEmail1">Nombre</label>
    <input v-model.trim="todo.nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese nombre tarea">
     <!--v-model.trim para que no tome en cuenta los espacios al momento de escribir-->
  </div>
  <hr>
  <div>Tipos</div>
  <div class="form-check form-check-inline" >
  <input v-model="todo.tipos" class="form-check-input" type="checkbox" value="Hogar" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Hogar
  </label>
</div>
 <div class="form-check form-check-inline" >
  <input v-model="todo.tipos" class="form-check-input" type="checkbox" value="Escuela" id="defaultCheck2">
  <label class="form-check-label" for="defaultCheck2">
    Escuela
  </label>
</div>
 <div class="form-check form-check-inline" >
  <input v-model="todo.tipos" class="form-check-input" type="checkbox" value="Oficina" id="defaultCheck3">
  <label class="form-check-label" for="defaultCheck3">
    Oficina
  </label>
</div>
<hr>
<div class="form-check form-check-inline">
  <input v-model="prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">Baja</label>
</div>
<div class="form-check form-check-inline">
  <input v-model="prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">Media</label>
</div>
<div class="form-check form-check-inline">
  <input v-model="prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">Alta</label>
</div>
<hr>
<div class="form-group">
    <label for="exampleInputEmail2">Horas Trabajadas</label>
    <input v-model.number="todo.horas" type="number" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Horas trabajadas">
    <!--v-model.number para que solo deje ingresar datos numéricos-->
  </div>

  <hr>
  <button type="submit" class="btn btn-succes">Guardar</button>
  </form>
  </div>


</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      todo: {
        nombre:'',
        tipos: [],
        prioridad: '',
        horas: 0
      }
    }
  },
  methods:{
    guardarTodo(){
      console.log(this.todo);
      this.limpiarTodo();
    },
    ...mapActions(['setTodos']),
    limpiarTodo(){
      this.todos={
          nombre:'',
        tipos: [],
        prioridad: '',
        horas: 0
      }
    }
  },
  computed:{
    ...mapState(['todos'])
  }
}
</script>
