<template>
  <ImageModal
    :showLayer="showImageModal"
    :product_images="product_images"
    @changeShowLayerValue="
      () => {
        showImageModal = !showImageModal;
      }
    "
  />
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

      <div class="mt-20 mb-40 flex flex-col mx-10 md:mx-0 lg:flex-row gap-4">
        <div class="hidden lg:flex lg:flex-col gap-4">
          <div
            v-for="(image, index) in product_images"
            :key="index"
            class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
          >
            <img
              @click="
                showImageModal = true;
                console.log(
                  'basylan iamge-in path-y ',
                  IMAGE_BASE_URL + image.img_path
                );
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
              showImageModal = true;
              console.log(
                'basylan iamge-in path-y ',
                IMAGE_BASE_URL + product.main_image
              );
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
                  showImageModal = true;
                  console.log(
                    'basylan iamge-in path-y ',
                    IMAGE_BASE_URL + image.img_path
                  );
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
                showImageModal = true;
                console.log(
                  'basylan iamge-in path-y ',
                  IMAGE_BASE_URL + product.main_image
                );
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
          <div v-if="product.colors" class="flex gap-6 mt-2 items-center">
            <div class="text-lg lg:text-xl">Colours:</div>
            <div class="flex gap-2 items-center">
              <input
                name="myRadioGroup1"
                type="radio"
                class="appearance-none rounded-full w-5 h-5 cursor-pointer border-4 accent-neutral-50 border-black transition-all"
              />
              <input
                name="myRadioGroup1"
                type="radio"
                class="appearance-none rounded-full w-5 h-5 cursor-pointer border-4 accent-neutral-50 bg-red-400 transition-all"
              />

              <!-- color swatch component -->

              <!-- <v-swatches v-model="color"></v-swatches> -->
            </div>
          </div>
          <!-- size -->
          <div v-if="product.sizes" class="flex gap-6 mt-2 items-center">
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
          <div class="flex gap-4 xl:min-w-96">
            <!-- add to cart -->
            <div
              v-if="!useCartStore.cartProducts.some((p) => p.id == product.id)"
              @click="
                showSuccessToast();
                useCartStore.addProduct(product);
              "
              class="bg-black w-full h-11 rounded text-base text-neutral-50 font-medium flex items-center justify-center py-2 cursor-pointer hover:bg-black/80 transition duration-300"
            >
              Add To Cart
            </div>
            <!-- quantity -->
            <div v-else class="flex gap-4">
              <div class="flex">
                <!-- descrease -->
                <div
                  @click="useCartStore.addProduct(product, false)"
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
                  {{
                    useCartStore.cartProducts.filter(
                      (p) => p.id === product.id
                    )[0]?.count
                  }}
                </div>
                <!-- plus button -->
                <div
                  @click="useCartStore.addProduct(product)"
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
                  @click=""
                  class="hover:bg-red-300 select-none h-8 lg:h-11 w-32 lg:w-40 flex items-center justify-center text-neutral-50 bg-red-400 rounded-sm cursor-pointer"
                >
                  Buy Now
                </div>
              </div>
            </div>
            <div
              @click="toggleLike"
              class="h-8 lg:h-11 w-7 lg:w-10 flex items-center border cursor-pointer rounded-sm justify-center focus:shadow-2xl focus:outline-none active:bg-gray-200/90"
            >
              <!-- heart icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                :class="{
                  'text-red-300': useLikedStore.likedProducts.some(
                    (p) => p.id === product.id
                  ),
                  'text-black': !useLikedStore.likedProducts.some(
                    (p) => p.id === product.id
                  ),
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
          <div>
            <!-- free delivery -->
            <div
              class="mt-4 lg:mt-6 border rounded-tl-sm rounded-tr-sm h-16 md:h-20 lg:h-24 flex items-center"
            >
              <div class="h-12 ml-2 lg:ml-4 flex gap-2 lg:gap-4 items-center">
                <img
                  class="select-none"
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
                  class="select-none"
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
    <div class="mx-9 md:mx-0 mb-10 md:mt-15">
      <RelatedItem :products="products" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
// import VSwatches from "vue-swatches";
// import VSwatches from 'vue-swatches'

// Import the styles too, globally
// import 'vue-swatches/dist/vue-swatches.css'
import { useRoute, useRouter } from "vue-router";
// import LightBox from 'vue-image-lightbox'
import RelatedItem from "../../components/product/RelatedItem.vue";
import ImageModal from "../../components/modal/ImageModal.vue";
import { useCart, useLiked, useToast } from "../../stores/stores";

const useLikedStore = useLiked();
const toastStore = useToast();
const useCartStore = useCart();

// const color = "#1CA085";
const showImageModal = ref(false);
const BASE_URL = "http://localhost:3000/";
const IMAGE_BASE_URL = "http://localhost:3000/uploads/images/";
const products = ref([]);
const product = ref({});
const product_images = ref([]);
const modal_images = ref([]);
const sizes = ref(["XS", "S", "M", "L", "XL"]);
const selectedSize = ref({});
const count = ref(1);

const route = useRoute();
const router = useRouter();

const isLiked = computed(() =>
  useLikedStore.likedProducts.some((p) => p.id === product.value.id)
);

const toggleLike = () => {
  if (isLiked.value) {
    useLikedStore.removeProduct(product.value);
  } else {
    useLikedStore.addProduct(product.value);
  }
};

const showSuccessToast = () => {
  toastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "success",
  });
};
// const addCartProduct = (prod, number = 1) => {
//   let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");

//   // Bar bolsa count-y artdyr, ýok bolsa täze goş
//   let existingProduct = cartProducts.find((p) => p.id === prod.id);

//   if (existingProduct) {
//     existingProduct.count += number;
//   } else {
//     prod.count = 1;
//     cartProducts.push(prod);
//   }

//   localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
// };
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
        modal_images.value.push(
          IMAGE_BASE_URL + String(product.value.main_image)
        );
        console.log(" img modal ucin :" + modal_images.value);

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
        // her bir suraty modal üçin array-a geçir!
        product_images.value.forEach((image) => {
          modal_images.value.push(IMAGE_BASE_URL + String(image.img_path));
        });
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
