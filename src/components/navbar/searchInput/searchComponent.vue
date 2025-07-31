<template>
  <div
    class="hidden md:flex gap-3 z-[700] bg-gray-100 py-2 rounded-sm items-center relative group transition-all duration-300 border border-gray-300 focus-within:border-blue-500 focus-within:shadow-md focus-within:bg-white"
  >
    <input
      ref="input"
      @focus="focusHandle"
      @input="handle"
      type="text"
      name="search"
      :placeholder="placeholderText"
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
        class="size-6 text-gray-500"
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
        v-if="showSearchDropdown"
        class="absolute top-15 z-[15] flex flex-col rounded-sm bg-white w-80 max-h-72 overflow-y-auto shadow-lg border border-gray-200"
      >
        <!-- products list -->
        <div v-if="products.length > 0">
          <div
            v-for="(product, index) in products"
            :key="index"
            @click="selectProduct(product)"
            class="flex gap-3 cursor-pointer py-2 px-3 hover:bg-gray-100 transition"
          >
            <img
              class="w-12 h-12 object-cover rounded"
              :src="'http://localhost:3000/' + product.main_image"
              alt="searched product image"
            />
            <div class="flex flex-col">
              <span class="text-gray-800 font-medium">{{ product.name }}</span>
              <span class="text-sm text-gray-500 truncate">
                {{ product.description || "No description" }}
              </span>
            </div>
          </div>
        </div>

        <!-- no result -->
        <div 
          @click="
            () => {
              input.value = '';
              input.focus();
              showSearchDropdown = false;
            }
          "
          v-else
          class="cursor-pointer hover:bg-gray-100 rounded flex flex-col items-center justify-center py-6 text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 mb-2 text-red-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 
                 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span class="font-medium">No results found</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useDebounceFn } from "@vueuse/core";
import { onUnmounted, onMounted, ref, watch, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const products = ref([]);
const input = ref(null);
const showSearchDropdown = ref(false);
const dropdownMenu = ref(null);

const placeholderText = ref("");
const typingText = ref("What are you looking for?");
let typingIndex = 0;
let typingInterval = null;

const BASE_URL = "http://localhost:3000";

const debounceFn = useDebounceFn((event) => {
  const query = event.target.value;

  if (!query.trim()) {
    products.value = [];
    showSearchDropdown.value = false; // açyk bolsun
    return;
  }

  fetch(BASE_URL + "/guest/api/get-products?name=" + encodeURIComponent(query))
    .then((response) => response.json())
    .then((data) => {
      showSearchDropdown.value = true;
      products.value = data.success ? data.data : [];
    })
    .catch((error) => {
      console.error("Search error: ", error);
      products.value = [];
    });
}, 300);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const focusHandle = (event) => {
  if (event.target.value) {
    showSearchDropdown.value = true;

  }
};

const handleClickOutside = (event) => {
  if (input.value && !input.value.contains(event.target)) {
    showSearchDropdown.value = false;
  }
};
const blurHandle = () => {
  console.log("Input lost focus!");

  // products = [];
  showSearchDropdown = false;
  // }, 200);
};

const handle = (event) => {
  debounceFn(event);
};

const selectProduct = (product) => {
  showSearchDropdown.value = false;
  // products.value = [];
  // input.value.value = "";
  router.push({
    name: "product_details",
    params: { id: product.id },
  });
};

watch(
  () => route.name,
  () => {
    showSearchDropdown.value = false;
    products.value = [];
  },
  { immediate: true }
);

const startTypingEffect = () => {
  typingIndex = 0;
  placeholderText.value = "";
  typingInterval = setInterval(() => {
    if (typingIndex < typingText.value.length) {
      placeholderText.value += typingText.value[typingIndex++];
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        placeholderText.value = "";
        typingIndex = 0;
        startTypingEffect();
      }, 1000);
    }
  }, 100);
};

onMounted(() => {
  startTypingEffect();
});

onUnmounted(() => {
  clearInterval(typingInterval);
});
</script>

<style scoped>
/* scrollbar stilini hakyky e-commerce ýaly etmek */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
