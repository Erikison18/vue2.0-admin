<template>
  <div class="list">
    <h1>list组件--人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <el-button type="primary" @click="addPerson">添加</el-button>
    <el-button type="primary" @click="addPersonServer" :loading="loading"
      >随机添加</el-button
    >
    <ul>
      <li v-for="item in personList" :key="item.id">
        {{ item.id }}---{{ item.name }}
      </li>
    </ul>
    <br />
    <h6>第一个人名是：{{ firstPersonName }}</h6>
    <h6 :style="{ color: 'red' }">上方组件求和是：{{ sum }}</h6>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "ListComponent",
  data: () => {
    return {
      name: "",
      loading: false,
    }
  },
  computed: {
    ...mapState("count", ["sum"]),
    // ...mapState('person', ['personList']),
    personList() {
      //   return this.$store.state.personList
      return this.$store.state.person.personList
    },
    firstPersonName() {
      return this.$store.getters["person/firstPersonName"]
    },
  },
  methods: {
    addPerson() {
      if (this.name) {
        this.$store.commit("person/ADD_PERSON", {
          id: new Date().valueOf(),
          name: this.name,
        })
      }
    },
    async addPersonServer() {
      this.loading = true
      await this.$store.dispatch("person/addPersonServer")
      this.loading = false
    },
  },
}
</script>

<style scoped lang="less">
.list {
  input {
    border: 2px solid #ccc;
    margin: 10px 0;
  }
}
</style>
