import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
// import "primevue/resources/themes/saga-blue/theme.css"; //theme
// import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons

import Aura from "@primeuix/themes/aura";
// import Notifications from "notiwind";
import ClickOutsideDirective from "./directive/ClickOutsideDirective";
import Slider from "primevue/slider";
import Button from "primevue/button";
import Galleria from "primevue/galleria";
// import VueMagnifier from "./components/product/VueMagnifier.vue";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import LazyLoadDirective from "./directive/LazyLoadDirective";

const app = createApp(App);
const pinia = createPinia();
app.use(PrimeVue);

app.directive("click-outside", ClickOutsideDirective);
app.directive("lazyload", LazyLoadDirective);
app.component("Galleria", Galleria);
app.component("Button", Button);
app.component("Slider", Slider);
app.component("VueMagnifier", VueMagnifier);

// VueCookieNext.install(app); // Şu install arkaly gurmaly
app
  .use(router)
  // .use(Notifications)
  .use(pinia)
  .mount("#app");
