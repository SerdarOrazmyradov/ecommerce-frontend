import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
// import Notifications from "notiwind";
import Slider from "primevue/slider";

import ClickOutsideDirective from "./directive/ClickOutsideDirective";

const app = createApp(App);

const pinia = createPinia();

app.directive("click-outside", ClickOutsideDirective);

app.use(PrimeVue, { unstyled: true });
app.component("Slider", Slider);

// VueCookieNext.install(app); // Şu install arkaly gurmaly
app
  .use(router)
  // .use(Notifications)
  .use(pinia)
  .mount("#app");
