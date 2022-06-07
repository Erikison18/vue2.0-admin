<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
  text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="/demo">Demo</el-menu-item>
    <el-submenu index="/home">
      <template slot="title">Home</template>
      <el-menu-item index="/home/news">News</el-menu-item>
      <el-menu-item index="/home/message">Message</el-menu-item>
    </el-submenu>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      activeIndex: '/demo',
    }
  },
  mounted() {
    this.activeIndex = this.$route.path
  },
  methods: {
    handleSelect(key) {
      // console.log(this, key, keyPath)
      this.activeIndex = key
      this.$router.push(key)
    }
  }
}
</script>

<style>
</style>
