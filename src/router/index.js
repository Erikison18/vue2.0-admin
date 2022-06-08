import VueRouter from "vue-router";
import Login from "@pages/login/index.vue";
import NotFound from "@pages/notFound/index.vue";
import UserLayout from "@layout/userLayout/index.vue";
import Demo from "@pages/demo/index.vue";
import Home from "@pages/home/index.vue";
import News from "@pages/home/news/index.vue";
import NewsDetail from "@pages/home/news/detail/index.vue";
import Message from "@pages/home/message/index.vue";
import About from "@pages/about/index.vue";

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: "/login", component: Login },
    { path: "/userLayout", component: UserLayout, children: [
      { path: "demo", component: Demo },
      {
        path: "home",
        component: Home,
        children: [
          {
            path: "news",
            component: News,
            children: [{ path: "detail", component: NewsDetail }],
          },
          { path: "message", component: Message },
        ],
      },
      { path: "about", component: About },
    ]},
    { path: '*', component: NotFound },
  ],
});

// router.beforeEach((to, from, next) => {
//   // console.log(to, from)
//   if (to.path === "/about") {
//     // 鉴权
//     next()
//   } else {
//     next()
//   }
// })

export default router;
