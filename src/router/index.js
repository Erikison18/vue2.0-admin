import VueRouter from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import Login from "@pages/login/index.vue"
import NotFound from "@pages/notFound/index.vue"
import userRouter from "./user.router"

let routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "*", component: NotFound },
]

routes = routes.concat(userRouter)

const router = new VueRouter({
  routes: routes,
})

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  NProgress.start()
  if (to.path === "/about") {
    // 鉴权
    next()
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
