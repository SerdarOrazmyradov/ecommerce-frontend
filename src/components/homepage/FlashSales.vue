<template>
  <div
    class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
  >
    <!-- Header Section -->
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8"
    >
      <!-- Title Section -->
      <div class="flex flex-col">
        <div class="flex items-center mb-4 sm:mb-6">
          <div class="bg-[#DB4444] w-4 sm:w-5 h-8 sm:h-10 rounded-md"></div>
          <div class="text-[#DB4444] text-sm sm:text-base ml-3 sm:ml-4">
            {{ t("todays") }}
          </div>
        </div>
        <div
          class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
        >
          {{ t("flashSales") }}
        </div>
      </div>

      <!-- Countdown Timer -->
      <div
        class="flex items-end gap-1 sm:gap-2 md:gap-4"
        v-if="
          !(
            timer.days === '00' &&
            timer.hours === '00' &&
            timer.minutes === '00' &&
            timer.seconds === '00'
          )
        "
      >
        <div class="text-center">
          <div class="text-xs sm:text-sm font-medium">{{ t("days") }}</div>
          <div
            class="text-2xl sm:text-3xl md:text-4xl font-bold"
            style="font-variant-numeric: tabular-nums"
          >
            {{ timer.days }}
          </div>
        </div>
        <div class="flex flex-col justify-end gap-1 sm:gap-2 mb-1 sm:mb-2">
          <div
            class="rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E07575]"
          ></div>
          <div
            class="rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E07575]"
          ></div>
        </div>
        <div class="text-center">
          <div class="text-xs sm:text-sm font-medium">{{ t("hours") }}</div>
          <div
            class="text-2xl sm:text-3xl md:text-4xl font-bold"
            style="font-variant-numeric: tabular-nums"
          >
            {{ timer.hours }}
          </div>
        </div>
        <div class="flex flex-col justify-end gap-1 sm:gap-2 mb-1 sm:mb-2">
          <div
            class="rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E07575]"
          ></div>
          <div
            class="rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E07575]"
          ></div>
        </div>
        <div class="text-center">
          <div class="text-xs sm:text-sm font-medium">{{ t("minutes") }}</div>
          <div
            class="text-2xl sm:text-3xl md:text-4xl font-bold"
            style="font-variant-numeric: tabular-nums"
          >
            {{ timer.minutes }}
          </div>
        </div>
        <div class="flex flex-col justify-end gap-1 sm:gap-2 mb-1 sm:mb-2">
          <div
            class="rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E07575]"
          ></div>
          <div
            class="rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#E07575]"
          ></div>
        </div>
        <div class="text-center">
          <div class="text-xs sm:text-sm font-medium">{{ t("seconds") }}</div>
          <div
            class="text-2xl sm:text-3xl md:text-4xl font-bold"
            style="font-variant-numeric: tabular-nums"
          >
            {{ timer.seconds }}
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div class="flex gap-2 sm:gap-3">
        <button
          aria-label="Previous products"
          class="w-10 h-10 sm:w-12 sm:h-12 group bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom-prev-button duration-300 active:shadow-none active:translate-y-0"
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
            class="w-5 h-5 sm:w-6 sm:h-6 active:scale-105 group-hover:-translate-x-0.5 active:translate-y-0.5 duration-300 transition-transform active:translate-x-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          aria-label="Next products"
          class="w-10 h-10 sm:w-12 sm:h-12 group bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors duration-300 custom-next-button active:shadow-none active:translate-y-0"
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
            class="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-105 active:scale-105 group-hover:translate-x-0.5 active:translate-y-0.5 duration-300 transition-transform active:translate-x-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Products Slider -->
    <div class="px-2 sm:px-4 !overflow-hidden">
      <Swiper
        class="!overflow-visible"
        :slides-per-view="1"
        :space-between="10"
        @swiper="onSwiperInit"
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
        :navigation="{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }"
        :modules="[Navigation, Manipulation]"
      >
        <SwiperSlide
          v-for="(product, i) in products"
          :key="i"
          class="!overflow-visible"
        >
          <!-- <ProductCard :product="product" :discount="product.discount" /> -->
          <ProductCard :product="product" :discount="product.discount" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- View All Button -->
    <div class="mt-10 sm:mt-12 md:mt-16 text-center">
      <button
        @click="
          router.push({
            name: 'productlist',
            query: {
              page: 1,
              message: 'flashsales',
            },
          })
        "
        aria-label="View All Flash Sale Products"
        class="bg-[#DB4444] text-white px-8 sm:px-10 py-3 sm:py-4 cursor-pointer rounded-md text-sm sm:text-base font-medium hover:bg-[#C13333] duration-300 transition-colors active:shadow-none active:translate-y-0"
        style="
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        "
      >
        {{ t("exploreOurProducts") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Manipulation } from "swiper/modules";
import ProductCard from "../../components/product/ProductCard.vue";
import { useRoute, useRouter } from "vue-router";
import { Message } from "primevue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

const router = useRouter();
const route = useRoute();
const BASE_URL = "http://localhost:3000/";

function onSwiperInit(swiper) {
  swiper.navigation.init();
  swiper.navigation.update();
}

// Countdown

const timer = ref({ days: "00", hours: "00", minutes: "00", seconds: "00" });
let countdownInterval = null;

// 24 sagat soň gutarýan countdown üçin target wagty bir gezek hasapla
const target = new Date();
target.setHours(target.getHours() + 24, 0, 0, 0); // şu günki sagadyň soňuna çenli ýa-da 24 sagat soň

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = target - now;

    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      timer.value = {
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      };
    } else {
      timer.value = { days: "00", hours: "00", minutes: "00", seconds: "00" };
      clearInterval(countdownInterval);
    }
  }, 1000);
};

onMounted(startCountdown);

// Product list
const products = ref([]);
onMounted(() => {
  fetch(BASE_URL + "guest/api/get-products", {
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
        products.value = data.data;
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

<style scoped>
/* Custom styles if needed */
</style>
