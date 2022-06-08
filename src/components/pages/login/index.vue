<template>
  <div class="login">
    <h4>Hello World Login</h4>
    <el-form class="login-form" ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'LoginComponent',
  data: ()=> {
    return {
      loading: false,
      form: {
        name: "",
        password: "",
      }
    }
  },
  computed: {
    ...mapState('login', ['loginFlag', 'userInfo']),
  },
  methods: {
    async onSubmit() {
       this.loading = true
       await this.$store.dispatch('login/loginCommit', this.form)
       this.loading = false
       console.log(this.loginFlag, this.userInfo)
       if (this.loginFlag) {
         this.$router.push("/userLayout/demo")
       }
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(./img/bg.png);
  background-size: 100% 100%;
  text-align: center;

  h4{
    margin: 100px auto;
  }

  .login-form{
    width: 400px;
    margin: 0 auto;
  }
}
</style>
