<template>
  <div
    v-if="isLoading"
    class="fixed h-svh top-0 flex items-center justify-center w-full bg-gray-300/90 z-[41]"
  >
    <loading-animation text="Loading..." />
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
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">Product list</div>
    </div>
    <!-- body -->
    <div
      class="min-h-[2700px] sm:min-h-[2200px] md:min-h-[2000px] w-full lg:flex mb-20 sm:mb-16 lg:mb-0"
    >
      <!-- component kan yaz :kod arassa bolsun:basda işlär ýaly kod ýaz soň ýaltanman düzet bolmasa şonuň üçin hem işden çykarýarlar -->
      <!--filter side  -->
      <div class="relative left-1 top-16 h-full w-72 hidden lg:block">
        <div class="flex gap-8 items-center">
          <div
            class="flex items-center justify-center rounded-full bg-gray-300 cursor-pointer hover:bg-gray-200 w-10 h-10"
          >
            <!-- filter icon -->
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </div>
          <div class="text-base font-medium">Filter</div>
        </div>
        <!-- <div class="text-base font-medium my-4">Pick Color</div> -->
        <div class="flex gap-3">
          <!--  colors -->

          <!-- <div
            @click="
              selectedColor[color] = !selectedColor[color];
              console.log('salam ', selectedColor[color]);
            "
            v-for="(color, index) in colors"
            :key="index"
            class="rounded-full cursor-pointer w-5 h-5 flex items-center justify-center"
            :class="[
              'bg-' + color,
              { 'border border-white': selectedColor[color] },
            ]"
          >
            <i
              v-if="selectedColor[color]"
              class="fa-solid fa-check text-white text-xs"
            ></i>
          </div> -->
        </div>
        <div class="text-base font-medium my-4">Categories</div>
        <div class="flex flex-col gap-2 overflow-y-scroll h-72">
          <label
            v-for="(category, index) in categories"
            :key="index"
            class="text-sm font-medium select-none"
            ><input
              type="checkbox"
              class="accent-blue-400"
              v-model="selectedCategories[category.name]"
            />
            {{ category.name }}</label
          >
        </div>
        <div class="text-base font-medium my-4">Price</div>
        <!-- <div class="flex flex-col gap-2">
          <label
            v-for="(price, index) in prices"
            :key="index"
            class="text-sm font-medium"
            ><input type="checkbox" class="accent-blue-400" />
            {{ price }}</label
          >
        </div> -->
        <Slider v-model="value" :min="20" :max="80" range class="w-56" />

        <!-- <Slider v-model="value" range class="w-56" /> -->
      </div>

      <!-- divider -->
      <div
        class="w-px h-[1732px] relative top-16 bg-gray-300 hidden lg:block"
      ></div>
      <!-- products side -->
      <div
        class="relative left-0 top-16 h-full lg:px-10 max-w-xl md:min-w-3xl lg:min-w-[800px] xl:min-w-5xl 2xl:min-w-6xl"
      >
        <div class="flex justify-between flex-col sm:flex-row">
          <!-- product list text -->
          <div class="flex gap-3">
            <div class="text-lg font-medium">Product List</div>
            <div class="text-lg font-extralight text-gray-500">
              ({{ total_results }})
            </div>
          </div>
          <div
            class="flex gap-6 mt-10 sm:mt-0 justify-between md:justify-normal"
          >
            <div class="flex lg:hidden relative">
              <div
                @click="
                  mFilterToggle = !mFilterToggle;
                  console.log(mFilterToggle);
                "
                class="flex gap-3 items-center cursor-pointer"
              >
                <div
                  class="flex items-center justify-center rounded-full bg-gray-300 cursor-pointer hover:bg-gray-200 w-7 h-7"
                >
                  <!-- filter icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                </div>
                <div class="text-xs font-light">Filter</div>
              </div>
              <!-- dropdown filter tools -->
              <transition name="mFilterFade" class="absolute z-40 top-10">
                <div v-if="mFilterToggle">
                  <div class="w-52 px-5 py-2 rounded-sm bg-gray-200">
                    <!-- close button -->
                    <!-- <div class="flex w-full justify-end">
                      <div class=""></div>
                    </div> -->
                    <div class="text-base font-medium my-4">Pick Color</div>
                    <div class="flex gap-3">
                      <!--  colors -->

                      <div
                        @click="
                          selectedColor[color] = !selectedColor[color];
                          console.log('salam ', selectedColor[color]);
                        "
                        v-for="(color, index) in colors"
                        :key="index"
                        class="rounded-full cursor-pointer w-5 h-5 flex items-center justify-center"
                        :class="[
                          'bg-' + color,
                          { 'border border-white': selectedColor[color] },
                        ]"
                      >
                        <i
                          v-if="selectedColor[color]"
                          class="fa-solid fa-check text-white text-xs"
                        ></i>
                      </div>
                    </div>
                    <div class="text-base font-medium my-4">Categories</div>
                    <div class="flex flex-col gap-2">
                      <label
                        v-for="(category, index) in categories"
                        :key="index"
                        class="text-sm font-medium select-none"
                        ><input
                          type="checkbox"
                          class="accent-blue-400"
                          v-model="selectedCategories[category.name]"
                        />
                        {{ category.name }}</label
                      >
                    </div>
                    <div class="text-base font-medium my-4">Price</div>
                    <div class="flex flex-col gap-2">
                      <!-- <label
                        v-for="(price, index) in prices"
                        :key="index"
                        class="text-sm font-medium"
                        ><input type="checkbox" class="accent-blue-400" />
                        {{ price }}</label
                      > -->
                      <Slider range v-model="value" class="w-44" />
                    </div>
                    <div class="flex w-full justify-end">
                      <div
                        @click="mFilterToggle = false"
                        class="py-2 px-2 rounded-sm bg-blue-400 text-neutral-50 hover:bg-blue-300 cursor-pointer"
                      >
                        Done
                      </div>
                    </div>
                  </div>
                </div></transition
              >
            </div>
            <!-- sort by -->
            <div class="flex items-center gap-4">
              <div class="text-xs font-light">Sort by</div>
              <select
                v-model="sort_by"
                class="outline-none py-2 px-2 rounded-sm border border-gray-300 text-xs font-light"
                name=""
                id=""
              >
                <option class="text-xs font-light" value="low_to_high">
                  Low to High
                </option>
                <option class="text-xs font-light" value="high_to_low">
                  High to Low
                </option>
                <option class="text-xs font-light" value="newest">
                  newest
                </option>
                <option class="text-xs font-light" value="user_rating">
                  user rating
                </option>
                <!-- <option class="text-xs font-light" value="best-selling">
                  best-selling
                </option> -->
              </select>
            </div>
          </div>
        </div>
        <!--products list  -->
        <div
          class="md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-rows-5 lg:grid-rows-4 xl:grid-rows-3 mt-10 gap-10"
        >
          <ProductCard
            v-for="(product, index) in sortedProducts"
            :key="index"
            :product="product"
          />

          <!-- <ProductCard :product="products[1]" />
          <ProductCard :product="products[2]" /> -->
        </div>

        <!-- pagination -->
        <div
          v-if="products.length > 0 && total_pages > 0"
          class="flex justify-center items-center gap-4 mt-12 flex-wrap"
        >
          <router-link
            v-if="route.query.page > 1"
            :to="{
              name: route.name,
              query: {
                page: Number(route.query.page) - 1,
              },
            }"
            class="px-5 py-3 hover:bg-gray-200 bg-gray-300 text-neutral-50 rounded-sm flex items-center gap-2 transition-all duration-200 ease-in-out"
          >
            <i class="fas fa-chevron-left"></i>
            Previous
          </router-link>

          <div class="flex gap-2 order-1 w-full justify-center mx-2 my-0">
            <!-- <router-link
              v-for="page in visiblePages"
              :key="page"
              :to="{
                name: route.name,
                query: {
                  page: page,
                },
              }"
              :class="[
                'px-5 py-3 min-w-10 text-center bg-gray-300 text-neutral-50  rounded-sm  transition-all duration-200  hover:bg-gray-200',
                { 'bg-gray-200 ': Number(route.query.page || 1) === page },
              ]"
            >
              {{ page }}
            </router-link> -->
          </div>

          <router-link
            v-if="(route.query.page || 1) < total_pages"
            :to="{
              name: route.name,
              query: {
                page: Number(route.query.page || 1) + 1,
              },
            }"
            class="px-5 py-3 bg-gray-300 text-neutral-50 rounded-sm flex items-center gap-2 transition-all duration-200 hover:bg-gray-200 next"
          >
            Next
            <i class="fas fa-chevron-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch, computed } from "vue";
import ProductCard from "../../components/product/ProductCard.vue";
import { useRoute, useRouter } from "vue-router";

import LoadingAnimation from "../../components/loader/LoadingAnimation.vue";
import Slider from "primevue/slider";

const BASE_URL = "http://localhost:3000";
const get_products_api = "/guest/api/get-products";
const get_categories_api = "/guest/api/categories";
const get_bestsellingproducts_api = "/guest/api/best_selling";
const selectedColor = ref({});
const selectedCategories = ref({});
const mFilterToggle = ref(false);
const isLoading = ref(false);
const total_pages = ref(0);
const total_results = ref(0);
// const sort_by = ref("low_to_high");
const sort_by = ref("");
const messageCategory = computed(() => {
  const answer = route.query.message || "";
  return answer;
});
const router = useRouter();
const route = useRoute();
const colors = ref([
  "pink-300",
  "orange-500",
  "indigo-900",
  "red-400",
  "green-400",
]);
const categories = ref([
  "Terra Nova",
  "ChronoTech",
  "Verdant Bloom",
  "Aether Studios",
  "Boreal Brewing Co.",
]);
// const prices = ref(["50-100", "100-150", "150-200", "200-250", "250-300"]);
const value = ref([0, 80]);
const products = ref([]);

const sortedProducts = computed(() => {
  if (sort_by.value == "") return [...products.value];
  // if (sort_by.value == "best-selling") {
  //   const best_selling_page = route.query.page || 1;
  //   fetch(
  //     BASE_URL + get_bestsellingproducts_api + "?page=" + best_selling_page,
  //     {
  //       method: "GET",
  //       // headers: {
  //       //   Authorization: `Bearer ${token}`,
  //       // },
  //     }
  //   )
  //     .then((response) => {
  //       // if (!response.ok) {
  //       //   throw new Error(`HTTP error! status: ${response.status}`);
  //       // }
  //       return response.json();
  //     })
  //     .then(async (data) => {
  //       isLoading.value = false;
  //       const test = ref(null);
  //       test.value = data;
  //       if (data.success) {
  //         total_pages.value = data.total_pages;
  //         total_results.value = data.total_results;
  //         // sortedProducts.value = [...data.details];
  //         // şunda  ýalňyş bar!
  //         // redirect
  //       } else {
  //         console.log("success false :res status 200");
  //         console.log("res : ", data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error detected -!!! : ", error);
  //     });
  // }
  switch (sort_by.value) {
    case "low_to_high":
      // console.log(
      //   "saylanan cetegory-lar ucin test : ",
      //   Object.values(selectedCategories.value).indexOf(true)
      // );
      // let sel_cat = [];

      // sel_cat = Object.keys(selectedCategories.value).filter(
      //   (c) => selectedCategories.value[c]
      // );

      // console.log("selected category ", sel_cat);
      // let newProducts = [
      //   ...products.value.filter((p) => (p.category_name)),
      // ];
      total_results.value = products.value.length;
      return [...products.value].sort((a, b) => a.price - b.price);

    // return [...products.value].sort((a, b) => a.price - b.price);

    case "high_to_low":
      // let sel_cat1 = [];

      // sel_cat1 = Object.keys(selectedCategories.value).filter(
      //   (c) => selectedCategories.value[c]
      // );

      // console.log("selected category ", sel_cat1);
      // let newProducts1 = [
      //   ...products.value.filter((p) => sel_cat1.includes(p.category_name)),
      // ];
      total_results.value = products.value.length;
      return products.value.sort((a, b) => b.price - a.price);

    // return [...products.value].sort((a, b) => b.price - a.price);

    case "newest":
      // let sel_cat2 = [];

      // sel_cat2 = Object.keys(selectedCategories.value).filter(
      //   (c) => selectedCategories.value[c]
      // );

      // console.log("selected category ", sel_cat2);
      // let newProducts2 = [
      //   ...products.value.filter((p) => sel_cat2.includes(p.category_name)),
      // ];
      total_results.value = products.value.length;
      return [...products.value].sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });

    // return [...products.value].sort((a, b) => {
    //   const dateA = new Date(a.created_at);
    //   const dateB = new Date(b.created_at);
    //   return dateB - dateA;
    // });
    case "user_rating":
      // let sel_cat3 = [];

      // sel_cat3 = Object.keys(selectedCategories.value).filter(
      //   (c) => selectedCategories.value[c]
      // );

      // console.log("selected category ", sel_cat3);
      // let newProducts3 = [
      //   ...products.value.filter((p) => sel_cat3.includes(p.category_name)),
      // ];
      total_results.value = products.value.length;
      return [...products.value].sort((a, b) => b.rating - a.rating);

    // return [...products.value].sort((a, b) => b.rating - a.rating);

    default:
      return products.value;
  }
});
const filteredProducts = computed(() => {
  let sel_cat = [];
  sel_cat = Object.keys(selectedCategories.value).filter(
    (c) => selectedCategories.value[c]
  );
  console.log("selected products ", sel_cat);

  return sel_cat;

  // if (sort_by.value == "") return [...products.value];
  // if (sort_by.value == "best-selling") {
  //   const best_selling_page = route.query.page || 1;
  //   fetch(
  //     BASE_URL + get_bestsellingproducts_api + "?page=" + best_selling_page,
  //     {
  //       method: "GET",
  //       // headers: {
  //       //   Authorization: `Bearer ${token}`,
  //       // },
  //     }
  //   )
  //     .then((response) => {
  //       // if (!response.ok) {
  //       //   throw new Error(`HTTP error! status: ${response.status}`);
  //       // }
  //       return response.json();
  //     })
  //     .then(async (data) => {
  //       isLoading.value = false;
  //       const test = ref(null);
  //       test.value = data;
  //       if (data.success) {
  //         total_pages.value = data.total_pages;
  //         total_results.value = data.total_results;
  //         // sortedProducts.value = [...data.details];
  //         // şunda  ýalňyş bar!
  //         // redirect
  //       } else {
  //         console.log("success false :res status 200");
  //         console.log("res : ", data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error detected -!!! : ", error);
  //     });
  // }
  // switch (sort_by.value) {
  //   case "low_to_high":
  //     // console.log(
  //     //   "saylanan cetegory-lar ucin test : ",
  //     //   Object.values(selectedCategories.value).indexOf(true)
  //     // );
  //     // let sel_cat = [];

  //     // sel_cat = Object.keys(selectedCategories.value).filter(
  //     //   (c) => selectedCategories.value[c]
  //     // );

  //     // console.log("selected category ", sel_cat);
  //     // let newProducts = [
  //     //   ...products.value.filter((p) => (p.category_name)),
  //     // ];
  //     total_results.value = products.value.length;
  //     return [...products.value].sort((a, b) => a.price - b.price);

  //   // return [...products.value].sort((a, b) => a.price - b.price);

  //   case "high_to_low":
  //     // let sel_cat1 = [];

  //     // sel_cat1 = Object.keys(selectedCategories.value).filter(
  //     //   (c) => selectedCategories.value[c]
  //     // );

  //     console.log("selected category ", sel_cat1);
  //     // let newProducts1 = [
  //     //   ...products.value.filter((p) => sel_cat1.includes(p.category_name)),
  //     // ];
  //     total_results.value = products.value.length;
  //     return [...products.value];

  //   // return [...products.value].sort((a, b) => b.price - a.price);

  //   case "newest":
  //     // let sel_cat2 = [];

  //     // sel_cat2 = Object.keys(selectedCategories.value).filter(
  //     //   (c) => selectedCategories.value[c]
  //     // );

  //     // console.log("selected category ", sel_cat2);
  //     // let newProducts2 = [
  //     //   ...products.value.filter((p) => sel_cat2.includes(p.category_name)),
  //     // ];
  //     total_results.value = products.value.length;
  //     return [...products.value];

  //   // return [...products.value].sort((a, b) => {
  //   //   const dateA = new Date(a.created_at);
  //   //   const dateB = new Date(b.created_at);
  //   //   return dateB - dateA;
  //   // });
  //   case "user_rating":
  //     // let sel_cat3 = [];

  //     // sel_cat3 = Object.keys(selectedCategories.value).filter(
  //     //   (c) => selectedCategories.value[c]
  //     // );

  //     // console.log("selected category ", sel_cat3);
  //     // let newProducts3 = [
  //     //   ...products.value.filter((p) => sel_cat3.includes(p.category_name)),
  //     // ];
  //     total_results.value = products.value.length;
  //     return [...products.value];

  //   // return [...products.value].sort((a, b) => b.rating - a.rating);

  //   default:
  //     return [...products.value];
  // }
});

const getProducts = (page = 1, limit = 10) => {
  if (messageCategory.value) {
    switch (messageCategory.value) {
      case "flashsales":
        getFlashSalesProducts(page);
        break;
      case "exploreourproducts":
        isLoading.value = true;
        fetch(
          BASE_URL + get_products_api + "?page=" + page + "&limit=" + limit,
          {
            method: "GET",
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          }
        )
          .then((response) => {
            // if (!response.ok) {
            //   throw new Error(`HTTP error! status: ${response.status}`);
            // }
            return response.json();
          })
          .then((data) => {
            isLoading.value = false;
            console.log(data);
            if (data.success) {
              products.value = data.data;
              total_pages.value = data.total_pages;
              total_results.value = data.total_results;

              console.log("fech-lenen product list: maglumat ", products.value);
              console.log("fech-lende total page sany ", total_pages.value);

              // redirect
            } else {
              console.log("success false :res status 200");
              console.log("res : ", data);
            }
          })
          .catch((error) => {
            console.error("Error detected -!!! : ", error);
          });
        break;
      case "bestselling":
        getBestSellingProducts(page, limit);
        break;
    }
  }
};
const getCategories = (page = 1, limit = 20) => {
  // isLoading.value = true;
  fetch(BASE_URL + get_categories_api + "?page=" + page + "&limit=" + limit, {
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
      // isLoading.value = false;
      console.log("categories ", data);
      if (data.success) {
        categories.value = data.data;
        // categories.value.forEach((element) => {
        //   selectedCategories.value[element.name] = true;
        // });
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
};

const getBestSellingProducts = (page = 1, limit = 10) => {
  isLoading.value = true;
  fetch(
    BASE_URL +
      get_bestsellingproducts_api +
      "?page=" +
      page +
      "&limit=" +
      limit,
    {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }
  )
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      isLoading.value = false;
      console.log(data);

      console.log("test edyan best selling products ", data);

      if (data.success) {
        products.value = data.details;
        total_pages.value = data.total_pages;
        total_results.value = data.total_results;

        return [...data.details];
        // redirect
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
};
const getFlashSalesProducts = (page = 1, limit = 10) => {
  isLoading.value = true;
  fetch(
    BASE_URL + "/guest/api/flash_sales" + "?page=" + page + "&limit=" + limit,
    {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }
  )
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      isLoading.value = false;
      console.log(data);

      console.log("test edyan best selling products ", data);

      if (data.success) {
        products.value = data.details;
        total_pages.value = data.total_pages;
        total_results.value = data.total_results;

        return [...data.details];
        // redirect
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
};

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// watch(
//   () => route.query.page,
//   (newVal, oldVal) => {
//     getProducts(newVal);
//     getCategories();
//   },
//   { immediate: true }
//   // { deep: true }
// );

watch(
  () => [route.query.categories, route.query.page],
  (newVal) => {
    isLoading.value = true;
    if (newVal[0]) {
      newVal[0].split(",").map((c) => {
        selectedCategories.value[c] = true;
      });

      let sel_cat = Object.keys(selectedCategories.value).filter(
        (c) => selectedCategories.value[c]
      );

      fetch(
        // http://localhost:3000/guest/api/get-products?page=1&categories=
        BASE_URL +
          "/guest/api/get-products" +
          "?page=" +
          newVal[1] +
          "&categories=" +
          sel_cat.toString(),
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: `Bearer ${token}`,
          // },
          // body: JSON.stringify(postData),
        }
      )
        .then((response) => {
          // if (!response.ok) {
          //   throw new Error(`HTTP error! status: ${response.status}`);
          // }
          return response.json();
        })
        .then((data) => {
          isLoading.value = false;

          console.log(data);
          if (data.success) {
            // products.value = data.data;
          } else {
          }
        })
        .catch((error) => {
          console.error("Error detected -!!! : ", error);
        });
      getCategories();
    } else {
      getProducts(newVal[1]);
      getCategories();
    }
  },
  { immediate: true }
);

// watch(
//   () => sort_by,
//   (newVal) => {
//     console.log("sort by watch-den taze bahasy :", newVal.value);

//     switch (newVal.value) {
//       case "low_to_high":
//         console.log("switch-i test edyas ", "low_to_high");

//         products.value.sort((a, b) => a.price - b.price);
//         nextTick();
//         console.log("sortlonan products -y test edyas ", products.value);

//         break;
//       case "high_to_low":
//         console.log("switch-i test edyas ", "high_to_low");
//         products.value.sort((a, b) => b.price - a.price);
//         console.log("sortlonan products -y test edyas ", products.value);
//         break;
//       case "newest":
//         console.log("switch-i test edyas ", "newest");
//         console.log("sorted by newest products");

//         break;
//       case "user_rating":
//         console.log("switch-i test edyas ", "user_rating");
//         console.log("sorted by user rating products");
//         break;
//       case "best-selling":
//         console.log("switch-i test edyas ", "best-selling");
//         console.log("sorted by best selling products");
//         break;
//       default:
//         console.log("galan ýagdaýlar üçin");
//     }

//     // getProducts(newVal);
//   }
// );

// watch(
//   () => route.query.page,
//   async (newVal) => {
//     isLoading.value = true;

//     fetch(BASE_URL + get_products_api, {
//       method: "GET",
//       // headers: {
//       //   Authorization: `Bearer ${token}`,
//       // },
//     })
//       .then((response) => {
//         // if (!response.ok) {
//         //   throw new Error(`HTTP error! status: ${response.status}`);
//         // }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         if (data.success) {
//           products.value = data.data;

//           console.log("fech-lenen product list: maglumat ", products.value);

//           // redirect
//         } else {
//           console.log("success false :res status 200");
//           console.log("res : ", data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error detected -!!! : ", error);
//       });
//     // try {
//     //   const response = await axios.get(
//     //     `https://api.themoviedb.org/3/account/22015376/favorite/movies`,
//     //     {
//     //       headers: {
//     //         Authorization: import.meta.env.VITE_API_TOKEN,
//     //         "Content-Type": "application/json",
//     //       },
//     //       params: {
//     //         language: "en-US",
//     //         sort_by: "created_at.asc",
//     //         page: route.query.page || "1",
//     //       },
//     //     }
//     //   );
//     //   total_pages.value = response.data.total_pages;
//     //   favoriteMovies.value = response.data.results;
//     //   isLoading.value = false;
//     // } catch (error) {}
//   },
//   { immediate: true }
// );
</script>

<style scoped>
.mFilterFade-enter-active,
.mFilterFade-leave-active {
  transition: opacity 0.3s;
}
.mFilterFade-enter-from,
.mFilterFade-leave-to {
  opacity: 0;
}
.mFilterFade-enter-to,
.mFilterFade-leave-from {
  opacity: 1;
}
</style>
