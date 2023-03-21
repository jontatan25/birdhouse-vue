import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomepageVue from "@/components/Homepage.vue";
import AdminDashboard from "@/components/AdminDashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomepageVue,
  },
  {
    path: "/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
