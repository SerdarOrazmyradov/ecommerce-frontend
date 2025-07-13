<template>
  <div class="mt-[71px] max-w-[1170px] mx-auto mb-[140px]">
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex items-center mb-[24px]">
          <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
          <div class="text-[#DB4444] text-[16px] ml-[16px]">Our Products</div>
        </div>
        <div class="flex">
          <div class="text-[36px] font-semibold leading-[1]">
            Explore Our Products
          </div>
        </div>
      </div>
      <!-- swiper buttons -->
      <div class="flex-1 flex justify-end" style="align-self: flex-end">
        <div class="w-[100px] h-[46px] flex gap-[8px]">
          <!--prev button  -->
          <div
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center custom2-prev-button"
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
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center custom2-next-button"
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
    <section class="mt-[60px]">
      <!-- <Swiper
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="breakpoints"
        :navigation="{
          nextEl: '.custom2-next-button',
          prevEl: '.custom2-prev-button',
        }"
        :modules="[Navigation, Manipulation]"
        grabCursor
      >
        <SwiperSlide
          v-for="(product, i) in products"
          :key="i"
          class="transition duration-300"
          style="box-sizing: border-box; width: auto"
        >
          <ProductCard :product="product" :discount="product.discount" />
        </SwiperSlide>
      </Swiper> -->
      <Swiper
        :slides-per-view="4"
        :space-between="30"
        :navigation="{
          nextEl: '.custom2-next-button',
          prevEl: '.custom2-prev-button',
        }"
        :modules="[Navigation, Manipulation]"
        grabCursor
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
        class="mt-[60px]"
      >
        <SwiperSlide
          v-for="(product, i) in products1"
          :key="i"
          class="transition duration-300"
          style="box-sizing: border-box; width: auto"
        >
          <ProductCard :product="product" :isNew="product.isNew" />
        </SwiperSlide>
      </Swiper>

      <div class="mt-[60px] text-center">
        <button
          class="bg-[#DB4444] text-[#FAFAFA] px-[48px] py-[16px] rounded text-[16px] font-medium"
        >
          View All Products
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Manipulation } from "swiper/modules";

import ProductCard from "../../components/homepage/ProductCart.vue";
import { ref } from "vue";

const products = ref([
  {
    title: "HAVIT HV-G92 Gamepad",
    image: "http://localhost:5173/our_products/71RdoeXxtrL 1.png",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id: 5,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: "http://localhost:5173/our_products/eos-250d-03-500x500 1.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    id: 6,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image:
      "http://localhost:5173/our_products/ideapad-gaming-3i-01-500x500 1.png",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    id: 7,
  },
  {
    title: "S-Series Comfort Chair",
    image:
      "http://localhost:5173/flash_sales_images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    price: 375,
    oldPrice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id: 8,
  },
]);
const products1 = ref([
  {
    isNew: true,
    title: "HAVIT HV-G92 Gamepad",
    image:
      "http://localhost:5173/our_products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id: 9,
  },
  {
    isNew: false,
    title: "AK-900 Wired Keyboard",
    image: "http://localhost:5173/our_products/Copa_Sense 1.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    id: 10,
  },
  {
    isNew: true,
    title: "IPS LCD Gaming Monitor",
    image: "http://localhost:5173/our_products/GP11_PRD3 1.png",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    id: 11,
  },
  {
    isNew: false,
    title: "S-Series Comfort Chair",
    image:
      "http://localhost:5173/our_products/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
    price: 375,
    oldPrice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id: 12,
  },
]);
</script>

<style lang="scss" scoped></style>
