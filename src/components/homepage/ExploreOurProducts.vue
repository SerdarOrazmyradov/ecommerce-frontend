<template>
  <div class="mt-[71px] max-w-[1170px] mx-auto mb-[140px] px-4 sm:px-6 lg:px-8">
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex items-center mb-[24px]">
          <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
          <div class="text-[#DB4444] text-[16px] ml-[16px]">
            {{ t("ourProducts") }}
          </div>
        </div>
        <div class="flex">
          <div class="text-2xl sm:text-3xl md:text-4xl font-semibold">
            {{ t("exploreOurProducts") }}
          </div>
        </div>
      </div>
      <!-- swiper buttons -->
      <div class="flex-1 flex justify-end" style="align-self: flex-end">
        <div class="w-[100px] h-[46px] flex gap-[8px]">
          <!--prev button  -->
          <div
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom2-prev-button duration-300 active:shadow-none active:translate-y-0"
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
            class="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom2-next-button duration-300 active:shadow-none active:translate-y-0"
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
    <section class="mt-[60px] px-2 sm:px-4 !overflow-hidden">
      <Swiper
        :slides-per-view="1"
        :space-between="10"
        :navigation="{
          nextEl: '.custom2-next-button',
          prevEl: '.custom2-prev-button',
        }"
        :modules="[Navigation, Manipulation]"
        grabCursor
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
        class="mt-[60px] !overflow-visible"
      >
        <SwiperSlide
          v-for="(product, i) in products1"
          :key="i"
          style="box-sizing: border-box"
          class="!overflow-visible"
        >
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>

      <div
        @click="
          router.push({
            name: 'productlist',
            query: { page: 1, message: 'exploreourproducts' },
          })
        "
        class="mt-[60px] text-center"
      >
        <button
          class="bg-[#DB4444] hover:bg-red-300 cursor-pointer text-[#FAFAFA] px-[48px] py-[16px] rounded text-[16px] font-medium transition-all duration-300 active:shadow-none active:translate-y-0"
          style="
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
          "
        >
          {{ t("viewAllProducts") }}
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

import ProductCard from "../../components/product/ProductCard.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Message } from "primevue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

const router = useRouter();
const route = useRoute();
const BASE_URL = "http://localhost:3000";

const products = ref([
  {
    title: "HAVIT HV-G92 Gamepad",
    image: "http://localhost:5173/our_products/71RdoeXxtrL 1.png",
    price: 120,
    oldprice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id: 5,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: "http://localhost:5173/our_products/eos-250d-03-500x500 1.png",
    price: 960,
    oldprice: 1160,
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
    oldprice: 400,
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
    oldprice: 500,
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
    oldprice: 160,
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
    oldprice: 1160,
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
    oldprice: 400,
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
    oldprice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id: 12,
  },
]);

onMounted(() => {
  fetch(BASE_URL + "/guest/api/get-products", {
    method: "GET",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  })
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        products1.value = data.data;
        // redirect
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
});
</script>

<style lang="scss" scoped></style>
