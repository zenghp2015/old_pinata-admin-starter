import { createApp } from "vue";

import TDesign from "tdesign-vue-next";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import "tdesign-vue-next/es/style/index.css";
import "./assets/styles/main.less";

// import "./config";
// import "./permission";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(TDesign);

app.mount("#app");
