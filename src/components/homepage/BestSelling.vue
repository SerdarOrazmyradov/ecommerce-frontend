<template>
  <div
    class="flex max-w-[1170px] mx-auto mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 lg:px-8"
  >
    <!-- header -->
    <div class="flex flex-col">
      <div class="flex items-center mb-[24px]">
        <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
        <div class="text-[#DB4444] text-sm sm:text-base ml-[16px]">
          {{ t("thisMonth") }}
        </div>
      </div>
      <div class="flex">
        <div
          class="text-2xl sm:text-3xl text-[36px] font-semibold leading-tight"
        >
          {{ t("bestSellingProducts") }}
        </div>
      </div>
    </div>

    <div class="flex-1 flex justify-end" style="align-self: flex-end">
      <div
        @click="
          router.push({
            name: 'productlist',
            query: { page: 1, message: 'bestselling' },
          })
        "
        class="w-30 sm:w-[159px] h-[56px] flex justify-center items-center rounded bg-[#DB4444] hover:bg-red-300 cursor-pointer transition-all duration-300 active:shadow-none active:translate-y-0"
        style="
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        "
      >
        <div class="m-auto text-sm sm:text-[16px] font-medium text-[#FAFAFA]">
          {{ t("viewAll") }}
        </div>
      </div>
    </div>
  </div>
  <div class="px-2 sm:px-4 !overflow-hidden">
    <Swiper
      :slides-per-view="1"
      :space-between="10"
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
      class="!overflow-visible"
    >
      <SwiperSlide
        v-for="(product, i) in products"
        :key="i"
        class="!overflow-visible"
        style="box-sizing: border-box"
      >
        <!-- <product-cart :product="product" /> -->
        <ProductCard :product="product" />
      </SwiperSlide>
    </Swiper>
  </div>
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

import ProductCard from "../../components/product/ProductCard.vue";
import { useRoute, useRouter } from "vue-router";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

const router = useRouter();
const route = useRoute();
const BASE_URL = "http://localhost:3000/";
const products = ref([]);
onMounted(() => {
  fetch(BASE_URL + "guest/api/best_selling", {
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
        products.value = data.details;

        console.log(
          "fech-lenen best selling products maglumat ",
          products.value
        );
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
