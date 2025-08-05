<template>
  <toast-component />
  <promotional_message
    v-if="route.name !== 'admin' && route.name !== 'UserProfile'"
  />
  <navbar-component
    v-if="route.name !== 'admin' && route.name !== 'UserProfile'"
  />
  <router-view />
  <footer-comonent
    v-if="route.name !== 'admin' && route.name !== 'UserProfile'"
  />
  <ScrollToTopButton />
</template>

<script setup>
import NavbarComponent from "./components/navbar/NavbarComponent.vue";
import promotional_message from "./components/promotional_message/promotional_message.vue";
import FooterComonent from "./components/footer/FooterComonent.vue";
import ToastComponent from "./components/toast/ToastComponent.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUnmounted } from "vue";
import { useLiked } from "./stores/stores";
import { Button, Galleria } from "primevue";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton.vue";
// import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { watch } from "vue";
const router = useRouter();
const route = useRoute();

const { t, locale } = useI18n({ useScope: "global" });
// const { t, locale, avaiableLocales } = VueI18n();
const startLoading = () => {
  document.body.classList.add("page-loading");
};

const stopLoading = () => {
  document.body.classList.remove("page-loading");
};

onMounted(() => {
  router.beforeEach((to, from, next) => {
    startLoading();
    next();
  });

  // Router geçiş tamam bolanda
  router.afterEach(() => {
    setTimeout(stopLoading, 1000); // biraz gijikdirme bilen pozulýar
  });

  // Sahypa ýapylmazdan öň
  window.addEventListener("beforeunload", startLoading);

  window.scrollTo({ top: 0, behavior: "smooth" });
});

onUnmounted(() => {
  window.removeEventListener("beforeunload", startLoading);
});

watch(
  () => route.path,
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
);
</script>

<style>
/* Animasiýa */
@keyframes page-load {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.page-loading::before {
  content: "";
  display: block;
  position: fixed;
  z-index: 9999;
  height: 3px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #3498db;
  animation: page-load 1s ease-out;
}

* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
