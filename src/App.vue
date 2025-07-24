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
</template>

<script setup>
import NavbarComponent from "./components/navbar/NavbarComponent.vue";
import promotional_message from "./components/promotional_message/promotional_message.vue";
import FooterComonent from "./components/footer/FooterComonent.vue";

import ToastComponent from "./components/toast/ToastComponent.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const route = useRoute();

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style></style>
