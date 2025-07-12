import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();

// VueCookieNext.install(app); // Şu install arkaly gurmaly
app.use(router).use(pinia).mount("#app");
