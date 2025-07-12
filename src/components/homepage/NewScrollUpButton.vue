<template>
  <template>
    <div
      ref="scrollTopButton"
      class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition"
    >
      <div class="text-gray-400 hover:text-blue-400 transition">
        <button @click="scrollToTop">
          <i class="text-5xl ri-arrow-up-circle-line"></i>
        </button>
      </div>
    </div>
  </template>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import "remixicon/fonts/remixicon.css";
// Import debounce:
import debounce from "lodash/debounce";

let scrollTopButton = ref(null);
let handleDebouncedScroll = ref(null);
const handleScroll = () => {
  if (window.scrollY > 0) {
    scrollTopButton.value.classList.remove("invisible");
  } else {
    scrollTopButton.value.classList.add("invisible");
  }
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  // Apply the debounce method and listener to this data property:
  handleDebouncedScroll = debounce(handleScroll, 100);
  window.addEventListener("scroll", handleDebouncedScroll);
});

onUnmounted(() => {
  // Remove listener from the debounced method instead:
  window.removeEventListener("scroll", handleDebouncedScroll);
});
</script>

<style lang="scss" scoped></style>
