<template>
   <div>
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    props:{
        list: [],
        name: ''
    },
    computed: {
    ...mapGetters(['allCanciones'])
  },
  mounted() {
    this.setCanciones();
  }
}
</script>

<style>
</style>