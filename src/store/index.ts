import { createPinia } from "pinia";

const store = createPinia();

export * from "./modules/permission";
export * from "./modules/user";

export default store;
