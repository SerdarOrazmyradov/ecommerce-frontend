<template>
  <!-- footer -->
  <div class="bg-black h-full mt-10">
    <footer
      class="container px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 text-[#fafafa] mx-auto"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center sm:text-start"
      >
        <!-- Column 1 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-2xl font-bold">Exclusive</div>
          <div class="text-lg sm:text-xl font-medium cursor-pointer">
            Subscribe
          </div>
          <div class="text-base sm:text-lg cursor-pointer">
            Get 10% off your first order
          </div>
          <div
            class="flex gap-1 border-2 border-white rounded-sm h-12 sm:h-14 w-fit sm:w-full items-center self-center sm:self-start"
          >
            <input
              type="email"
              class="px-3 text-sm sm:text-base border-none outline-none bg-transparent w-full"
              placeholder="Enter your email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">Support</div>
          <div class="text-base sm:text-lg cursor-pointer">
            exclusive@gmail.com
          </div>
        </div>

        <!-- Column 3 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">Account</div>
          <!-- regidter link with underline -->
          <div class="group flex flex-col items-center sm:items-start relative">
            <router-link class="text-base sm:text-lg">My Account</router-link>
            <div
              class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-[100px] after:flex after:justify-center"
            ></div>
          </div>
          <div
            class="text-base sm:text-lg cursor-pointer flex justify-center sm:justify-start gap-2 items-center w-fit mx-auto sm:mx-0"
          >
            <div
              class="group flex flex-col items-center sm:items-start relative"
            >
              <router-link :to="{ name: 'login' }" class="text-base sm:text-lg"
                >Login</router-link
              >
              <div
                class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
              ></div>
            </div>
            <!-- <router-link
            :to="{ name: 'login' }"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >Login</router-link
          > -->
            <div>/</div>
            <div class="group flex flex-col items-center relative">
              <router-link :to="{ name: 'signup' }" class="text-base sm:text-lg"
                >Register</router-link
              >
              <div
                class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
              ></div>
            </div>
            <!-- <router-link
            :to="{ name: 'signup' }"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
            Register</router-link
            > -->
          </div>
          <!-- cart link with underline -->
          <div class="group flex flex-col items-center sm:items-start relative">
            <router-link to="cart" class="text-base sm:text-lg"
              >Cart</router-link
            >
            <div
              class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-[35px] after:flex after:justify-center"
            ></div>
          </div>
          <!-- <router-link to="cart" class="text-base sm:text-lg cursor-pointer"
          >Cart</router-link
          > -->
          <!-- Wishlist link with underline -->
          <div class="group flex flex-col items-center sm:items-start relative">
            <router-link to="wishlist" class="text-base sm:text-lg"
              >Wishlist</router-link
            >
            <div
              class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-[65px] after:flex after:justify-center"
            ></div>
          </div>
          <!-- Wishlist link with underline -->
          <div class="group flex flex-col items-center sm:items-start relative">
            <router-link
              :to="{
                name: 'productlist',
                query: { message: 'exploreourproducts' },
              }"
              class="text-base sm:text-lg"
              >Shop</router-link
            >
            <div
              class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-[45px] after:flex after:justify-center"
            ></div>
          </div>
        </div>

        <!-- Column 4 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">Quick Link</div>
          <div class="text-base sm:text-lg cursor-pointer">Privacy Policy</div>
          <div class="text-base sm:text-lg cursor-pointer">Terms Of Use</div>
          <div class="text-base sm:text-lg cursor-pointer">FAQ</div>
          <div
            class="text-base sm:text-lg cursor-pointer transition duration-300"
          >
            Contact
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Message } from "primevue";

export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
/* You can add custom SCSS here if needed */
</style>
