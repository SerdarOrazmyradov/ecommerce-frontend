<template>
  <div
    class="mt-[60px] max-w-[1170px] mx-auto h-[1px] bg-[#B3B3B3] mb-[80px]"
  ></div>
  <div class="flex max-w-[1170px] mx-auto mb-[60px]">
    <div class="flex flex-col">
      <div class="flex items-center mb-[24px]">
        <div class="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
        <div class="text-[#DB4444] text-[16px] ml-[16px]">Categories</div>
      </div>
      <div class="flex">
        <div class="text-[36px] font-semibold leading-[1]">
          Browse By Category
        </div>
      </div>
    </div>

    <div class="flex-1 flex justify-end" style="align-self: flex-end">
      <div class="w-[100px] h-[46px] flex gap-[8px]">
        <div
          class="w-[46px] hover:bg-gray-200 cursor-pointer transition-all duration-300 h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center custom1-prev-button active:shadow-none active:translate-y-0"
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
        <div
          class="hover:bg-gray-200 cursor-pointer transition-all duration-300 w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center custom1-next-button active:shadow-none active:translate-y-0"
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
  <!-- Swiper -->
  <div class="max-w-[1170px] mx-auto">
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="5"
      :space-between="30"
      :breakpoints="{
        0: {
          slidesPerView: 2,
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
      :navigation="{
        nextEl: '.custom1-next-button',
        prevEl: '.custom1-prev-button',
      }"
    >
      <SwiperSlide
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(index)"
        class="cursor-pointer"
      >
        <router-link
          :to="{
            name: 'productlist',
            query: {
              page: 1,
              message: 'exploreourproducts',
              categories: category.name,
            },
          }"
          :class="[
            'flex flex-col items-center justify-center max-w-[170px] h-[145px] border rounded-md transition duration-300 hover:bg-[#DB4444] hover:text-white border-gray-300',
            selectedIndex === index ? ' ' : '   ',
          ]"
        >
          <div
            class="w-[56px] h-[56px] mx-auto flex items-center justify-center mt-[25px] mb-[16px]"
          >
            <i :class="[category.icon, 'text-2xl leading-[1] ']"></i>
          </div>
          <span class="text-[16px] leading-[1] mb-[24px]">{{
            category.name
          }}</span>
        </router-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Manipulation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Message } from "primevue";

const categories = ref([
  { name: "Phones", icon: "fas fa-mobile-alt" },
  { name: "Computers", icon: "fas fa-desktop" },
  { name: "SmartWatch", icon: "fas fa-clock" },
  { name: "Camera", icon: "fas fa-camera" },
  { name: "HeadPhones", icon: "fas fa-headphones" },
  { name: "Gaming", icon: "fas fa-gamepad" },
]);

const selectedIndex = ref(3);
const prevRef = ref(null);
const nextRef = ref(null);

const selectCategory = (index) => {
  selectedIndex.value = index;
};

const getCategories = (page = 1, limit = 20) => {
  // isLoading.value = true;
  fetch(
    "http://localhost:3000" +
      "/guest/api/categories" +
      "?page=" +
      page +
      "&limit=" +
      limit,
    {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }
  )
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      // isLoading.value = false;
      console.log("categories " + data);
      if (data.success) {
        categories.value = data.data;
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
};

onMounted(() => {
  getCategories();
});
</script>
