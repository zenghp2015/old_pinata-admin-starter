// export const useUserStore = defineStore("user", {
//   state: () => ({
//     token: localStorage.getItem("token") || "main_token",
//     count: 1,
//   }),
// });

export const useUserStore = defineStore("user", () => {
  const state = reactive({
    token: localStorage.getItem("token") || "main_token",
    count: 1,
  });

  return {
    ...toRefs(state),
  };
});
