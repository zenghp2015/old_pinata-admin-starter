import type { RouteRecordRaw } from "vue-router";

export default {
  path: "/dashboard",
  name: "dashboard",
  redirect: "/dashboard/base",
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: "base",
      name: "dashboard-base",
      component: () => import("@/pages/dashboard/base/index.vue"),
    },
    {
      path: "detail",
      name: "dashboard-detail",
      component: () => import("@/pages/dashboard/detail/index.vue"),
    },
  ],
} as RouteRecordRaw;
