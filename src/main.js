import { createApp } from "vue";
import "./style.css";
import App from "./pages/App.vue";
import router from "./router.js";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.mount("#app");
