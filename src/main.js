import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import store from './store'
import { Button, Row, Table, TableColumn, Menu, MenuItem, Submenu, Message, Form, FormItem, Input } from 'element-ui';
import "./assets/style/reset.less"

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Row);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message;

Vue.use(VueRouter);

let vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default vue;
