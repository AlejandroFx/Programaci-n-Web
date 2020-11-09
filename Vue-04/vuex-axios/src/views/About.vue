
<template>
<div>
<h1>El about</h1>
  <div v-for="toditos in todos" :key="toditos.id">
    <p>{{toditos.title}}</p>
  </div>
</div>
  
</template>

<script>

import {mapState, mapActions, mapGetters} from 'vuex'
export default {
name: 'Esto es el about',

methods:{
...mapActions(['getTodos'])
},
mounted(){
  this.getTodos()
},
computed: {
...mapState(['todos']),
...mapGetters(['doneTodos'])
}
}
</script>

<style>

</style>
