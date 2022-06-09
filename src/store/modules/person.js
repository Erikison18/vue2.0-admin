import { getRequest } from "@api"

export default {
  namespaced: true,
  actions: {
    addPersonServer(context) {
      getRequest(`/yiyan/?format=text`).then(
        (response) => {
          context.commit("ADD_PERSON", {
            id: new Date().valueOf(),
            name: response,
          })
        },
        (error) => {
          console.error(error.message)
        }
      )
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value)
    },
  },
  state: {
    personList: [
      { id: "001", name: "张三" },
      { id: "002", name: "李四" },
      { id: "003", name: "王五" },
    ],
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name
    },
  },
}
