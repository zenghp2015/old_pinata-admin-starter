export const usePermissionStore = defineStore("permission", () => {
  const state = reactive({
    whiteListRouters: ["/login"],
    asyncRoutes: [],
  });

  // actions
  async function buildAsyncRoutes() {}

  return {
    ...toRefs(state),

    buildAsyncRoutes,
  };
});
