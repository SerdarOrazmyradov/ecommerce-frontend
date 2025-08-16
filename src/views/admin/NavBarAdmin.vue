<template>
  <div>
    <!-- navbar -->
    <div class="max-w-48 px-4 mt-3">
      <div class="flex items-center justify-between pr-3">
        <!-- logo and sidebar icon -->
        <div
          @click="
            router.push({
              name: 'admin',
            })
          "
          class="cursor-pointer select-none text-2xl font-bold"
        >
          Exclusive
        </div>
        <div class="cursor-pointer" @click="">
          <img
            src="https://ecommerce-frontend-bx39.onrender.com/icons/sidebar_left.png"
            alt="sidebar_left"
          />
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-2">
        <div>
          <router-link
            exact-active-class="border  rounded-sm border-orange-300 "
            class="flex items-center gap-2 py-2 px-2"
            :to="{ name: '' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5 11.5H16.5V13.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="text-base font-light">Dashboard</div>
          </router-link>
        </div>
        <div>
          <router-link
            exact-active-class="border  rounded-sm border-orange-300 "
            class="flex items-center gap-2 py-2 px-2"
            :to="{ name: '' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.09607 11H8.10505"
                stroke="#292D32"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8984 11H16.3984"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.09607 7H8.10505"
                stroke="#292D32"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8984 7H16.3984"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="text-base font-light">Order</div>
          </router-link>
        </div>
        <div>
          <router-link
            exact-active-class="border rounded-sm border-orange-300 "
            class="flex items-center gap-2 py-2 px-2"
            :to="{ name: '' }"
          >
            <img
              src="https://ecommerce-frontend-bx39.onrender.com/icons/user.png"
              class="size-4 bg-cover"
              alt="user png"
            />
            <div class="text-base font-light">Admin</div>
          </router-link>
        </div>
        <div>
          <router-link
            exact-active-class="border rounded-sm border-orange-300 "
            class="flex items-center gap-2 py-2 px-2"
            :to="{ name: '' }"
          >
            <img
              src="https://ecommerce-frontend-bx39.onrender.com/icons/setting.png"
              class="size-4 bg-cover"
              alt="user png"
            />
            <div class="text-base font-light">Setting</div>
          </router-link>
        </div>

        <!-- <router-link
        :to="{ name: '' }"
        class="text-base font-light py-2 px-2"
        exact-active-class="border  rounded-sm border-orange-300 "
        >Listing
      </router-link>
      <router-link
        :to="{ name: '' }"
        class="text-base font-light py-2 px-2"
        exact-active-class="border  rounded-sm border-orange-300 "
        >Admin
      </router-link>
      <router-link
        :to="{ name: '' }"
        class="text-base font-light py-2 px-2"
        exact-active-class="border  rounded-sm border-orange-300 "
        >Setting
      </router-link> -->
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <div class="text-sm font-light -ml-2">Links</div>
        <div>
          <router-link
            exact-active-class="border rounded-sm border-orange-300 "
            class="flex items-center gap-2 py-2 px-2"
            :to="{ name: '' }"
          >
            <img
              src="https://ecommerce-frontend-bx39.onrender.com/icons/setting.png"
              class="size-4 bg-cover"
              alt="user png"
            />
            <div class="text-base font-light">Setting</div>
          </router-link>
        </div>
        <div>
          <router-link
            exact-active-class="border rounded-sm border-orange-300 "
            class="flex items-center gap-2 py-2 px-2"
            :to="{ name: '' }"
          >
            <img
              src="https://ecommerce-frontend-bx39.onrender.com/icons/setting.png"
              class="size-4 bg-cover"
              alt="user png"
            />
            <div class="text-base font-light">Setting</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
4;
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
