<template>
  <div>
      <label :for="id">{{label}}</label>
      <input 
        :id="id"
        :type="type"
        :value="value"
        class="form-control"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="$emit('input', $event.target.value)"
      >
      <span v-if="error" class="text-danger">{{mensajeError}}</span>
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
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        id: {
            type: String
        },
        maxlength: {
            type: [String, Number],
            default: 100
        },
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        mensajeError: {
            type: String,
            default: 'Campo obligatorio'
        },
        error: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
</style>