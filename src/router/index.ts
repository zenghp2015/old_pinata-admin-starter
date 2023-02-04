import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const modules = import.meta.glob("./modules/*.ts", {
  eager: true,
  import: "default",
});

const importModuleRouter = function importModuleRouter() {
  const routerList: RouteRecordRaw[] = [];
  Object.keys(modules).forEach((key) => {
    const mod = modules[key] || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routerList.push(...modList);
  });
  return routerList;
};

const syncRoutes: RouteRecordRaw[] = importModuleRouter();
const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    redirect: "/dashboard/base",
  },
];

export const allRoutes = [...constantRoutes, ...syncRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
