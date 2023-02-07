export const useUserStore = defineStore("user", () => {
  const config = reactive({});
  return {
    ...toRefs(config),
  };
});
