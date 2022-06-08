import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import login from './modules/login'
import count from './modules/count'
import person from './modules/person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        count,
        person,
    },
    plugins: [createPersistedState({
        key: "persistedState",
        paths: ['login.loginFlag', 'login.userInfo']
    })]
})
