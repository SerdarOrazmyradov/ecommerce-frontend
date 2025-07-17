<template>
  <!-- <div
    class="w-full h-full flex items-center justify-center z-10  fixed backdrop-blur-xs "
  >
    <img
      :src="IMAGE_BASE_URL + product.main_image"
      alt="modal image"
      class=""
    />
  </div> -->

  <!-- <LightBox :media="[
  { // For image
    thumb: 'http://example.com/thumb.jpg',
    src: 'http://example.com/image.jpg',
    caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    srcset: '...' // Optional for displaying responsive images
  },
  { // For video
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    sources: [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video/mp4'
      }
    ],
    type: 'video',
    caption: '<h4>Monsters Inc.</h4>',
    width: 800, // required
    height: 600, // required
    autoplay: true //Optional to autoplay video when lightbox opens
  }]"
  ></LightBox> -->
  <div class="">
    <div class="bg-black h-px"></div>
    <div class="container px-1 md:px-4 xl:px-7 mx-auto">
      <!-- header -->
      <div class="mt-20 h-5 py-px flex items-center">
        <div
          class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
        >
          Account
        </div>
        <div
          class="h-3.5 w-[1px] ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"
        ></div>
        <div
          class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
        >
          Gaming
        </div>
        <div
          class="h-3.5 w-[1px] ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"
        ></div>
        <div class="text-xs lg:text-sm ml-3 cursor-pointer">
          {{ product.name }}
        </div>
      </div>

      <div class="mt-20 mb-40 flex flex-col lg:flex-row gap-4">
        <div class="hidden lg:flex lg:flex-col gap-4">
          <div
            v-for="(image, index) in product_images"
            :key="index"
            class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
          >
            <img
              @click="
                console.log(
                  'basylan iamge-in path-y ',
                  IMAGE_BASE_URL + image.img_path
                )
              "
              :src="IMAGE_BASE_URL + image.img_path"
              alt="practising"
              class="cursor-pointer"
            />
          </div>
        </div>
        <div
          class="hidden lg:flex flex-1 lg:w-full bg-gray-100 items-center justify-center rounded-sm"
        >
          <img
            @click="
              console.log(
                'basylan iamge-in path-y ',
                IMAGE_BASE_URL + product.main_image
              )
            "
            :src="IMAGE_BASE_URL + product.main_image"
            alt="practising"
            class="mx-auto cursor-pointer"
          />
        </div>
        <div class="flex gap-4">
          <div class="flex flex-col lg:hidden gap-4">
            <div
              v-for="(image, index) in product_images"
              :key="index"
              class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
            >
              <img
                @click="
                  console.log(
                    'basylan iamge-in path-y ',
                    IMAGE_BASE_URL + image.img_path
                  )
                "
                :src="IMAGE_BASE_URL + image.img_path"
                alt="practising"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div
            class="lg:hidden flex flex-1 lg:w-full bg-gray-100 items-center justify-center rounded-sm"
          >
            <img
              @click="
                console.log(
                  'basylan iamge-in path-y ',
                  IMAGE_BASE_URL + product.main_image
                )
              "
              :src="IMAGE_BASE_URL + product.main_image"
              alt="practising"
              class="mx-auto cursor-pointer"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-xl lg:text-2xl font-semibold">
            {{ product.name }}
          </div>
          <div class="flex items-center gap-2">
            <!-- stars -->
            <div class="flex text-yellow-500">
              <template v-for="n in 5" :key="n"
                ><i
                  :class="n < Math.round(4) ? 'fas fa-star ' : 'far fa-star'"
                  class="sm:text-sm text-xs"
                ></i>
              </template>
            </div>
            <!-- review -->
            <div class="text-xs lg:text-sm text-gray-500">(150 Reviews)</div>
            <!-- line -->
            <div class="h-4 w-px bg-gray-500 ml-2"></div>
            <!-- stock -->
            <div
              v-if="product.stock > 0"
              class="ml-2 text-xs lg:text-sm text-[#00FF66]"
            >
              In Stock
            </div>
            <div v-else class="ml-2 text-xs lg:text-sm text-red-400 text-left">
              In Stock
            </div>
          </div>
          <div class="text-2xl">${{ product.price }}</div>
          <div class="text-xs lg:text-sm pt-2 break-normal max-w-96">
            {{ product.description }}
          </div>
          <div class="w-full mt-2 h-px bg-black/90"></div>
          <!-- colors -->
          <div class="flex gap-6 mt-2 items-center">
            <div class="text-lg lg:text-xl">Colours:</div>
            <div class="flex gap-2 items-center">
              <input
                name="myRadioGroup1"
                type="radio"
                class=" appearance-none rounded-full w-5 h-5 cursor-pointer border-4 accent-neutral-50 border-black transition-all"
              />
              <input
                name="myRadioGroup1"
                type="radio"
                class=" appearance-none rounded-full w-5 h-5 cursor-pointer border-4 accent-neutral-50 bg-red-400  transition-all"
              />
            </div>
          </div>
          <!-- size -->
          <div class="flex gap-6 mt-2 items-center">
            <div class="text-lg lg:text-xl">Size:</div>
            <div class="flex gap-4 items-center">
              <div
                @click="selectedSize[size] = !selectedSize[size]"
                v-for="(size, index) in sizes"
                :key="index"
                class="select-none w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-sm flex items-center justify-center text-xs lg:text-sm border cursor-pointer"
                :class="
                  selectedSize[size]
                    ? 'bg-red-400 border-red-400 text-neutral-50'
                    : ''
                "
              >
                {{ size }}
              </div>
            </div>
          </div>
          <!-- quantity -->
          <div class="flex gap-4">
            <div class="flex">
              <div
                @click="
                  if (count > 1) {
                    count -= 1;
                  }
                "
                class="h-8 w-7 lg:h-11 lg:w-10 flex items-center border hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer rounded-l-sm rounded-bl-sm justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </div>
              <!-- product count -->
              <div
                class="select-none h-8 w-15 lg:h-11 lg:w-20 text-lg lg:text-xl flex items-center justify-center border-y font-medium"
              >
                {{ count }}
              </div>
              <!-- plus button -->
              <div
                @click="count++"
                class="h-8 w-7 lg:h-11 lg:w-10 flex items-center border hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer rounded-r-sm rounded-br-sm justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="select-none h-8 lg:h-11 w-32 lg:w-40 flex items-center justify-center text-neutral-50 bg-red-400 rounded-sm cursor-pointer"
              >
                Buy Now
              </div>
              <div
                class="h-8 lg:h-11 w-7 lg:w-10 flex items-center border hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer rounded-sm justify-center"
              >
                <!-- heart icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <!-- free delivery -->
            <div
              class="mt-4 lg:mt-6 border rounded-tl-sm rounded-tr-sm h-16 md:h-20 lg:h-24 flex items-center"
            >
              <div class="h-12 ml-2 lg:ml-4 flex gap-2 lg:gap-4 items-center">
                <img
                  src="../../../public/icons/icon-delivery (1).png"
                  alt="icon delivary"
                />
                <div class="flex flex-col gap-2">
                  <div class="select-none text-sm lg:text-base font-medium">
                    Free Delivery
                  </div>
                  <div
                    class="select-none underline text-xs/4 lg:text-xs font-medium cursor-pointer"
                  >
                    Enter your postal code for Delivery Availability
                  </div>
                </div>
              </div>
            </div>
            <div
              class="border-x border-b rounded-br-sm rounded-bl-sm h-16 md:h-20 lg:h-24 flex items-center"
            >
              <div class="h-12 ml-2 lg:ml-4 flex gap-2 lg:gap-4 items-center">
                <img
                  src="../../../public/icons/Icon-return.png"
                  alt="icon delivary"
                />
                <div class="flex flex-col gap-2">
                  <div class="select-none text-sm lg:text-base font-medium">
                    Return Delivery
                  </div>
                  <div class="select-none text-xs/4 lg:text-xs font-medium">
                    Free 30 Days Delivery Returns.
                    <span class="underline text-xs font-medium cursor-pointer">
                      Details</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- related item -->
    <RelatedItem :products="products" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
// import LightBox from 'vue-image-lightbox'
import RelatedItem from "../../components/product/RelatedItem.vue";

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
  },
]);
const product = ref({});
const product_images = ref([]);
const sizes = ref(["XS", "S", "M", "L", "XL"]);
const selectedSize = ref({});
const count = ref(1);

const route = useRoute();
const router = useRouter();
//image click  bolanda modal açylmaly onuň üçin  bolsa  adyny almaly
const fetchProductById = (id) => {
  // product detatils fetching
  fetch(BASE_URL + "guest/api/product/" + id, {
    method: "GET",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  })
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        product.value = data.details;

        console.log("fetch-lenen  maglumat !-", product.value);
      } else {
        console.log("res status 200 ýöne success false");
      }
    })
    .catch((error) => {
      console.error("Error detected !!!- :", error);
    });
  // product images fetching

  fetch(BASE_URL + "guest/api/product-images/" + id, {
    method: "GET",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  })
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        product_images.value = data.details;

        console.log("fetch-lenen  maglumat !-", product_images.value);
      } else {
        console.log("res status 200 ýöne success false");
      }
    })
    .catch((error) => {
      console.error("Error detected !!!- :", error);
    });
};

onMounted(() => {});
watch(
  () => route.params.id,
  (newVal, oldVal) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductById(newVal);

    console.log("new val ", newVal);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
