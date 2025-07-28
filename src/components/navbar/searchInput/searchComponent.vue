<template>
  <div
    class="hidden md:flex gap-3 bg-gray-100 py-2 rounded-sm items-center relative group focus-within:border transition-all duration-300 border border-gray-300 focus-within:border-blue-500 focus-within:shadow-md focus-within:bg-white"
  >
    <input
      @blur.stop="
        products = [];
        showSearchDropdown = false;
      "
      @focus="loadInitialDropdown"
      ref="input"
      @input="handle"
      type="text"
      name="search"
      :placeholder="placeholderText"
      class="group-focus-within:border-blue-500 ml-5 md:text-base outline-none text-[#7A7A7A] w-full"
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
    <!-- dropdown -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        ref="dropdownMenu"
        v-if="products.length > 0"
        class="absolute h-72 top-15 z-[15] flex flex-col gap-2 rounded-sm bg-white w-72 px-3 py-2 overflow-y-scroll snap-y snap-mandatory"
      >
        <div
          @click="
            router.push({
              name: 'product_details',
              params: { id: product.id },
            })
          "
          @click.stop="
            showSearchDropdown = false;
            products = [];
          "
          v-for="(product, index) in products"
          :key="index"
          class="flex gap-3 cursor-pointer py-2 px-3 rounded hover:bg-gray-200 snap-start snap-always"
        >
          <img
            class="size-15 object-scale-down"
            :src="'http://localhost:3000/' + product.main_image"
            alt="searched product image"
          />
          <div>{{ product.name }}</div>
        </div>
      </div>
      <div
        v-else-if="searchEmptyMessage"
        class="absolute select-none top-15 z-[15] flex flex-col gap-2 rounded-sm bg-white w-72 px-3 py-2 overflow-y-auto"
      >
        <div
          @click="
            () => {
              input.value = '';
              input.focus();
              showSearchDropdown = false;
            }
          "
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
import { onUnmounted } from "vue";
import { onMounted } from "vue";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const products = ref([]);
const input = ref(null);
const showSearchDropdown = ref(false);
const dropdownMenu = ref(null);

const placeholderText = ref("");

const scrollContainer = document.querySelector(".snap-y");
const typingText = ref("What are you looking for?");
let typingIndex = 0;
let typingInterval = null;
const searchEmptyMessage = computed(() => {
  return (
    showSearchDropdown.value &&
    products.value.length === 0 &&
    input.value?.value !== ""
  );
});

const loadInitialDropdown = () => {
  if (products.value.length > 0) {
    showSearchDropdown.value = true;
    return;
  }

  const query = "";

  fetch(BASE_URL + "/guest/api/get-products?name=" + encodeURIComponent(query))
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        showSearchDropdown.value = true;
        products.value = data.data;
      } else {
        products.value = [];
      }
    })
    .catch((err) => {
      console.error("Dropdown açylanda ýalňyşlyk: ", err);
    });
};

const startTypingEffect = () => {
  typingIndex = 0;
  placeholderText.value = "";

  typingInterval = setInterval(() => {
    if (typingIndex < typingText.value.length) {
      placeholderText.value += typingText.value[typingIndex];
      typingIndex++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        placeholderText.value = "";
        typingIndex = 0;
        startTypingEffect(); // Re-run to loop effect
      }, 1000);
    }
  }, 100); // Typing speed
};

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
    showSearchDropdown.value = false;
    products.value = [];
    // if (newVal === "product_details") input.value.focus();
  },
  { immediate: true }
);

onMounted(() => {
  startTypingEffect();

  window.addEventListener("click", (e) => {
    if (dropdownMenu.value != null) {
      if (!dropdownMenu.value.contains(e.target) && showSearchDropdown.value) {
        showSearchDropdown.value = false;
      }
    }
  });
});

onUnmounted(() => {
  clearInterval(typingInterval);
});
</script>

<style lang="scss" scoped></style>
