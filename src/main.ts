import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "nprogress/nprogress.css";

createApp(App).use(router).mount("#app");
