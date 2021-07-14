import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/newsletter-cancel",
    name: "NewsLetterCancel",
    component: () => import("../views/newsLetterCancel/newsLetterCancel.vue"),
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
