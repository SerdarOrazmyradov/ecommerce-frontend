<template>
  <div class="flex max-w-[1170px] mx-auto mb-[60px]">
    <!-- header -->
    <div class="flex flex-col">
      <div class="flex items-center mb-[24px]">
        <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
        <div class="text-[#DB4444] text-[16px] ml-[16px]">This Month</div>
      </div>
      <div class="flex">
        <div class="text-[36px] font-semibold leading-[1]">
          Best Selling Products
        </div>
      </div>
    </div>

    <div class="flex-1 flex justify-end" style="align-self: flex-end">
      <div
        class="w-30 sm:w-[159px] h-[56px] flex justify-center items-center rounded bg-[#DB4444]"
      >
        <div class="m-auto text-sm sm:text-[16px] font-medium text-[#FAFAFA]">
          View All
        </div>
      </div>
    </div>
  </div>

  <Swiper
    :slides-per-view="4"
    :space-between="30"
    :breakpoints="{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }"
    :modules="[Navigation, Manipulation]"
    grabCursor
    class="max-w-[1170px]"
  >
    <SwiperSlide
      v-for="(product, i) in products"
      :key="i"
      class="transition duration-300 w-auto"
      style="box-sizing: border-box; "
    >
      <product-cart :product="product" />
    </SwiperSlide>
  </Swiper>
 
  <!-- View All Button -->
  <!-- <div class="mt-[60px] text-center">
    <button
      class="bg-[#DB4444] text-[#FAFAFA] px-[48px] py-[16px] rounded text-[16px] font-medium"
    >
      View All Products
    </button>
  </div> -->
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Manipulation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCart from "./ProductCart.vue";

onMounted(() => {});

const products = ref([
  {
    title: "HAVIT HV-G92 Gamepad",
    image: "./best_selling/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id:1,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: "./best_selling/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    id:2,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: "./best_selling/gammaxx-l240-argb-1-500x500 1.png",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    id:3,
  },
  {
    title: "S-Series Comfort Chair",
    image:
      "./best_selling/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
    price: 375,
    oldPrice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id:4,
  }
]);
</script>
