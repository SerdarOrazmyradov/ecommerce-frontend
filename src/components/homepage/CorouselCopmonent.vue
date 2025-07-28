<template>
  <Swiper
    :modules="[Autoplay]"
    :loop="true"
    :autoplay="{ delay: 3000 }"
    grabCursor
    class="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[344px] max-w-3xl"
  >
    <SwiperSlide
      v-for="(product, i) in slides"
      :key="i"
      @click=""
      class="px-2 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black py-3 md:py-0"
      style="box-sizing: border-box"
    >
      <router-link
        class="relative"
        :to="{ name: 'productlist', query: { categories: 'Phones' } }"
      >
        <!-- Text content -->
        <div class="mb-6 md:mb-0 text-neutral-50 mt-10">
          <div class="flex items-center justify-center md:justify-start">
            <!-- apple logo -->
            <img
              :src="'http://localhost:5173/' + image_src_logo"
              alt="Apple"
              class="w-8 h-10 sm:w-10 sm:h-12 mb-3 md:mb-0"
            />
            <p class="text-neutral-50 text-base sm:text-lg mb-2 ml-4 sm:ml-6">
              iPhone 16 Series
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
            class="inline-block text-neutral-50 text-base sm:text-lg transition-opacity relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
          >
            Shop Now →
          </div>
        </div>

        <div class="absolute top-10 right-20">
          <img
            :src="'http://localhost:5173/' + product.image"
            alt=""
            class="size-64 object-scale-down"
          /></div
      ></router-link>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Manipulation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "../../stores/stores";
import ProductList from "../../views/productlist/ProductList.vue";
import { categories } from "@vueuse/core/metadata.mjs";
const toastStore = useToast();
const image_src = ref("./hero_section/hero_endframe__cvklg0xk3w6e_large.png");
const image_src_logo = ref("/hero_section/1200px-Apple_gray_logo 1.png");
const currentIndex = ref(0);
const slides = ref([
  {
    image: "/hero_section/color_large_2x.png",
  },
  {
    image: "/hero_section/flex_magsafe_large_2x.png",
  },
  {
    image: "/hero_section/flex_applecare_large_2x.png",
  },
]); // Just as placeholders

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
