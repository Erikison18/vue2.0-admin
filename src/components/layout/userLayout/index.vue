<template>
  <div class="user-layout">
    <MenuComponent></MenuComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from "@common/menu.vue"
export default {
  name: "UserLayout",
  components: {
    MenuComponent,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
