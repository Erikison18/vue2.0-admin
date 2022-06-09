<template>
  <div class="demo">
    <div class="hide">hide</div>
    <h4>Hello World</h4>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <hr />
    <el-row>
      <el-button type="primary" @click="fetchList" :loading="loading"
        >fetchList github</el-button
      >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="login" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="avatar_url" label="头像" width="180">
          <template slot-scope="scope">
            <img style="width: 50px" :src="scope.row.avatar_url" alt="avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="url" label="地址"> </el-table-column>
      </el-table>
    </el-row>
    <hr />
    <el-button @click="fetchList2" :loading="loading2"
      >fetchList gouren</el-button
    >
    <el-table :data="tableData2" style="width: 100%">
      <el-table-column prop="name" label="话题"> </el-table-column>
      <el-table-column prop="hot" label="热度"> </el-table-column>
    </el-table>
    <p>网易云音乐热评~~:{{ commentData.name }}</p>
  </div>
</template>

<script>
import axios from "axios"
import { getRequest } from "@api"
export default {
  name: "DemoComponent",
  data: () => {
    return {
      loading: false,
      tableData: [],
      loading2: false,
      tableData2: [],
      commentData: {},
    }
  },
  methods: {
    async fetchList() {
      console.log("fetchList")
      this.loading = true
      await axios.get(`/github/search/users?q=Erikson`).then(
        (response) => {
          console.log(response)
          this.tableData = response.data.items.slice(0, 5)
          this.$message({
            message: "请求接口成功！",
            type: "success",
          })
        },
        (error) => {
          console.log(error)
        }
      )
      this.loading = false
    },
    async fetchList2() {
      console.log("fetchList2")
      this.loading2 = true
      await getRequest(`/douyinresou`).then(
        (response) => {
          console.log(response)
          this.tableData2 = response.list.slice(0, 5)
        },
        (error) => {
          console.error(error.message)
        }
      )
      this.loading2 = false
      getRequest(`/comment`).then(
        (response) => {
          this.commentData = response.data
        },
        (error) => {
          console.error(error.message)
        }
      )
    },
  },
}
</script>

<style scoped>
.demo {
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  /* background-color: #ccc; */
}
</style>
