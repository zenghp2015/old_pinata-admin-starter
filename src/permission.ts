import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

import router from "./router";
import { usePermissionStore, useUserStore } from "@/store";

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from) => {
  NProgress.start();
  const { whiteListRouters, asyncRoutes } = usePermissionStore();
  const { token } = useUserStore();

  if (!token) {
    if (!whiteListRouters.includes(to.path)) {
      return {
        path: "/login",
        query: { redirect: encodeURIComponent(to.fullPath) },
      };
    }
  } else {
    if (to.path === "/login") return { path: "/" };

    if (asyncRoutes && asyncRoutes.length === 0) {
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
