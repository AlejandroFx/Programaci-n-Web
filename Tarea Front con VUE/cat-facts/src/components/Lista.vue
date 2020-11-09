<template>
    <div class="datosConjunto">
        <p class="texto">Texto: {{texto}}</p>
        <p class="tipo">Tipo:{{tipo}}</p>
        <p class="usuario">Usuario: {{usuario}}</p>
    </div>
</template>

<script>
export default {
    name: 'Lista',
    props :{
        texto: String,
        tipo: String,
        usuario: String
    }
}
</script>

<style scoped>
.datosConjunto{
   border:green 2px solid;
  margin: 20px;
}
.usuario{
    color:rgb(103, 148, 13)
}
.texto{
font-weight: 900;
}
.tipo{
font-weight: 900;
color: orangered;
}
</style>