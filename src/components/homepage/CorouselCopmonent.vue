<template>
  <div
    class="relative overflow-hidden w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[344px] bg-black text-white rounded-lg"
  >
    <!-- Slides container -->
    <div
      class="flex h-full transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- Slides (repeated 3 times) -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 px-2 sm:px-6 md:px-10 lg:px-16 bg-black py-6 md:py-0"
      >
        <!-- Text content -->
        <div class="text-center md:text-left mb-6 md:mb-0 flex-1 max-w-md">
          <div class="flex items-center justify-center md:justify-start">
            <img
              :src="image_src_logo"
              alt="Apple"
              class="w-8 h-10 sm:w-10 sm:h-12 mb-3 md:mb-0"
            />
            <p class="text-gray-300 text-base sm:text-lg mb-2 ml-4 sm:ml-6">
              iPhone 14 Series
            </p>
          </div>
          <h1
            class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
          >
            Up to 10%<br />off Voucher
          </h1>
          <div
            @click="showSuccessToast"
            href="#"
            class="cursor-pointer inline-block text-white text-base sm:text-lg border-b border-white hover:opacity-70 transition-opacity"
          >
            Shop Now →
          </div>
        </div>

        <!-- Image -->
        <div class="flex-1 flex justify-center">
          <img
            :src="image_src"
            alt="iPhone 14"
            class="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[496px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <div
      class="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3"
    >
      <button
        v-for="(dot, index) in slides.length"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors',
          currentIndex === index
            ? 'bg-[#DB4444]'
            : 'bg-gray-500 hover:bg-gray-400',
        ]"
        :aria-label="'Go to slide ' + (index + 1)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "../../stores/stores";
const toastStore = useToast();
const image_src = ref("./hero_section/hero_endframe__cvklg0xk3w6e_large.png");
const image_src_logo = ref("./hero_section/1200px-Apple_gray_logo 1.png");
const currentIndex = ref(0);
const slides = ref([1, 2, 3]); // Just as placeholders

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto slide logic
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 3000); // every 2 seconds
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const showSuccessToast = () => {
  toastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "success",
  });
};
</script>

<style scoped>
/* Smooth transitions */
.transition-transform {
  transition-property: transform;
}
</style>
