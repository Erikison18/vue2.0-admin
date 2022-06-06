import Vue from 'vue'
import App from './App.vue'
import { Button, Row, Table, TableColumn, Message } from 'element-ui';
import "./assets/style/reset.less"

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Row);
Vue.use(Table);
Vue.use(TableColumn);
Vue.prototype.$message = Message;

let vue = new Vue({
  render: h => h(App),
}).$mount('#app')

export default vue;
