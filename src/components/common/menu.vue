<template>
  <div class="header-menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="/userLayout/demo">Demo</el-menu-item>
      <el-submenu index="/userLayout/home">
        <template slot="title">Home</template>
        <el-menu-item index="/userLayout/home/news">News</el-menu-item>
        <el-menu-item index="/userLayout/home/message">Message</el-menu-item>
      </el-submenu>
      <el-menu-item index="/userLayout/about">About</el-menu-item>
      <el-menu-item index="/userLayout/codeManage">codeManage</el-menu-item>
      <el-menu-item index="/userLayout/customerManage">customerManage</el-menu-item>
    </el-menu>
    <span class="username">{{ userInfo.name }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MenuComponent",
  data() {
    return {
      activeIndex: "/demo",
    }
  },
  computed: {
    ...mapState("login", ["userInfo"]),
  },
  mounted() {
    console.log(this)
    this.activeIndex = this.$route.path
  },
  methods: {
    handleSelect(key) {
      // console.log(this, key, keyPath)
      this.activeIndex = key
      this.$router.push(key)
    },
  },
}
</script>

<style scoped lang="less">
.header-menu {
  position: relative;

  .username {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    color: aquamarine;
  }
}
</style>
