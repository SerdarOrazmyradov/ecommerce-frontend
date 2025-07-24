<template>
  <div
    class="hidden md:flex gap-3 bg-gray-100 py-2 rounded-sm items-center relative"
  >
    <input
      ref="input"
      @input="handle"
      type="text"
      name="search"
      placeholder="What are you looking for?"
      class="ml-5 md:text-base outline-none text-[#7A7A7A] w-full"
    />

    <div
      class="h-10 w-14 cursor-pointer md:ml-6 md:mr-3 flex items-center justify-center rounded-sm hover:bg-gray-200"
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="products.length > 0"
        class="absolute top-15 z-[15] flex flex-col gap-2 rounded-sm bg-white w-72 px-3 py-2"
      >
        <div
          @click="
            products = [];
            router.push({
              name: 'product_details',
              params: { id: product.id },
            });
          "
          v-for="(product, index) in products"
          :key="index"
          class="flex gap-3 cursor-pointer py-2 px-3 rounded hover:bg-gray-200"
        >
          <img
            class="size-10"
            :src="IMAGE_BASE_URL + product.main_image"
            alt="searched product image"
          />
          <div>{{ product.name }}</div>
        </div>
      </div>
      <div
        v-else-if="searchEmptyMessage"
        class="absolute select-none top-15 z-[15] flex flex-col gap-2 rounded-sm bg-white w-72 px-3 py-2"
      >
        <div
          class="flex items-center gap-3 cursor-pointer py-2 px-3 rounded hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-red-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div class="text-red-400">Product tapylmady</div>
        </div>
        <!-- <div
          @click="
            products = [];
            router.push({
              name: 'product_details',
              params: { id: product.id },
            });
          "
          v-for="(product, index) in products"
          :key="index"
          class="flex gap-3 cursor-pointer py-2 px-3 rounded hover:bg-gray-200"
        >
          <img
            class="size-10"
            :src="IMAGE_BASE_URL + product.main_image"
            alt="searched product image"
          />
          <div>{{ product.name }}</div>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useDebounceFn } from "@vueuse/core";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const products = ref([]);
const input = ref(null);
const showSearchDropdown = ref(false);
const searchEmptyMessage = computed(() => {
  return (
    showSearchDropdown.value &&
    products.value.length === 0 &&
    input.value?.value !== ""
  );
});

const BASE_URL = "http://localhost:3000";
const IMAGE_BASE_URL = "http://localhost:3000/uploads/images/";

const debounceFn = useDebounceFn((event) => {
  const query = event.target.value;
  if (!query.trim()) {
    // showSearchDropdown
    products.value = [];
    return;
  }
  fetch(
    BASE_URL + "/guest/api/get-products" + "?name=" + encodeURIComponent(query),
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
      console.log(data);
      if (data.success) {
        showSearchDropdown.value = true;
        products.value = data.data;
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
}, 300);
const handle = (event) => {
  debounceFn(event);
  console.log("event.target.value", event.target.value);
};

watch(
  () => route.name,
  (newVal) => {
    if (newVal === "product_details") input.value.focus();
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
