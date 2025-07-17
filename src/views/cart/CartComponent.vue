<template>
  <div class="container mx-auto px-3 md:px-5">
    <!-- header -->
    <div class="mt-20 h-5 py-px flex items-center">
      <!-- <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        Home
      </div> -->
      <router-link
        :to="{ name: 'home' }"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        Home
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">Cart</div>
    </div>
    <!-- body -->
    <div class="">
      <div
        class="overflow-x-auto max-w-6xl flex flex-col gap-8 md:gap-10 mx-auto mt-16 md:mt-20"
      >
        <!-- price,product,quantity,subtotal -->
        <div
          class="flex items-center justify-around h-14 md:h-16 py-2 overflow-x-auto"
        >
          <div class="text-sm md:text-base min-w-44 sm:min-w-56 md:min-w-96">Product</div>
          <div class="text-xs sm:text-sm md:text-base">Price</div>
          <div class="text-xs sm:text-sm md:text-base">Quantity</div>
          <div class="text-xs sm:text-sm md:text-base">Subtotal</div>
        </div>
        <!-- first product -->
        <div
          class="h-20 md:h-24 py-1 md:py-2"
          v-for="(product, index) in products"
          :key="index"
        >
          <div
            class="group flex items-center justify-around transition duration-300"
          >
            <!-- image & title -->
            <div
              class="items-center min-w-56 md:min-w-96 flex gap-3 md:gap-5 relative"
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
                :src="IMAGE_BASE_URL + product.main_image"
                alt="product"
                class="w-11 md:w-14 h-11 md:h-14"
              />
              <div class="text-sm md:text-base">{{ product.name }}</div>
            </div>
            <!-- price -->
            <div
              class="flex min-w-12 items-center justify-center text-sm md:text-base"
            >
              ${{ product.price }}
            </div>
            <!-- quantity -->
            <input
              v-model="product.count"
              type="number"
              class="flex items-center justify-center w-12 sm:w-20 md:w-24 px-1 h-9 md:h-11 outline-none border rounded-sm text-sm md:text-base"
              value="1"
            />
            <!-- subtotal -->
            <div
              class="min-w-12 flex items-center justify-center text-sm md:text-base"
            >
              ${{ product.count * product.price }}
            </div>
          </div>
        </div>

        <div class="-mt-3 md:-mt-4 w-full flex justify-between h-11 md:h-14">
          <!-- first button -->
          <div
            class="select-none cursor-pointer hover:bg-gray-100 text-sm md:text-base font-medium border rounded-sm px-4 sm:px-9 md:px-12 py-2 md:py-4"
          >
            Return To Shop
          </div>
          <!-- second button -->
          <div
            @click="
              useCartQuentityStore.setCountVal(
                products.reduce((acc, product) => acc + product.count, 0)
              );
              updateCartProduct();
            "
            class="select-none cursor-pointer hover:bg-gray-100 text-sm md:text-base font-medium border rounded-sm px-4 sm:px-9 md:px-12 py-2 md:py-4"
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
        </div>
        <!-- right side -->
        <div class="md:w-md border rounded-sm px-3 md:px-6 flex flex-col gap-4">
          <div class="mt-5 md:mt-8 text-base md:text-xl font-medium">
            Cart Total
          </div>

          <div class="flex justify-between">
            <div class="text-sm md:text-base">Subtotal:</div>
            <div class="text-sm md:text-base">${{ subtotal }}</div>
          </div>
          <div class="w-full h-px bg-gray-300"></div>
          <div class="flex justify-between">
            <div class="text-sm md:text-base">Shipping:</div>
            <div class="text-sm md:text-base">Free</div>
          </div>
          <div class="w-full h-px bg-gray-300"></div>
          <div class="flex justify-between">
            <div class="text-sm md:text-base">Total:</div>
            <div class="text-sm md:text-base">${{ subtotal }}</div>
          </div>
          <!-- checout button -->
          <div
            @click="ProceesToCheckout()"
            class="select-none cursor-pointer mb-6 md:mb-8 mx-auto bg-red-400 rounded-sm text-neutral-50 text-sm md:text-base font-medium flex justify-center items-center py-2 hover:bg-red-300 w-44 md:w-60 md:py-4 mt-4"
          >
            Procees to checkout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useLiked, useCartQuentity } from "../../stores/stores";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const useLikedStore = useLiked();
const useCartQuentityStore = useCartQuentity();

const BASE_URL = "http://localhost:3000/";
const IMAGE_BASE_URL = "http://localhost:3000/uploads/images/";
const products = ref([
  {
    title: "HAVIT HV-G92 Gamepad",
    image:
      "http://localhost:5173/best_selling/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
    price: 120,
    oldprice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id: 1,

    count: 1,
  },
  {
    title: "AK-900 Wired Keyboard",
    image:
      "http://localhost:5173/best_selling/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png",
    price: 960,
    oldprice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    id: 2,
    count: 1,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image:
      "http://localhost:5173/best_selling/gammaxx-l240-argb-1-500x500 1.png",
    price: 370,
    oldprice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    id: 3,
    count: 1,
  },

  {
    title: "S-Series Comfort Chair",
    image:
      "http://localhost:5173/best_selling/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
    price: 375,
    oldprice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id: 4,
    count: 1,
  },
]);

const getCartProducts = () => {
  products.value = JSON.parse(localStorage.getItem("cartProducts"));
  console.log(
    "cart products bahasy berlende ",
    JSON.parse(localStorage.getItem("cartProducts"))[0]
  );
};
const subtotal = computed(() =>
  products.value.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  )
);

const deleteCartProduct = (product) => {
  products.value = products.value.filter((element) => element.id != product.id);
  localStorage.setItem("cartProducts", JSON.stringify(products.value));
};
const updateCartProduct = () => {
  localStorage.setItem("cartProducts", JSON.stringify(products.value));
};
const ProceesToCheckout = () => {
  useCartQuentityStore.setCountVal(0);
  setTimeout(() => {
    router.push({
      name: "checkout",
    });
  }, 1000);
  let postmanClipboard = [
    {
      key: "status",
      value: "pending",
      description: "",
      type: "text",
      uuid: "fdfeb6a5-740d-4172-9c6a-12d289e2a4a0",
      enabled: true,
    },
    {
      key: "name",
      value: "Serdar2",
      description: "",
      type: "text",
      uuid: "ffd09cd5-3a78-4f5b-88c7-1767962f3295",
      enabled: true,
    },
    {
      key: "phone_number",
      value: "+99361358756",
      description: "",
      type: "text",
      uuid: "8c6e9bcd-caf7-41df-a581-a3b336fc898b",
      enabled: true,
    },
    {
      key: "adress",
      value: "abcd++",
      description: "",
      type: "text",
      uuid: "15f1d4d2-9c9c-499c-b53c-18bb7b80bccd",
      enabled: true,
    },
    {
      key: "note",
      value: "abcdef",
      description: "",
      type: "text",
      uuid: "86bf0b2a-45d3-4b4a-aa9e-34f3d8ff677f",
      enabled: true,
    },
    {
      key: "total_quantity",
      value: "2",
      description: "",
      type: "text",
      uuid: "65907927-7e50-4a72-9a15-13ef4323954b",
      enabled: true,
    },
    {
      key: "total_price",
      value: "4000",
      description: "",
      type: "text",
      uuid: "b46e2d3f-5589-4cf9-b667-dc50bd0194a2",
      enabled: true,
    },
    {
      key: "payment_type",
      value: "card",
      description: "",
      type: "text",
      uuid: "75cce351-59f6-4b8a-9a69-f21f0dc793e6",
      enabled: true,
    },
    {
      key: "order_items",
      description: "",
      type: "text",
      uuid: "7591f00d-39ec-4513-aa9f-fcf354c289c7",
      enabled: true,
      value:
        '{\n  "products": [\n    { "id": 1, "count": 2 },\n    { "id": 2, "count": 3 }\n  ]\n}',
    },
  ];

  // const token = localStorage.getItem("token");
  // fetch(BASE_URL + "user/api/create-order", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  //   .then((response) => {
  //     // if (!response.ok) {
  //     //   throw new Error(`HTTP error! status: ${response.status}`);
  //     // }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     if (data.success) {
  //       // redirect
  //     } else {
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error detected -!!! : ", error);
  //   });
};

onMounted(() => {
  getCartProducts();
});
</script>

<style lang="scss" scoped></style>
