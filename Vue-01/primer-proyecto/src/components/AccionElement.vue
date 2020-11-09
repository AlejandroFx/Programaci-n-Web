<template>
    <button @click="accion">{{texto}}</button>
</template>

<script>
export default {
    name: 'AccionElement',
    props: {
        texto: String
    },
    methods: {
        accion(){
            this.$emit('accion');
        }
    }
    
}
</script>

<style scoped>
    button{
        margin-left: 15px;
    }
</style>