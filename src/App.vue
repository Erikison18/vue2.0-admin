<template>
  <div id="app">
    <MenuComponent></MenuComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from "@common/menu.vue"
export default {
  name: 'App',
  components: {
    MenuComponent
  },
  data() {
    return {
    }
  },
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
