<template>
  <div id="app">
    <div id="nav" class="container">
      <centroActividades></centroActividades>
    </div>
  
  </div>
</template>

<script>

import centroActividades from './components/centroActividades.vue'

export default {
  name:'App',
  components: {
    centroActividades
  }
}
</script>
