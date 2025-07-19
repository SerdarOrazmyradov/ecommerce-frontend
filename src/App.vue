<template>
  <transition name="fade" class="fixed top-10 right-6">
    <div v-if="true">
      <div v-for="(n, i) in 3" :key="i" class="flex flex-col">
        <div
          v-show="true"
          class="transition-all py-3 px-5 duration-300 rounded-sm border border-green-400 z-50 flex items-center justify-between gap-20 bg-green-100/90 my-1"
        >
          <div class="flex items-center gap-2">
            <!-- tick icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 text-green-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <!-- text -->
            <div class="text-green-400 text-sm font-medium">
              Succesfully added to cart
            </div>
          </div>
          <!-- close icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-green-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  </transition>
  <promotional_message />
  <navbar-component />
  <router-view />
  <footer-comonent />
</template>

<script setup>
import NavbarComponent from "./components/navbar/NavbarComponent.vue";
import promotional_message from "./components/promotional_message/promotional_message.vue";
import FooterComonent from "./components/footer/FooterComonent.vue";
import { trace } from "joi";
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #44a4db;
  text-decoration: underline;
  font-weight: bold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
