// import UserLayout from "@layout/userLayout/index.vue"
// import Demo from "@pages/demo/index.vue"
// import Home from "@pages/home/index.vue"
// import News from "@pages/home/news/index.vue"
// import NewsDetail from "@pages/home/news/detail/index.vue"
// import Message from "@pages/home/message/index.vue"
// import About from "@pages/about/index.vue"

export default [
  {
    path: "/userLayout",
    component: () => import("@layout/userLayout/index.vue"),
    children: [
      { path: "demo", component: () => import("@pages/demo/index.vue") },
      {
        path: "home",
        component: () => import("@pages/home/index.vue"),
        children: [
          {
            path: "news",
            component: () => import("@pages/home/news/index.vue"),
            children: [
              {
                path: "detail",
                component: () => import("@pages/home/news/detail/index.vue"),
              },
            ],
          },
          {
            path: "message",
            component: () => import("@pages/home/message/index.vue"),
          },
        ],
      },
      {
        path: "about",
        component: () => import("@pages/about/index.vue"),
      },
      {
        path: "codeManage",
        component: () => import("@pages/codeManage/index.vue"),
      },
      {
        path: "customerManage",
        component: () => import("@pages/customerManage/index.vue"),
      },
    ],
  },
]
