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
            Today's
          </div>
        </div>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
        >
          Flash Sales
        </h2>
      </div>

      <!-- Countdown Timer -->
      <div class="flex items-end gap-1 sm:gap-2 md:gap-4">
        <div class="text-center">
          <div class="text-xs sm:text-sm font-medium">Days</div>
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold">
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
          <div class="text-xs sm:text-sm font-medium">Hours</div>
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold">
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
          <div class="text-xs sm:text-sm font-medium">Minutes</div>
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold">
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
          <div class="text-xs sm:text-sm font-medium">Seconds</div>
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold">
            {{ timer.seconds }}
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div class="flex gap-2 sm:gap-3">
        <button
          aria-label="Previous products"
          class="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom-prev-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 sm:w-6 sm:h-6"
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
          class="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F5] rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors custom-next-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 sm:w-6 sm:h-6"
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
    <div class="px-2 sm:px-4">
      <Swiper
        :slides-per-view="1.2"
        :space-between="10"
        @swiper="onSwiperInit"
        :breakpoints="{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        }"
        :navigation="{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }"
        :modules="[Navigation, Manipulation]"
      >
        <SwiperSlide v-for="(product, i) in products" :key="i">
          <!-- <ProductCard :product="product" :discount="product.discount" /> -->
          <ProductCard :product="product" :discount="product.discount" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- View All Button -->
    <div class="mt-10 sm:mt-12 md:mt-16 text-center">
      <button
        @click="
          router.replace({
            name: 'productlist',
          })
        "
        aria-label="View All Flash Sale Products"
        class="bg-[#DB4444] text-white px-8 sm:px-10 py-3 sm:py-4 cursor-pointer rounded-md text-sm sm:text-base font-medium hover:bg-[#C13333] transition-colors"
      >
        View All Products
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
// import ProductCard from "../homepage/ProductCart.vue";
import ProductCard from "../../components/product/ProductCard.vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const BASE_URL = "http://localhost:3000/";

function onSwiperInit(swiper) {
  swiper.navigation.init();
  swiper.navigation.update();
}

// Countdown
const timer = ref({ days: "03", hours: "23", minutes: "59", seconds: "56" });

// const startCountdown = () => {
//   setInterval(() => {
//     const target = new Date();
//     target.setHours(target.getHours() + 24);
//     const now = new Date();
//     const diff = target - now;

//     if (diff > 0) {
//       const d = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const m = Math.floor((diff / (1000 * 60)) % 60);
//       const s = Math.floor((diff / 1000) % 60);

//       timer.value = {
//         days: String(d).padStart(2, "0"),
//         hours: String(h).padStart(2, "0"),
//         minutes: String(m).padStart(2, "0"),
//         seconds: String(s).padStart(2, "0"),
//       };
//     }
//   }, 1000);
// };

// onMounted(startCountdown);

// Product list
const products = ref([
  {
    title: "HAVIT HV-G92 Gamepad",
    image: "./flash_sales_images/g92-2-500x500 1.png",
    price: 120,
    oldprice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id: 1,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: "./flash_sales_images/Frame 612.png",
    price: 960,
    oldprice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    id: 1,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: "./flash_sales_images/g27cq4-500x500 1.png",
    price: 370,
    oldprice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    id: 1,
  },
  {
    title: "S-Series Comfort Chair",
    image:
      "./flash_sales_images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    price: 375,
    oldprice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id: 1,
  },
  {
    title: "Another Product",
    image:
      "./flash_sales_images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    price: 500,
    oldprice: 700,
    discount: 28,
    rating: 4,
    reviews: 60,
    id: 1,
  },
]);
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
