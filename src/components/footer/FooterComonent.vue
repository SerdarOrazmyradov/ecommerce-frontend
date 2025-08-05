<template>
  <!-- footer -->
  <div class="bg-black h-full mt-10">
    <footer
      class="max-w-[1170px] px-4 sm:px-6 lg:px-8 py-20 text-[#fafafa] mx-auto"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center sm:text-start"
      >
        <!-- Column 1 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-2xl font-bold">Exclusive</div>

          
          <!-- <div class="text-lg sm:text-xl font-medium cursor-pointer">
            {{ t("subscribe") }}
          </div>
          <div class="text-base sm:text-lg cursor-pointer">
            {{ t("subscribeMessage") }}
          </div>
          <div
            class="flex gap-1 border-2 border-white rounded-sm h-12 sm:h-14 w-fit sm:w-full items-center self-center sm:self-start"
          >
            <input
              v-model="email"
              type="email"
              class="px-3 text-sm sm:text-base border-none outline-none bg-transparent w-full"
              :placeholder="t('emailPlaceholder')"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 hover:scale-105 hover:translate-x-1 duration-300 ease-in-out sm:w-6 sm:h-6 mr-2 sm:mr-3 cursor-pointer active:shadow-none active:translate-y-0"
              style="
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                transform: translateY(-2px);
              "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div> -->
        </div>

        <!-- Column 2 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">{{ t("support") }}</div>
          <!-- <div class="text-base sm:text-lg cursor-pointer">
            exclusive@gmail.com
          </div> -->
          <div class="w-full flex justify-center sm:justify-normal relative">
            <div
              class="group flex flex-col items-center w-fit sm:items-start relative"
            >
              <a href="mailto:exclusive@gmail.com" class="text-base sm:text-lg">
                exclusive@gmail.com
              </a>
              <div
                class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
              ></div>
            </div>
          </div>


          <!-- <div>salam</div> -->
        </div>

        <!-- Column 3 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">{{ t("account") }}</div>

          <!-- regidter link with underline -->
          <div class="w-full flex justify-center sm:justify-normal relative">
            <div
              class="group flex flex-col items-center w-fit sm:items-start relative"
            >
              <div
                class="group flex flex-col items-center w-fit sm:items-start relative"
              >
                <router-link to="myaccount" class="text-base sm:text-lg">{{
                  t("myAccount")
                }}</router-link>
                <div
                  class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="text-base sm:text-lg cursor-pointer flex justify-center sm:justify-start gap-2 items-center w-fit mx-auto sm:mx-0"
          >
            <div
              class="group flex flex-col items-center w-fit sm:items-start relative"
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
            <div class="group flex flex-col items-center w-fit relative">
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
          <div class="w-full flex justify-center sm:justify-normal relative">
            <div
              class="group flex flex-col items-center w-fit sm:items-start relative"
            >
              <router-link to="cart" class="text-base sm:text-lg">{{
                t("cart")
              }}</router-link>
              <div
                class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
              ></div>
            </div>
          </div>
          <!-- <router-link to="cart" class="text-base sm:text-lg cursor-pointer"
          >Cart</router-link
          > -->
          <!-- Wishlist link with underline -->

          <div class="w-full flex justify-center sm:justify-normal relative">
            <div
              class="group flex flex-col items-center w-fit sm:items-start relative"
            >
              <router-link to="wishlist" class="text-base sm:text-lg">{{
                t("wishlist")
              }}</router-link>
              <div
                class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
              ></div>
            </div>
          </div>
          <!-- Wishlist link with underline -->
          <div class="w-full flex justify-center sm:justify-normal relative">
            <div
              class="group flex flex-col items-center w-fit sm:items-start relative"
            >
              <router-link
                :to="{
                  name: 'productlist',
                  query: { message: 'exploreourproducts' },
                }"
                class="text-base sm:text-lg"
                >{{ t("shop") }}</router-link
              >
              <div
                class="after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100 w-full after:flex after:justify-center"
              ></div>
            </div>
          </div>
        </div>

        <!-- Column 4 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <!-- <div class="text-2xl font-bold">Exclusive</div> -->
          <div class="text-lg sm:text-xl font-medium cursor-pointer">
            {{ t("subscribe") }}
          </div>
          <div class="text-base sm:text-lg cursor-pointer">
            {{ t("subscribeMessage") }}
          </div>
          <div
            class="flex gap-1 border-2 border-white rounded-sm h-12 sm:h-14 w-fit sm:w-full items-center self-center sm:self-start"
          >
            <input
              v-model="email"
              type="email"
              class="px-3 text-sm sm:text-base border-none outline-none bg-transparent w-full"
              :placeholder="t('emailPlaceholder')"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 hover:scale-105 hover:translate-x-1 duration-300 ease-in-out sm:w-6 sm:h-6 mr-2 sm:mr-3 cursor-pointer active:shadow-none active:translate-y-0"
              style="
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                transform: translateY(-2px);
              "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
          <!-- <div class="text-xl font-bold">{{ t("quickLink") }}</div>
          <div class="text-base sm:text-lg cursor-pointer">
            {{ t("privacyPolicy") }}
          </div>
          <div class="text-base sm:text-lg cursor-pointer">
            {{ t("termsOfUse") }}
          </div>
          <div class="text-base sm:text-lg cursor-pointer">{{ t("faq") }}</div>
          <div
            class="text-base sm:text-lg cursor-pointer transition duration-300"
          >
            {{ t("contact") }}
          </div> -->
        </div>
        <div class="hidden flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">{{ t("quickLink") }}</div>
          <div class="text-base sm:text-lg cursor-pointer">
            {{ t("privacyPolicy") }}
          </div>
          <div class="text-base sm:text-lg cursor-pointer">
            {{ t("termsOfUse") }}
          </div>
          <div class="text-base sm:text-lg cursor-pointer">{{ t("faq") }}</div>
          <div
            class="text-base sm:text-lg cursor-pointer transition duration-300"
          >
            {{ t("contact") }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });
const email = ref("");
</script>

<style lang="scss" scoped></style>
