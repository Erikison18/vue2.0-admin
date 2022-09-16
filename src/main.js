import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import router from "./router"
import store from "./store"
import {
  Loading,
  Button,
  Row,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Submenu,
  Message,
  Form,
  FormItem,
  Input,
  Select,
  OptionGroup,
  Option,
  DatePicker,
  RadioGroup,
  Radio,
  Upload,
  Popover,
  Dialog,
  Pagination,
  MessageBox,
} from "element-ui"
import "./assets/style/reset.less"

Vue.config.productionTip = false
Vue.use(Loading)
Vue.use(Button)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(OptionGroup)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Popover)
Vue.use(Pagination)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

// 识客码
import SCIdentificCode from "sc-identific-code";
import 'sc-identific-code/dist/sc-identific-code.css';
Vue.use(SCIdentificCode);

Vue.use(VueRouter)

let vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")

export default vue
