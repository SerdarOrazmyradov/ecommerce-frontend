<template>
  <div class="relative">
    <!--prev button  -->
    <div
      class="w-[46px] h-[46px] absolute top-36 left-0 bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom4-prev-button duration-300 active:shadow-none active:translate-y-0"
      style="
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </div>
    <!-- next button -->
    <div
      class="w-[46px] h-[46px] absolute top-36 right-0 bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom4-next-button duration-300 active:shadow-none active:translate-y-0"
      style="
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
    <div class="!max-w-2xl px-15">
      <!-- Main swiper -->
      <swiper
        :loop="true"
        :space-between="10"
        :thumbs="{ swiper: thumbsSwiper }"
        :navigation="{
          nextEl: '.custom4-next-button',
          prevEl: '.custom4-prev-button',
        }"
        :modules="[Thumbs, Navigation, Manipulation]"
        class="w-full !relative"
      >
        <swiper-slide
          v-for="(image, i) in product_images"
          :key="i"
          v-lazyload
          class="!flex !justify-center !w-full !h-96"
        >
          <!-- <VueSpinner size="0" color="red" class="image__spinner" /> -->
          <img
            :data-url="getImageUrl(image.img_path)"
            alt="Product image"
            class="object-scale-down md:!object-cover"
          />
        </swiper-slide>
      </swiper>

      <!-- Thumbs swiper -->
      <swiper
        :loop="true"
        @swiper="setThumbsSwiper"
        :space-between="16"
        :slides-per-view="4"
        :free-mode="true"
        :watch-slides-progress="true"
        :modules="[FreeMode, Navigation, Thumbs]"
        class="thumbs-swiper mt-10"
      >
        <swiper-slide v-for="(image, i) in product_images" :key="i">
          <div class="cursor-pointer">
            <img
              :src="getImageUrl(image.img_path)"
              alt="Product thumbnail"
              class="size-28 md:size-40 bg-gray-100 rounded-sm object-scale-down"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Manipulation, Navigation, Thumbs } from "swiper/modules";
import { ref } from "vue";
import {
  VueSpinner,
  // ...
} from "vue3-spinners";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import VueMagnifier from "./VueMagnifier.vue";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
import ImageItem from "./ImageItem.vue";
defineProps({
  product_images: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const getImageUrl = (imagePath) => {
  return `http://localhost:3000/${imagePath}`;
};
</script>

<style scoped></style>
