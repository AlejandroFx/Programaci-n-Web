<template>
    <div class="alert alert-primary" role="alert">{{titulo}}</div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props :{
        titulo: String,
        id: String
    }
}
</script>