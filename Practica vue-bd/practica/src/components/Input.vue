<template>
<div>
    <label :for="id">{{label}}</label>
   <input 
   :type="type"
   class="form-control"
   >
</div>   
</template>

<script>
export default {
    name: 'Input',
    props: {
        label:{
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
    }
    }
    
}

</script>


<style>
</style>