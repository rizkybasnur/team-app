import { createApp } from "vue";
import "./style.css";
import App from "./pages/App.vue";
import router from "./router.js";
import Notifications from "@kyvg/vue3-notification";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.use(AOS.init());

// app.directive("click-outside", {
//   mounted(el, binding, vnode) {
//     el.clickOutsideEvent = function (event) {
//       if (!(el === event.target || el.contains(event.target))) {
//         binding.value(event, el);
//       }
//     };
//     document.body.addEventListener("click", el.clickOutsideEvent);
//   },
//   unmounted(el) {
//     document.body.removeEventListener("click", el.clickOutsideEvent);
//   },
// });

app.mount("#app");
