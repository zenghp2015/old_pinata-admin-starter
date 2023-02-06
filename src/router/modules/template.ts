import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "tpl-dashboard",
    redirect: "/dashboard/base",
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "base",
        name: "tpl-dashboard-base",
        component: () => import("@/pages/dashboard/base/index.vue"),
      },
      {
        path: "detail",
        name: "tpl-dashboard-detail",
        component: () => import("@/pages/dashboard/detail/index.vue"),
      },
    ],
  },
  {
    path: "/list",
    name: "tpl-list",
    redirect: "/list/base",
    meta: { title: "列表页", icon: "view-list" },
    children: [],
  },
  {
    path: "/form",
    name: "tpl-form",
    redirect: "/form/base",
    meta: { title: "表单页", icon: "edit-1" },
  },
  {
    path: "/detail",
    name: "tpl-detail",
    redirect: "/detail/base",
    meta: { title: "详情页", icon: "layers" },
  },
  {
    path: "/user",
    name: "tpl-user",
    redirect: "",
    children: [],
  },
];

export default routes;
