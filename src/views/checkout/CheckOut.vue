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
    <loading-animation text="Process" />
  </div>

  <div class="container px-3 md:px-5 mx-auto">
    <!-- <div class="bg-black h-px"></div> -->
    <!-- header -->
    <div class="mt-20 h-5 py-px flex items-center">
      <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        Account
      </div>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        My Account
      </div>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        Product
      </div>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        View Cart
      </div>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">CheckOut</div>
    </div>
    <!-- body -->
    <div
      ref="myDiv"
      class="md:h-10/12v flex flex-col md:flex-row justify-around"
    >
      <div class="">
        <div class="text-3xl md:text-4xl font-medium mt-14 md:mt-20">
          Billing Details
        </div>
        <!-- form -->
        <div
          class="flex flex-col gap-6 md:gap-8 mt-10 md:mt-12 mb-2 md:mb-36 max-w-xl"
        >
          <div class="">
            <div class="text-base text-gray-500">
              First Name <span class="text-red-400">*</span>
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
              Street Address <span class="text-red-400">*</span>
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
              Phone Number <span class="text-red-400">*</span>
            </div>
            <input
              v-model="phone_number"
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="tel"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">
              Note
              <!-- <span class="text-red-400">*</span> -->
            </div>
            <input
              v-model="note"
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="flex gap-4 items-center">
            <input
              type="checkbox"
              name="fast_checkout"
              id="fast_checkout"
              class="w-6 h-6"
            />
            <label class="text-base cursor-pointer" for="fast_checkout"
              >Save this information for faster check-out next time</label
            >
          </div>
        </div>
      </div>
      <!-- right  side -->
      <div class="mt-10 md:mt-0 md:px-5 md:relative">
        <div class="flex flex-col gap-8 mb-10 md:mb-0 md:relative md:top-52">
          <div class="max-w-lg">
            <div class="max-w-md flex flex-col gap-8">
              <!-- first product -->
              <div
                v-for="(product, index) in products"
                :key="index"
                class="flex gap-6 items-center"
              >
                <img
                  :src="IMAGE_BASE_URL + product.main_image"
                  alt="product"
                  class="w-14 h-14"
                />
                <div class="flex justify-between flex-1">
                  <div class="text-base">{{ product.name }}</div>
                  <div class="text-base">${{ product.price }}</div>
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
                  <div class="text-base">Subtotal:</div>
                  <div class="text-base">${{ subtotal }}</div>
                </div>
                <div class="h-px w-full bg-gray-500"></div>
              </div>
              <!-- shopping -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">Shipping:</div>
                  <div class="text-base">Free</div>
                </div>
                <div class="h-px w-full bg-gray-500"></div>
              </div>

              <!-- tool -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">Total:</div>
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
                  <label class="cursor-pointer" for="bank">Bank</label>
                </div>
                <!-- bank images -->
                <div class="flex gap-2 h-10 items-center">
                  <img
                    src="../../../public/bcash/image 30.png"
                    class=""
                    alt=""
                  />
                  <img
                    src="../../../public/bcash/image 31.png"
                    class=""
                    alt=""
                  />
                  <img
                    src="../../../public/bcash/image 32.png"
                    class=""
                    alt=""
                  />
                  <img
                    src="../../../public/bcash/image 33.png"
                    class=""
                    alt=""
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
                  <label class="cursor-pointer" for="cash_on_delivary"
                    >Cash on delivery</label
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- coupon code -->
          <div
            class="flex items-center max-w-lg md:w-full justify-between gap-4"
          >
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
          <!-- place order -->
          <div
            @click="placeOrder()"
            class="select-none hover:bg-red-300 cursor-pointer w-44 md:w-xs text-sm md:text-base font-medium bg-red-400 py-2 md:py-4 text-neutral-50 rounded-sm flex items-center justify-center"
          >
            Place Order
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import LoadingAnimation from "../../components/loader/LoadingAnimation.vue";
import MessageModal from "../../components/modal/MessageModal.vue";
import { useRoute, useRouter } from "vue-router";

const showMessageModal = ref(false);
const message = ref("");
const isError = ref(false);
const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const BASE_URL = "http://localhost:3000/";
const IMAGE_BASE_URL = "http://localhost:3000/uploads/images/";
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
  // try {

  // } catch (error) {
  //   console.log("error detecting!!! -", error);

  // }

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
          isError.value = false;
          message.value = data.message;
          localStorage.removeItem("cartProducts");
          // redirect
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
      });
    }, 1000);
  }
};

onMounted(() => {
  setOrderItems();
  getCartProducts();
  console.log("product sany", products.value.length);
  if (window.innerWidth > 768) {
    if (products.value.length > 2) {
      myDiv.value.style.height =
        String(myDiv.value.clientHeight + (products.value.length - 2) * 200) +
        "px";

      // console.log("current height ", myDiv.value.clientHeight);
    }
  }
});
</script>

<style lang="scss" scoped></style>
