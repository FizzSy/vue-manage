import Vue from "vue";
import VueRouter from "vue-router";
import axios from "../service/axios";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/index.vue"),
    children: [
      {
        path: "/home",
        component: () => import(/*webpackChunName:"home"*/ "../views/home.vue")
      },
      {
        path: "/info-show",
        name: "",
        component: () =>
          import(/* webpackChunkName: "infoShow" */ "../views/infoShow.vue")
      },
      {
        path: "/found-list",
        name: "",
        component: () =>
          import(/* webpackChunkName: "foundList" */ "../views/foundList.vue")
      }
    ]
  },
  {
    path: "/register",
    name: "",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue")
  },
  {
    path: "/login",
    name: "",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  },
  {
    path: "/404",
    name: "",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.token ? true : false;
  if (to.path === "/login" || to.path === "/register") {
    next();
  } else {
    if (isLogin) {
      next();
    } else {
      localStorage.removeItem("token");
      store.dispatch("clearCurrentState");
      next({ path: "/login" });
    }
  }
});

export default router;
