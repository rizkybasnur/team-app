import { createApp } from "vue";
import "./style.css";
import App from "./pages/App.vue";
import router from "./router.js";
import Notifications from "@kyvg/vue3-notification";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPinia } from "pinia";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ2RmFUI-T0whdU0r6gUsPlADfH4geICM",
  authDomain: "auth-e4d68.firebaseapp.com",
  projectId: "auth-e4d68",
  storageBucket: "auth-e4d68.appspot.com",
  messagingSenderId: "828812762769",
  appId: "1:828812762769:web:335087c5838d14d2202930",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.use(AOS.init());
app.use(createPinia());

app.mount("#app");
