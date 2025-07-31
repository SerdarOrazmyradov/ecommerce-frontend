<template>
  <div
    class="mt-10 flex justify-around mb-4 max-w-[1170px] mx-auto md:sticky md:top-0 md:z-500 md:bg-[#FFFFFF]"
  >
    <div
      @click="
        router.push({
          name: 'home',
        })
      "
      style="
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      "
      class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer select-none text-2xl font-bold flex items-center"
    >
      Exclusive
    </div>
    <div class="hidden text-base lg:flex lg:gap-10 xl:gap-12 items-center">
      <router-link
        :to="{ name: 'home' }"
        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
        >Home</router-link
      >
      <router-link
        :to="{
          name: 'contact',
          query: { message: 'exploreourproducts' },
        }"
        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
      >
        Contact Us
      </router-link>
      <!-- <router-link
        :to="{
          name: 'categorylist',
        }"
        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
      >
        Categories
      </router-link> -->
      <router-link
        :to="{ name: 'about' }"
        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
      >
        About
      </router-link>
      <router-link
        :to="{ name: 'signup' }"
        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
        >Sign Up</router-link
      >
      <!-- Categories with dropdown -->
      <div
        @mouseenter="showDropdown = true"
        @mouseleave="showDropdown = false"
        class=" relative py-3 group hidden  xl:hidden"
      >
        <div
          class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
        >
          Categories
        </div>

        <!-- Dropdown box -->
        <div
          v-if="showDropdown"
          class="absolute top-10 left-0 mt-2 w-[200px] bg-white text-black rounded shadow-lg p-4 z-50 hidden group-hover:block"
        >
          <div
            v-for="category in categories"
            :key="category"
            class="py-1 px-2 hover:bg-gray-100 hover:text-[#DB4444] transition-colors cursor-pointer"
          >
            {{ category.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <!-- search -->
      <SearchComponent />

      <!-- hearth -->
      <div
        @click="
          router.push({
            name: 'wishlist',
          })
        "
        class="relative cursor-pointer"
      >
        <div
          class="select-none absolute w-4 h-4 bg-red-400 -top-1 -right-1 text-neutral-50 rounded-full flex justify-center items-center text-xs"
          :class="likedProductsCount == 0 ? 'hidden' : 'flex'"
        >
          {{ likedProductsCount }}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-[32px] ml-[24px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <!-- cart -->
      <div
        @click="
          console.log('salam from  cart icon');

          router.push({
            name: 'cart',
          });
        "
        class="cursor-pointer relative"
      >
        <div
          class="select-none absolute w-4 h-4 bg-red-400 -top-1 -right-1 text-neutral-50 rounded-full flex justify-center items-center text-xs"
          :class="cartProductsCount == 0 ? 'hidden' : 'flex'"
        >
          {{ cartProductsCount }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-[32px] ml-[16px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>

      <!-- profile -->
      <NavbarProfile />

      <!-- close button -->
      <div @click="toggleMobileNavbar" class="flex lg:hidden cursor-pointer">
        <div
          class="flex flex-col justify-center items-center w-10 ml-[16px] h-8 cursor-pointer space-y-2"
        >
          <span
            :class="[
              'w-8 h-[2px] bg-black rounded transition duration-300',
              showMobileNavbar ? '  rotate-45 translate-y-3 bg-black' : '',
            ]"
          ></span>
          <span
            :class="[
              'w-8 h-[2px] bg-black rounded transition-all duration-300',
              showMobileNavbar ? 'opacity-0 bg-black' : '',
            ]"
          ></span>
          <span
            :class="[
              'w-8 h-[2px] bg-black rounded transition-transform duration-300',
              showMobileNavbar ? '-rotate-45 -translate-y-2 bg-black' : '',
            ]"
          ></span>
        </div>
      </div>
    </div>
  </div>

  <transition name="slide-fade">
    <div
      v-if="showMobileNavbar"
      class="block lg:hidden fixed inset-0 w-full h-full bg-white z-[600] overflow-y-auto"
    >
      <!-- Header with close button -->
      <div class="sticky top-0 bg-white z-10 shadow-sm">
        <div
          class="container mx-auto px-4 py-4 flex justify-between items-center"
        >
          <div class="text-xl font-bold text-gray-900">Menu</div>
          <button
            @click="toggleMobileNavbar"
            class="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Close menu"
          >
            <div class="w-6 h-6 relative">
              <span
                class="block absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="{ 'rotate-45': showMobileNavbar }"
              ></span>
              <span
                class="block absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="{ 'opacity-0': showMobileNavbar }"
              ></span>
              <span
                class="block absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="{ '-rotate-45': showMobileNavbar }"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Main content -->
      <div class="container mx-auto px-4 py-6">
        <!-- Search bar -->
        <div class="relative mb-8">
          <input
            @focus="loadInitialDropdown"
            @blur.stop="
              setTimeout(() => {
                products = [];
                showMobileNavbar = false;
              }, 200)
            "
            :placeholder="placeholderText"
            type="text"
            placeholder="Search products..."
            class="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 -500 transition-all placeholder-gray-400 text-gray-700 focus:ring-1 focus:ring-blue-400 outline-none duration-[0.6s]"
          />
          <button
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <!-- Main navigation links -->
        <nav class="mb-8">
          <ul class="space-y-4">
            <li>
              <router-link
                :to="{ name: 'home' }"
                class="block py-3 px-2 text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors border-b border-gray-100"
                active-class="text-primary-600 font-semibold"
                @click.native="toggleMobileNavbar"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contact' }"
                class="block py-3 px-2 text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors border-b border-gray-100"
                active-class="text-primary-600 font-semibold"
                @click.native="toggleMobileNavbar"
              >
                Contact
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'about' }"
                class="block py-3 px-2 text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors border-b border-gray-100"
                active-class="text-primary-600 font-semibold"
                @click.native="toggleMobileNavbar"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'signup' }"
                class="block py-3 px-2 text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors border-b border-gray-100"
                active-class="text-primary-600 font-semibold"
                @click.native="toggleMobileNavbar"
              >
                Sign Up
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Categories section -->
        <div class="mb-8">
          <h3
            class="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200"
          >
            Categories
          </h3>
          <ul class="grid grid-cols-2 gap-3">
            <li
              v-for="category in categories"
              :key="category.id"
              @click.native="selectCategory(category)"
            >
              <a
                class="block p-3 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors group"
                
              >
                <span
                  class="font-medium text-gray-800 group-hover:text-primary-600 transition-colors"
                >
                  {{ category.name }}
                </span>
                <span
                  v-if="category.count"
                  class="block text-xs text-gray-500 group-hover:text-primary-500 mt-1"
                >
                  {{ category.count }} products
                </span>
              </a>
            </li>
          </ul>
        </div>

        <!-- User actions (if logged in) -->
        <!-- <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="flex items-center space-x-4 mb-4">
            <div
              class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
            >
              <span class="text-primary-600 font-medium">{{
                userInitials
              }}</span>
            </div>
            <div>
              <p class="font-medium text-gray-900">{{ userName }}</p>
              <p class="text-sm text-gray-500">{{ userEmail }}</p>
            </div>
          </div>
          <button
            @click="logout"
            class="w-full py-2 px-4 text-center text-red-600 font-medium rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
          >
            Sign Out
          </button>
        </div> -->
      </div>
    </div>
  </transition>

  <div class="bg-[#7a7a7a] h-px"></div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLiked, useCart } from "../../stores/stores";
import SearchComponent from "./searchInput/searchComponent.vue";
import NavbarProfile from "./profile/NavbarProfile.vue";

const BASE_URL = "http://localhost:3000";
const get_categories_api = "/guest/api/categories";
const categories = ref([]);
const router = useRouter();
const route = useRoute();
const showMobileNavbar = ref(false);
const showDropdown = ref(false);

const placeholderText = ref("");
let typingIndex = 0;
let typingInterval = null;
const typingText = ref("What are you looking for?");

const useLikedStore = useLiked();
const useCartStore = useCart();

const likedProductsCount = computed(() => useLikedStore.likedProducts.length);

const cartProductsCount = computed(() =>
  useCartStore.cartProducts.reduce((acc, p) => acc + p.count, 0)
);

const toggleMobileNavbar = () => {
  showMobileNavbar.value = !showMobileNavbar.value;
};
const selectCategory = (category) => {
  showMobileNavbar.value = false;
  router.push({
    name: "productlist",
    query: { page: 1, categories: encodeURIComponent(category.name) },
  });
};
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
  showMobileNavbar.value = false;
  startTypingEffect();
});

onUnmounted(() => {
  clearInterval(typingInterval);
});

const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}${get_categories_api}`);
    const data = await response.json();
    if (data.success) {
      categories.value = data.data; // API-dan gelen kategoriýalar
    } else {
      // API işlemeýän ýagdaýy üçin yedek kategoriýalar
      categories.value = [
        { name: "Electronics" },
        { name: "Home & Lifestyle" },
        { name: "Medicine" },
        { name: "Sports & Outdoor" },
        { name: "Baby's & Toys" },
        { name: "Groceries & Pets" },
        { name: "Health & Beauty" },
      ];
    }
  } catch (error) {
    console.error("Kategoriýalar çekilende ýalňyşlyk:", error);
    // API ýok bolsa, yedek kategoriýalar
    categories.value = [
      { name: "Electronics" },
      { name: "Home & Lifestyle" },
      { name: "Medicine" },
      { name: "Sports & Outdoor" },
      { name: "Baby's & Toys" },
      { name: "Groceries & Pets" },
      { name: "Health & Beauty" },
    ];
  }
};

onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
