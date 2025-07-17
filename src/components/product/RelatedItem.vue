<template>
  <!-- related item -->
  <div class="h-vh container mx-auto px-1 md:px-4 xl:px-7">
    <!-- header -->

    <div class="flex flex-col mx-auto max-w-6xl">
      <div class="flex items-center mb-[24px]">
        <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
        <div class="text-[#DB4444] text-[16px] ml-[16px]">Related Item</div>
      </div>
      <!-- swiper buttons -->
      <div class="flex-1 flex justify-end" style="align-self: flex-end">
        <div class="w-[100px] h-[46px] flex gap-[8px]">
          <!--prev button  -->
          <div
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center custom3-prev-button"
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
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center custom3-next-button"
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

    <Swiper
      :navigation="{
        nextEl: '.custom3-next-button',
        prevEl: '.custom3-prev-button',
      }"
      :slides-per-view="4"
      :space-between="30"
      :breakpoints="{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
      :modules="[Navigation, Manipulation]"
      grabCursor
      class="mx-auto max-w-6xl"
    >
      <SwiperSlide
        v-for="(product, i) in products"
        :key="i"
        class="transition duration-300 w-auto"
        style="box-sizing: border-box"
      >
        <productcard :product="product"></productcard>
      </SwiperSlide>
    </Swiper>
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
