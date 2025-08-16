<template>
  <message-modal
    v-if="showMessageModal"
    @close="showMessageModal = false"
    @again="
      () => {
        showMessageModal = false;
        console.log('showMessageModal :', showMessageModal);
        placeOrder();
      }
    "
    @continue="
      () => {
        showMessageModal = false;
        console.log('showMessageModal :', showMessageModal);

        router.push({
          name: 'home',
        });
      }
    "
    :isError="isError"
    :message="message"
  />

  <div
    v-if="isLoading"
    class="fixed top-0 bg-gray-100/90 w-full h-full flex items-center justify-center"
  >
    <loading-animation :text="t('process')" />
  </div>

  <div
    class="flex flex-col max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
  >
    <!-- <div class="bg-black h-px"></div> -->
    <!-- header -->
    <div
      class="mt-20 h-5 py-px flex items-center justify-center sm:justify-normal"
    >
      <router-link
        to="myaccount"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        {{ t("account") }}
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <router-link
        to="myaccount"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        {{ t("myAccount") }}
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <router-link
        to="productlist"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        {{ t("product") }}
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <router-link
        to="cart"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        {{ t("viewCart") }}
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3">{{ t("checkout") }}</div>
    </div>
    <!-- body -->
    <div
      ref="myDiv"
      class="md:h-10/12v flex flex-col-reverse md:flex-row justify-around"
    >
      <div class="">
        <div
          class="text-3xl md:text-4xl text-center sm:text-start font-medium mt-14 md:mt-20"
        >
          {{ t("billingDetails") }}
        </div>
        <!-- form -->
        <div
          class="flex flex-col items-center sm:items-start gap-6 md:gap-8 mt-10 md:mt-12 mb-2 md:mb-36 max-w-xl"
        >
          <div class="">
            <div class="text-base text-gray-500">
              {{ t("firstName") }} <span class="text-red-400">*</span>
            </div>
            <input
              v-model="name"
              name="name"
              class="px-3 w-xs mt-2 h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>

          <div class="">
            <div class="text-base text-gray-500">
              {{ t("streetAddress") }} <span class="text-red-400">*</span>
            </div>
            <input
              v-model="adress"
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <!-- <div class="">
            <div class="text-base text-gray-500">
              Apartment, floor, etc. (optional)
            </div>
            <input
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div> -->
          <div class="">
            <div class="text-base text-gray-500">
              {{ t("phoneNumber") }} <span class="text-red-400">*</span>
            </div>
            <input
              v-model="phone_number"
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="tel"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">
              {{ t("note") }}
              <!-- <span class="text-red-400">*</span> -->
            </div>
            <input
              v-model="note"
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="hidden flex gap-4 items-center">
            <input
              type="checkbox"
              name="fast_checkout"
              id="fast_checkout"
              class="w-6 h-6"
            />
            <label class="text-base cursor-pointer" for="fast_checkout">{{
              t("saveInfo")
            }}</label>
          </div>
        </div>
      </div>
      <!-- right  side -->
      <div class="mt-10 md:mt-0 md:px-5">
        <div
          class="flex flex-col items-center sm:items-start gap-8 mb-10 md:mb-0 md:mt-52"
        >
          <div class="max-w-lg">
            <div class="max-w-md flex flex-col gap-8 shrink">
              <!-- first product -->
              <div
                v-for="(product, index) in products"
                :key="index"
                v-lazyload
                class="flex gap-10 sm:gap-6 items-center"
              >
                <img
                  :data-url="'https://ecommerce-backend-fh32.onrender.com/' + product.main_image"
                  alt="product"
                  class="w-16 h-16 object-scale-down shrink"
                />
                <div class="flex justify-between flex-1 shrink">
                  <div
                    :title="product.name"
                    class="text-base truncate max-w-48 shrink"
                  >
                    {{ product.name }}
                  </div>
                  <div class="text-base ml-2 shrink">${{ product.price }}</div>
                </div>
              </div>
              <!-- second product -->
              <!-- <div class="flex gap-6 items-center">
                <img
                  src="../../../public/best_selling//672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
                  alt="product"
                  class="w-14 h-14"
                />
                <div class="flex justify-between flex-1">
                  <div class="text-base">LCD Monitor</div>
                  <div class="text-base">$1100</div>
                </div>
              </div> -->
              <!-- subtotal -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">{{ t("subtotal") }}:</div>
                  <div class="text-base">${{ subtotal }}</div>
                </div>
                <div class="h-px w-full bg-gray-500"></div>
              </div>
              <!-- shopping -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">{{ t("shipping") }}:</div>
                  <div class="text-base">{{ t("free") }}</div>
                </div>
                <div class="h-px w-full bg-gray-500"></div>
              </div>

              <!-- tool -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">{{ t("total") }}:</div>
                  <div class="text-base">${{ subtotal }}</div>
                </div>
              </div>
              <!-- cash -->
              <div class="flex gap-6 sm:justify-between items-center">
                <div class="flex items-center gap-4">
                  <input
                    v-model="payment_type"
                    name="myRadioGroup"
                    value="card"
                    id="bank"
                    type="radio"
                    class="w-6 h-6 accent-black"
                  />
                  <label class="cursor-pointer" for="bank">{{
                    t("bank")
                  }}</label>
                </div>
                <!-- bank images -->
                <div class="flex gap-2 h-10 items-center">
                  <img
                    src="../../../public/bcash/image 30.png"
                    class=""
                    alt="practice"
                  />
                  <img
                    src="../../../public/bcash/image 31.png"
                    class=""
                    alt="practice"
                  />
                  <img
                    src="../../../public/bcash/image 32.png"
                    class=""
                    alt="practice"
                  />
                  <img
                    src="../../../public/bcash/image 33.png"
                    class=""
                    alt="practice"
                  />
                </div>
              </div>
              <!-- Cash on delivery -->
              <div class="flex sm:justify-between items-center">
                <div class="flex items-center gap-4">
                  <input
                    v-model="payment_type"
                    name="myRadioGroup"
                    value="cash"
                    id="cash_on_delivary"
                    type="radio"
                    class="w-6 h-6 accent-black"
                  />
                  <label class="cursor-pointer" for="cash_on_delivary">{{
                    t("cashOnDelivery")
                  }}</label>
                </div>
              </div>
            </div>
          </div>
          <!-- coupon code -->
          <div
            class="hidden items-center max-w-lg md:w-full justify-between gap-4"
          >
            <input
              :placeholder="t('couponCode')"
              type="text"
              class="text-sm md:text-base py-2 md:py-4 focus:ring-1 duration-500 transition outline-none border rounded-sm pl-4 md:pl-6"
            />
            <div
              class="select-none hover:bg-red-300 cursor-pointer text-sm md:text-base py-2 md:py-4 bg-red-400 rounded-sm flex items-center justify-center w-40 md:w-44 text-neutral-50"
            >
              {{ t("applyCoupon") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- place order -->
    <div
      @click="placeOrder()"
      class="self-end mt-15 select-none hover:bg-red-300 cursor-pointer w-44 md:w-xs text-sm md:text-base font-medium bg-red-400 py-2 md:py-4 text-neutral-50 rounded-sm flex items-center justify-center active:shadow-none active:translate-y-0 transition-all duration-300"
      style="
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
      "
    >
      {{ t("placeOrder") }}
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import LoadingAnimation from "../../components/loader/LoadingAnimation.vue";
import MessageModal from "../../components/modal/MessageModal.vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

const showMessageModal = ref(false);
const message = ref("");
const isError = ref(false);
const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const BASE_URL = "https://ecommerce-backend-fh32.onrender.com/";
const IMAGE_BASE_URL = "https://ecommerce-backend-fh32.onrender.com/uploads/images/";
const myDiv = ref(null);
const products = ref([]);
const status = ref("pending");
const name = ref("");
const phone_number = ref("");
const adress = ref("abcd++");
const note = ref("abcdef");
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ -şuny localStorage-de saklamaly
const total_quantity = ref(2);
const total_price = ref(4000);
const payment_type = ref("cash");
const order_items = ref(
  "'{\n  'products': [\n    { 'id': 1, 'count': 2 },\n    { 'id': 2, 'count': 3 }\n  ]\n}'"
);

import confetti from "canvas-confetti";
import { useCart } from "../../stores/stores";

const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const subtotal = computed(() =>
  products.value.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  )
);

const getCartProducts = () => {
  products.value = JSON.parse(localStorage.getItem("cartProducts" || []));
};
const setOrderItems = () => {
  order_items.value = JSON.parse(localStorage.getItem("cartProducts" || []));

  order_items.value.forEach((element) => {
    delete element.category_id;
    delete element.category_name;
    delete element.created_at;
    delete element.description;
    delete element.discount;
    delete element.main_image;
    delete element.name;
    delete element.oldprice;
    delete element.price;
    delete element.rating;
    delete element.stock;
    delete element.total_count;
  });
};

const placeOrder = () => {
  if (products.value == 0) return;
  const token = localStorage.getItem("token");
  if (token) {
    isLoading.value = true;
    const postData = {
      status: status.value,
      name: name.value,
      phone_number: phone_number.value,
      adress: adress.value,
      note: note.value,
      total_quantity: total_quantity.value,
      total_price: subtotal.value,
      payment_type: payment_type.value,
      order_items: JSON.stringify({
        products: order_items.value,
      }),
    };
    console.log("iberiljek maglumatlar ", postData);

    fetch(BASE_URL + "user/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        return response.json();
      })
      .then((data) => {
        isLoading.value = false;
        showMessageModal.value = true;

        console.log(data);
        if (data.success) {
          fireConfetti();
          isError.value = false;
          message.value = data.message;
          useCart().cartProducts = [];
          // localStorage.removeItem("cartProducts");
          // redirect
          setTimeout(() => {
            products.value = [];
          }, 200);
        } else {
          isError.value = true;
          message.value = data.message;
        }
      })
      .catch((error) => {
        console.error("Error detected -!!! : ", error);
      });
  } else {
    setTimeout(() => {
      router.push({
        name: "signup",
        query: { redirectTo: route.name },
      });
    }, 1000);
  }
};

onMounted(() => {
  // window.addEventListener("scroll", handleScroll);
  setOrderItems();
  getCartProducts();
  console.log("product sany", products.value.length);
  // if (window.innerWidth > 768) {
  //   if (products.value.length > 2) {
  //     myDiv.value.style.height =
  //       String(myDiv.value.clientHeight + (products.value.length - 2) * 10) +
  //       "px";

  //     // console.log("current height ", myDiv.value.clientHeight);
  //   } else if (products.value.length == 2) {
  //     myDiv.value.style.height =
  //       String(myDiv.value.clientHeight + (products.value.length - 1) * 200) +
  //       "px";
  //   } else {
  //     myDiv.value.style.height = String(myDiv.value.clientHeight) + "px";
  //   }
  // }
});

// function handleScroll() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;

//   document.getElementById("progressBar").style.width = scrolled + "%";
// }
</script>

<style lang="scss" scoped></style>
