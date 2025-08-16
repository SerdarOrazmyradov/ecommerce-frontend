import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import "primeicons/primeicons.css"; //icons

import ClickOutsideDirective from "./directive/ClickOutsideDirective";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import LazyLoadDirective from "./directive/LazyLoadDirective";
import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import tk from "./locales/tk.json";

const app = createApp(App);
const pinia = createPinia();

const messages = {
  tk: tk,
  ru: ru,
  en: en,
};
const i18n = createI18n({
  legacy: false,
  locale: "tk",
  fallbackLocale: "tk",

  messages,
  returnObjects: true,
});

app.use(i18n);
app.directive("click-outside", ClickOutsideDirective);
app.directive("lazyload", LazyLoadDirective);
app.component("VueMagnifier", VueMagnifier);

// VueCookieNext.install(app); // Şu install arkaly gurmaly
app
  .use(router)
  // .use(Notifications)
  .use(pinia)
  .mount("#app");
