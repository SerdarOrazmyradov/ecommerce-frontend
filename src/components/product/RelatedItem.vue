<template>
  <!-- related item -->
  <div
    class="h-vh max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
  >
    <!-- header -->

    <div class="flex flex-col mx-auto max-w-6xl mb-10">
      <div class="flex items-center mb-[24px]">
        <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
        <div class="text-[#DB4444] text-[16px] ml-[16px]">Related Item</div>
      </div>
      <!-- swiper buttons -->
      <div class="flex-1 flex justify-end" style="align-self: flex-end">
        <div class="w-[100px] h-[46px] flex gap-[8px]">
          <!--prev button  -->
          <div
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors duration-300 custom3-prev-button active:shadow-none active:translate-y-0"
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
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors duration-300 custom3-next-button active:shadow-none active:translate-y-0"
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
        </div>
      </div>
    </div>

    <!-- swiper -->
    <div class="px-2 sm:px-4 !overflow-hidden">
      <Swiper
        :navigation="{
          nextEl: '.custom3-next-button',
          prevEl: '.custom3-prev-button',
        }"
        :slides-per-view="4"
        :space-between="30"
        slidesPerView=" 1"
        spaceBetween="10"
        :breakpoints="{
          480: {
            // 480/220 = 2.18  2*220+15=440+15 = 455
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            // 640/220 = 2.9  2*220+20=440+20 = 460
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            // 768/220 = 3.49  3*220+20+20=660+60 = 720
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            // 1024/220 = 4.64  4*220+25+25+25
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        :modules="[Navigation, Manipulation]"
        grabCursor
        class="mx-auto max-w-6xl !overflow-visible"
      >
        <SwiperSlide
          v-for="(product, i) in products"
          :key="i"
          class="transition duration-300 w-auto !overflow-visible"
          style="box-sizing: border-box"
        >
          <productcard :product="product"></productcard>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Manipulation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

import productcard from "../../components/product/ProductCard.vue";

defineProps({
  products: { type: Object },
});
</script>

<style lang="scss" scoped></style>
