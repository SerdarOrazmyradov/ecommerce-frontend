<template>
  <div
    class="flex flex-col xl:flex-row mb-10 lg:mb-[140px] max-w-[1170px] mx-auto px-4 lg:px-6 xl:px-8"
  >
    <!-- Categories Sidebar -->
    <div
      class="w-full xl:w-[217px] h-auto xl:h-[344px] text-base mt-5 lg:mt-10 space-y-3.5 hidden xl:block"
    >
      <!-- categories -->
      <div
        v-for="category in categories"
        :key="category"
        class="flex justify-between items-center group cursor-pointer"
      >
        <span class="group-hover:text-[#DB4444] transition-colors">{{
          category.name
        }}</span>
        <svg
          v-if="category.subcategory"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 group-hover:text-[#DB4444] transition-colors"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

    </div>

    <!-- Vertical Divider (Desktop only) -->
    <div
      class="hidden xl:block h-[384px] w-px mx-4 bg-[#7A7A7A] opacity-50"
    ></div>

    <!-- Carousel Section -->
    <div class="mt-5 xl:mt-10 xl:ml-8 w-full">
      <CorouselComponent />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import CorouselComponent from "./CorouselCopmonent.vue";

const BASE_URL = "http://localhost:3000";
const get_categories_api = "/guest/api/categories";

const selectedCategories = ref({});
const categories = ref([
  "Woman's Fashion",
  "Man's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
]);

const getCategories = (page = 1) => {
  // isLoading.value = true;
  fetch(BASE_URL + get_categories_api + "?page=" + page, {
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
      // isLoading.value = false;
      console.log("categories " + data);
      if (data.success) {
        categories.value = data.data;
        categories.value.forEach((element) => {
          selectedCategories.value[element.name] = true;
        });
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

<style scoped>
/* Custom transitions can be added here if needed */
</style>
