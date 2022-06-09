import { getRequest } from "@api"

export default {
  namespaced: true,
  actions: {
    async loginCommit(context, params) {
      console.log("submit!", params)
      await getRequest(`/bilibili/?uid=${params.name}`).then(
        (response) => {
          // console.log(response)
          context.commit("LOGIN_FLAG", true)
          context.commit("USER_INFO", response.data)
        },
        (error) => {
          console.error(error.message)
        }
      )
    },
  },
  mutations: {
    LOGIN_FLAG(state, value) {
      state.loginFlag = value
    },
    USER_INFO(state, value) {
      state.userInfo = value
    },
  },
  state: {
    loginFlag: false,
    userInfo: {},
  },
  getters: {},
}
