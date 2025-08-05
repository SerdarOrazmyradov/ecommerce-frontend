<template>
  <div class="container mx-auto px-1 sm:px-3 md:px-5">
    <!-- header -->
    <div
      class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12 mt-20 h-5 py-px flex items-center"
    >
      <!-- <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        Home
      </div> -->
      <router-link
        :to="{ name: 'home' }"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        {{ t("home") }}
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">{{ t("cart") }}</div>
    </div>
    <!-- body -->
    <div
      v-if="useCart().cartProducts.length > 0"
      class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
    >
      <div
        class="overflow-visible max-w-6xl flex flex-col gap-8 md:gap-10 mx-auto mt-16 md:mt-20"
      >
        <!-- product table -->
        <div
          class="h-10 md:h-15 py-1 md:py-2 flow-root divide-y divide-gray-200"
        >
          <div
            class="group flex items-center gap-y-4 justify-around transition duration-300"
          >
            <div
              class="text-sm md:text-base w-1/2 sm:w-1/4 lg:w-auto text-center lg:flex-1"
            >
              {{ t("product") }}
            </div>

            <div
              class="text-xs sm:text-sm md:text-base w-1/2 sm:w-1/4 lg:w-auto text-center lg:flex-1"
            >
              {{ t("price") }}
            </div>
            <div
              class="text-xs sm:text-sm md:text-base w-1/2 sm:w-1/4 text-center lg:w-auto lg:flex-1"
            >
              {{ t("quantity") }}
            </div>
            <div
              class="text-xs sm:text-sm md:text-base w-1/2 sm:w-1/4 text-center lg:w-auto lg:flex-1"
            >
              {{ t("subtotal") }}
            </div>
          </div>
        </div>
        <div
          class="px-4 h-20 md:h-24 py-1 md:py-2 overflow-visible flow-root divide-y border-b inset-ring-indigo-50 inset-1 shadow border-gray-200 divide-gray-200"
          v-for="(product, index) in products"
          :key="index"
        >
          <div
            class="group flex items-center gap-y-4 justify-around transition duration-300"
          >
            <!-- image & title -->
            <div
              v-lazyload
              class="items-center shrink flex gap-3 md:gap-5 relative w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"
            >
              <!-- delete -->
              <div
                @click="
                  products = products.filter(
                    (element) => element.id != product.id
                  );
                  deleteCartProduct(product);
                "
                class="absolute top-1 -left-1 opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <div class="bg-red-400 w-4 h-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="size-4 z-40"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <img
                :data-url="BASE_URL + product.main_image"
                alt="product"
                class="bg-cover size-14 md:size-16 object-scale-down"
              />
              <div
                :title="product.name"
                class="text-sm md:text-base truncate w-36 md:w-[300px]"
              >
                {{ product.name }}
              </div>
            </div>
            <!-- price -->
            <div
              class="flex min-w-12 shrink items-center justify-center text-sm md:text-base w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"
            >
              ${{ product.price }}
            </div>
            <!-- quantity -->
            <input
              v-model.number="product.count"
              :min="1"
              :max="product.stock"
              @change="validateQuantity(product, $event)"
              class="flex shrink items-center justify-center px-1 h-9 md:h-11 outline-none border rounded-sm text-sm md:text-base active:shadow-none active:translate-y-0 w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"
              style="
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                transform: translateY(-2px);
              "
            />
            <!-- subtotal -->
            <div
              style="font-variant-numeric: tabular-nums"
              class="min-w-12 shrink flex items-center justify-center text-sm md:text-base w-1/2 sm:w-1/4 lg:w-auto lg:flex-1"
            >
              ${{ (product.count * product.price).toFixed(2) }}
            </div>
          </div>
        </div>

        <div
          class="hidden -mt-3 md:-mt-4 w-full flex justify-between h-11 md:h-14"
        >
          <!-- first button -->
          <div
            class="invisible select-none cursor-pointer hover:bg-gray-100 text-sm md:text-base font-medium border rounded-sm px-4 sm:px-9 md:px-12 py-2 md:py-4 transition-all duration-300 active:shadow-none active:translate-y-0"
            style="
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
              transform: translateY(-2px);
            "
          >
            Return To Shop
          </div>
          <!-- second button -->
          <div
            @click="updateCartProduct"
            class="select-none cursor-pointer hover:bg-gray-100 text-sm md:text-base font-medium border rounded-sm px-4 sm:px-9 md:px-12 py-2 md:py-4 transition-all duration-300 active:shadow-none active:translate-y-0"
            style="
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
              transform: translateY(-2px);
            "
          >
            Update Cart
          </div>
        </div>
      </div>
      <!-- coupon & cart total-->
      <div
        class="mb-10 md:mb-36 flex flex-col mt-10 md:mt-20 md:flex-row w-full justify-between gap-4"
      >
        <!-- left side -->
        <div>
          <!-- coupon code -->
          <div class="hidden flex items-center max-w-lg justify-between gap-4">
            <input
              placeholder="Coupon Code"
              type="text"
              class="text-sm md:text-base py-2 md:py-4 focus:ring-1 duration-500 transition outline-none border rounded-sm pl-4 md:pl-6"
            />
            <div
              class="select-none hover:bg-red-300 cursor-pointer text-sm md:text-base py-2 md:py-4 bg-red-400 rounded-sm flex items-center justify-center w-40 md:w-44 text-neutral-50"
            >
              Apply Coupon
            </div>
          </div>
        </div>
        <!-- right side -->
        <div
          class="self-end w-72 md:w-md border rounded-sm px-3 md:px-6 flex flex-col gap-4"
        >
          <div class="mt-5 md:mt-8 text-base md:text-xl font-medium">
            {{ t("cartTotal") }}
          </div>

          <div class="flex justify-between">
            <div class="text-sm md:text-base">{{ t("subtotal") }}:</div>
            <div class="text-sm md:text-base">${{ subtotal.toFixed(2) }}</div>
          </div>
          <div class="w-full h-px bg-gray-300"></div>
          <div class="flex justify-between">
            <div class="text-sm md:text-base">{{ t("shipping") }}:</div>
            <div class="text-sm md:text-base">{{ t("free") }}</div>
          </div>
          <div class="w-full h-px bg-gray-300"></div>
          <div class="flex justify-between">
            <div class="text-sm md:text-base">{{ t("total") }}:</div>
            <div class="text-sm md:text-base">${{ subtotal.toFixed(2) }}</div>
          </div>
          <!-- checout button -->
          <div
            @click="ProceesToCheckout()"
            class="select-none cursor-pointer mb-6 md:mb-8 mx-auto bg-red-400 rounded-sm text-neutral-50 text-sm md:text-base font-medium flex justify-center items-center py-2 hover:bg-red-300 w-44 md:w-60 md:py-4 mt-4 active:shadow-none active:translate-y-0 transition-all duration-300"
            style="
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
              transform: translateY(-2px);
            "
          >
            {{ t("proceedToCheckout") }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
    >
      <div class="text-5xl font-medium">{{ t("cartEmpty") }}</div>
      <div class="text-2xl font-normal text-blue-400">
        {{ t("cartEmptyMessage") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useLiked, useCart, useToast } from "../../stores/stores";
import { useRoute, useRouter } from "vue-router";

import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

const router = useRouter();
const route = useRoute();

const useLikedStore = useLiked();
const useCartStore = useCart();
const useToastStore = useToast();

const BASE_URL = "http://localhost:3000/";
const IMAGE_BASE_URL = "http://localhost:3000/uploads/images/";
const products = ref([]);
function onQuantityChange(product) {
  if (product.count < 1) product.count = 1;
  if (product.count > product.stock) {
    product.count = product.stock;
    toast.addToast({ message: t("outOfStock"), type: "error" });
  }
}
const getCartProducts = () => {
  // products.value = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  products.value = useCartStore.cartProducts.map((p) => ({ ...p }));
};
const subtotal = computed(() =>
  products.value.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  )
);
const validateQuantity = (product, e) => {
  if (product.count < 1) {
    product.count = 1;
    // localStorage.setItem("cartProducts", JSON.stringify(products.value));
  }
  if (product.count > product.stock) {
    product.count = product.stock;
    // localStorage.setItem("cartProducts", JSON.stringify(products.value));
  }
};

const deleteCartProduct = (product) => {
  products.value = products.value.filter((element) => element.id != product.id);
  // localStorage.setItem("cartProducts", JSON.stringify(products.value));
};

const showInfoToast = () => {
  useToastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "info",
  });
};

const updateCartProduct = () => {
  let localProducts = products.value;
  useCartStore.setProducts(localProducts);
  showInfoToast();
};
const ProceesToCheckout = () => {
  setTimeout(() => {
    router.push({
      name: "checkout",
    });
  }, 1000);
};

watch(
  () => products,
  (newValue) => {
    console.log("salam bu watch !!!:");
    if (newValue.value) useCartStore.setProducts(newValue.value);
  },
  { deep: true }
);

onMounted(() => {
  getCartProducts();
});
</script>

<style lang="scss" scoped></style>
