<template>
  <div id="app">
    <DemoComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import DemoComponent from './components/DemoComponent.vue'

export default {
  name: 'App',
  components: {
    DemoComponent
  }
}
</script>

<style>
html,
body {
    height: 100%;
    overflow: hidden;
}
#app {
    height: 100%;
    overflow: hidden;
}
</style>
