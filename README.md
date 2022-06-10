## 安装
npm install

## 开发环境启动
npm run serve

## 生产环境打包
npm run build

## 目录
├── public // index.html \
├── src // 业务相关 源码目录 \
│  ├── assets // 静态文件(css, images) \
│  ├── components // 全部组件 \
│  │  ├── common // 公用组件 \
│  │  ├── layout // 基础布局 \
│  │  └── pages // 页面 \
│  ├── request // 请求配置 \
│  ├── router // 路由 \
│  ├── store // 全局状态管理 \
│  ├── utils // 工具文件 \
│  ├── App.vue // 入口文件 \
│  └── main.js // 项目的核心文件，入口 \
├── .eslintrc.js // eslint 检查配置 \
├── .gitignore // git 忽略配置 \
├── .prettierrc // prettier 代码风格检查配置 \
├── babel.config.js // Babel的配置文件 \
├── jsconfig.json // 配置默认根路径 \
├── package-lock.json // 项目包管控文件 存放缓存数据\
├── package.json // 项目信息及依赖的配置 \
├── README.md // 项目说明书 \
└── vue.config.js // @vue-cli 配置文件 \

## vue组件中选项的顺序
```
// 例子
import MenuComponent from "@common/menu.vue" //自研的子组件或第三方组件
import NotFound from "@pages/notFound/index.vue" //自研的子组件或第三方组件
import { mapState, mapGetters, mapMutations, mapActions } from "vuex" //vuex
import { getRequest } from "@api" //api请求类,其他服务类
import { formatThousand } from "@/utils/utils"; //工具类等
import eventBus from "@/utils/eventBus"; //vue eventBus
import reportMixins from "@/mixins/reportMixins"; //复用的属性或方法
export default {
  mixins: [],
  components: {
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){},
  computed:{},
  watch:{},
  mounted(){},
  methods:{},
}
```

## 自定义配置和文档地址
@vue2.0(https://cn.vuejs.org/v2/api/).

@vue-cli5.04搭建vue2.6.14版本(https://cli.vuejs.org/config/).

element-ui(https://element.eleme.io/#/zh-CN).

axios(http://www.axios-js.com/zh-cn/docs/).

vue-router(https://v3.router.vuejs.org/zh/).

vuex(https://v3.vuex.vuejs.org/zh/).

vuex-persistedstate(https://www.npmjs.com/package/vuex-persistedstate).

eslint+prettier(https://prettier.io/docs/en/options.html)(https://blog.csdn.net/dreamingbaobei3/article/details/124643312)(https://juejin.cn/post/6844903621805473800)

nprogress顶部进度条(https://www.npmjs.com/package/nprogress)

browserslist(https://www.likecs.com/show-203537431.html)

vue最佳实践提炼和经验总结(https://article.itxueyuan.com/2Ko2Mn)
