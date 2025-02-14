import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomepageVue from "@/views/Homepage.vue";
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminDashboard from "@/components/AdminDashboard.vue";
import HousesList from "@/views/HousesList.vue";
import HouseDetail from "@/views/HouseDetail.vue";
import NotFound from "@/views/NotFound.vue";
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
    children: [
      {
        path: "",
        components: {
          content: HousesList,
          AdminSidebar: AdminSidebar,
        },
      },
      {
        path: "house/:id",
        components: {
          content: HouseDetail,
          AdminSidebar: AdminSidebar,
        },
        props: {
          content: true,
        },
      },
    ],
  },
  {
    path: "/houses-list",
    name: "houses-list",
    component: HousesList,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
