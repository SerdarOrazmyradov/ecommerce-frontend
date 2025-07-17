<template>
  <div class="mt-10 flex justify-around mb-4 max-w-[1170px] mx-auto">
    <div
      @click="
        router.replace({
          name: 'home',
        })
      "
      class="cursor-pointer select-none text-2xl font-bold"
    >
      Exclusive
    </div>
    <div class="hidden text-base lg:flex lg:gap-10 xl:gap-12 items-center">
      <router-link :to="{ name: 'home' }" class="hover:underline cursor-pointer"
        >Home</router-link
      >
      <div class="hover:underline cursor-pointer">Contact</div>
      <div class="hover:underline cursor-pointer">About</div>
      <router-link
        :to="{ name: 'signup' }"
        class="hover:underline cursor-pointer"
        >Sign Up</router-link
      >
      <!-- Categories with dropdown -->
      <div class="relative group hidden md:block xl:hidden">
        <div class="hover:underline cursor-pointer">Categories</div>

        <!-- Dropdown box -->
        <div
          class="absolute top-full left-0 mt-2 w-[200px] bg-white text-black rounded shadow-lg p-4 z-50 hidden group-hover:block"
        >
          <div
            v-for="category in categories"
            :key="category"
            class="py-1 px-2 hover:bg-gray-100 hover:text-[#DB4444] transition-colors cursor-pointer"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <!-- search -->
      <div
        class="hidden md:flex gap-3 bg-gray-100 py-2 rounded-sm items-center"
      >
        <input
          type="text"
          name="search"
          placeholder="What are you looking for?"
          class="ml-5 md:text-base outline-none text-[#7A7A7A]"
        />

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 md:ml-[34px] md:mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <!-- hearth -->
      <div
        @click="
          router.replace({
            name: 'cart',
          })
        "
        class="relative cursor-pointer"
      >
        <div
          class="select-none absolute w-4 h-4 bg-red-400 -top-1 -right-1 text-neutral-50 rounded-full flex justify-center items-center text-xs"
          :class="useLikedStore.count == 0 ? 'hidden' : 'flex'"
        >
          {{ useLikedStore.count }}
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

          router.replace({
            name: 'cart',
          });
        "
        class="cursor-pointer relative"
      >
        <div
          class="select-none absolute w-4 h-4 bg-red-400 -top-1 -right-1 text-neutral-50 rounded-full flex justify-center items-center text-xs"
          :class="useCartQuentityStore.count == 0 ? 'hidden' : 'flex'"
        >
          {{ useCartQuentityStore.count }}
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
      <!-- <div class="relative ml-4" :class="''">
        <div class="top-0  absolute size-8 bg-red-400 rounded-full -z-10"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="size-6 absolute top-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div> -->
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

  <transition name="fade">
    <div
      v-if="showMobileNavbar"
      class="block  lg:hidden fixed top-12 w-screen h-screen bg-white z-40 overflow-y-auto"
    >
      <!-- close button -->
      <div
        @click="toggleMobileNavbar"
        class="flex justify-end mt-8 mr-8 lg:hidden cursor-pointer"
      >
        <div
          class="flex flex-col justify-center items-center w-10 h-8 cursor-pointer space-y-2"
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
      <!-- main body -->
      <div class="text-[27px] text-black flex flex-col gap-4 px-4 mt-5 py-4">
        <!-- search -->
        <div class="flex gap-3 bg-gray-100 py-1 rounded-sm items-center">
          <input
            type="text"
            name="search"
            placeholder="What are you looking for?"
            class="w-full placeholder:text-sm text-sm md:text-base outline-none text-[#7A7A7A]"
          />

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 md:ml-[34px] md:mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="cursor-pointer hover:underline text-base md:text-lg font-bold"
          >Home</router-link
        >
        <div
          class="cursor-pointer hover:underline text-base md:text-lg font-bold"
        >
          Contact
        </div>
        <div
          class="cursor-pointer hover:underline text-base md:text-lg font-bold"
        >
          About
        </div>
        <!-- <div class="cursor-pointer hover:underline">Sign Up</div> -->
        <router-link
          :to="{ name: 'signup' }"
          class="cursor-pointer hover:underline text-base md:text-lg font-bold"
          >Sign Up</router-link
        >

        <!--=========== salam kategoriya  ===========-->
        <div>
          <div class="h-px w-full bg-black"></div>
          <div class="text-base md:text-lg font-bold">Categories</div>
        </div>
        <!-- Woman's Fashion -->
        <div class="flex justify-between items-center group cursor-pointer">
          <span class="group-hover:text-[#DB4444] transition-colors text-xs"
            >Woman's Fashion</span
          >
          <svg
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

        <!-- Man's Fashion -->
        <div class="flex justify-between items-center group cursor-pointer">
          <span class="group-hover:text-[#DB4444] transition-colors text-xs"
            >Man's Fashion</span
          >
          <svg
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

        <!-- Other Categories -->
        <div
          v-for="category in categories"
          :key="category"
          class="mb-2 sm:mb-3 md:mb-4 flex justify-between items-center group cursor-pointer text-xs"
        >
          <span class="group-hover:text-[#DB4444] transition-colors">{{
            category
          }}</span>
        </div>
      </div>
    </div></transition
  >

  <div class="bg-[#7a7a7a] h-px"></div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLiked, useCartQuentity } from "../../stores/stores";

const useLikedStore = useLiked();
const useCartQuentityStore = useCartQuentity();

const router = useRouter();
const route = useRoute();
const showMobileNavbar = ref(false);
const toggleMobileNavbar = () => {
  showMobileNavbar.value = !showMobileNavbar.value;
};
const categories = [
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
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
</style>
