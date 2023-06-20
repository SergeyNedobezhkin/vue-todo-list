import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../components/views/HomeView.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("../components/views/TodoView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
