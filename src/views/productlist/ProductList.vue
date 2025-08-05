<template>
  <div
    v-if="isLoading"
    class="fixed h-svh top-0 flex items-center justify-center w-full bg-gray-300/30 z-[41]"
  >
    <loading-animation text="Loading..." />
  </div>
  <div
    class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-18"
  >
    <!-- <div class="bg-black h-px"></div> -->
    <!-- header -->
    <div class="mt-20 h-5 py-px flex items-center">
      <router-link
        to="myaccount"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
      >
        {{ t("account") }}
      </router-link>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <router-link
        :to="{ name: 'myaccount' }"
        class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
        >{{ t("myAccount") }}
      </router-link>

      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">
        {{ t("productList") }}
      </div>
    </div>
    <!-- body -->
    <div class="h-auto w-full lg:flex mb-20 sm:mb-16 lg:mb-5">
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
          <div class="text-base font-medium">{{ t("filter") }}</div>
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
        <div class="text-base font-medium my-4">{{ t("categories") }}</div>
        <div class="flex flex-col gap-2 overflow-y-scroll h-72">
          <label
            v-for="(category, index) in categories"
            :key="index"
            class="text-sm font-medium select-none"
            ><input
              type="checkbox"
              class="accent-blue-400"
              v-model="selectedCategories[JSON.parse(category.name).en]"
            />
            {{ JSON.parse(category.name)[locale] }}</label
          >
        </div>
        <!-- Clear Filters button -->
        <div class="mt-3">
          <button
            @click="clearFilters"
            class="px-4 py-2 bg-red-500 text-white rounded-md shadow duration-300 hover:bg-red-400 transition-all active:shadow-none active:translate-y-0"
            style="
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
              transform: translateY(-2px);
            "
          >
            clearFilters
          </button>
        </div>
      </div>

      <!-- divider -->
      <!-- <div
        ref="divider"
        class="w-px relative top-16 bg-gray-300 hidden lg:block"
      ></div> -->
      <!-- products side -->
      <div
        class="lg:border-l border-gray-300 relative mx-auto left-0 top-16 max-h-none lg:px-10 max-w-xl md:min-w-3xl lg:min-w-[800px] xl:min-w-4xl"
      >
        <div class="flex justify-between flex-col sm:flex-row">
          <!-- product list text -->
          <div class="flex gap-3">
            <div class="text-lg font-medium">{{ t("productList") }}</div>
            <div class="text-lg font-extralight text-gray-500">
              ({{ total_results }})
            </div>
          </div>
          <div
            class="flex gap-6 mt-10 sm:mt-0 justify-between md:justify-normal"
          >
            <div class="flex lg:hidden relative">
              <div
                @click.stop="mFilterToggle = !mFilterToggle"
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
                <div class="text-xs font-light">{{ t("filter") }}</div>
              </div>
              <!-- dropdown filter tools -->
              <transition name="mFilterFade" class="absolute z-40 top-10">
                <div ref="dropdownMenuMobile" v-if="mFilterToggle">
                  <div class="w-52 px-5 py-2 rounded-sm bg-gray-200">
                    <!-- close button -->
                    <!-- <div class="flex w-full justify-end">
                      <div class=""></div>
                    </div> -->

                    <div class="text-base font-medium my-4">
                      {{ t("categories") }}
                    </div>
                    <div class="flex flex-col gap-2">
                      <label
                        v-for="(category, index) in categories"
                        :key="index"
                        class="text-sm font-medium select-none"
                        ><input
                          type="checkbox"
                          class="accent-blue-400"
                          v-model="
                            selectedCategories[JSON.parse(category.name).en]
                          "
                        />
                        {{ JSON.parse(category.name)[locale] }}</label
                      >
                    </div>
                    <!-- <div class="text-base font-medium my-4">Price</div> -->
                    <div class="flex hidden flex-col gap-2">
                      <Slider range v-model="value" class="w-44 bg-red-400" />
                    </div>
                    <div class="flex mt-4 w-full justify-end">
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
            <SortBy v-model:sort_by="sort_by" />
          </div>
        </div>
        <!--products list  -->
        <div
          id="productlist"
          class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-3 md:gap-10"
        >
          <ProductCard
            v-for="(product, index) in sortedProducts"
            :key="index"
            :product="product"
          />

          <!-- <ProductCard :product="products[1]" />
            <ProductCard :product="products[2]" /> -->
        </div>

        <!-- <router-link
          v-for="page in visiblePages"
          :key="page"
          :to="{
            name: route.name,
            query: {
              ...route.query,
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
                ...route.query,
                page: Number(route.query.page) - 1,
              },
            }"
            class="px-5 py-3 hover:bg-gray-400 bg-gray-500 text-neutral-50 rounded-sm flex items-center gap-2 transition-all duration-200 ease-in-out"
          >
            <i class="fas fa-chevron-left"></i>
            {{ t("previous") }}
          </router-link>

          <div class="flex gap-2 mx-2 my-0" v-if="total_pages > 1">
            <div>{{ route.query.page }}</div>
            <div>{{ t("of") }}</div>
            <router-link
              :to="{
                name: route.name,
                query: {
                  ...route.query,
                  page: total_pages,
                },
              }"
              >{{ total_pages }}</router-link
            >
            <div>{{ t("pages") }}</div>
          </div>

          <router-link
            v-if="(route.query.page || 1) < total_pages"
            :to="{
              name: route.name,
              query: {
                ...route.query,
                page: Number(route.query.page || 1) + 1,
              },
            }"
            class="px-5 py-3 bg-gray-500 text-neutral-50 rounded-sm flex items-center gap-2 hover:bg-gray-400 next duration-300 transition-colors active:shadow-none active:translate-y-0"
            style="
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
              transform: translateY(-2px);
            "
          >
            {{ t("next") }}
            <i class="fas fa-chevron-right"></i>
          </router-link>
          <!-- <div class="self-end">salam</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch, computed, watchEffect } from "vue";
import ProductCard from "../../components/product/ProductCard.vue";
import { useRoute, useRouter } from "vue-router";

import LoadingAnimation from "../../components/loader/LoadingAnimation.vue";
import Slider from "primevue/slider";
import SortBy from "../../components/select/SortBy.vue";
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

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
const sort_by = ref("");
const dropdownMenuMobile = ref(null);
const messageCategory = computed(() => {
  const answer = route.query.message || "exploreourproducts";
  return answer;
});
const router = useRouter();
const route = useRoute();

const categories = ref([]);
const value = ref([0, 80]);
const products = ref([]);
const visiblePages = computed(() => {
  const pages = [];
  for (let i = 1; i <= total_pages.value; i++) {
    pages.push(i);
  }
  return pages;
});
const sortedProducts = computed(() => {
  if (sort_by.value == "") return [...products.value];
  switch (sort_by.value) {
    case "low_to_high":
      return [...products.value].sort((a, b) => a.price - b.price);

    case "high_to_low":
      return products.value.sort((a, b) => b.price - a.price);

    case "newest":
      return [...products.value].sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });

    case "user_rating":
      return [...products.value].sort((a, b) => b.rating - a.rating);

    default:
      return products.value;
  }
});
function clearFilters() {
  for (const key in selectedCategories.value) {
    selectedCategories.value[key] = false;
  }

  router.push({
    name: route.name,
    query: {
      ...route.query,
      categories: "", // URL-däki kategoriýalary hem arassala
      page: 1,
    },
  });
}
// category-ny string edip bermeli!--
const getProducts = async (page = 1, limit = 12, categories) => {
  if (messageCategory.value) {
    switch (messageCategory.value) {
      case "flashsales":
        getFlashSalesProducts(page, limit, categories);

        break;
      case "exploreourproducts":
        isLoading.value = true;
        console.log(
          "getproducts explore our products men :api ",
          BASE_URL +
            get_products_api +
            "?page=" +
            page +
            "&limit=" +
            limit +
            "&categories=" +
            categories
        );

        fetch(
          BASE_URL +
            get_products_api +
            "?page=" +
            page +
            "&limit=" +
            limit +
            "&categories=" +
            categories,
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
        getBestSellingProducts(page, limit, categories);
        break;
    }
  } else {
    isLoading.value = true;
    fetch(
      BASE_URL +
        get_products_api +
        "?page=" +
        page +
        "&limit=" +
        limit +
        "&categories=" +
        categories,
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

          // redirect
        } else {
          console.log("success false :res status 200");
          console.log("res : ", data);
        }
      })
      .catch((error) => {
        console.error("Error detected -!!! : ", error);
      });
  }
};
const getCategories = async (page = 1, limit = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}${get_categories_api}?page=${page}&limit=${limit}`
      // Aşakdaky setir gerek bolsa aç
      // , { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      categories.value = data.data;
    } else {
      console.warn("API response 'success' false:", data);
    }
  } catch (error) {
    console.error("Fetch categories failed:", error);
  }
};

const getBestSellingProducts = async (
  page = 1,
  limit = 10,
  categories = ""
) => {
  isLoading.value = true;
  console.log(
    "getproducts getBestSellingProducts  men :api ",
    BASE_URL +
      get_bestsellingproducts_api +
      "?page=" +
      page +
      "&limit=" +
      limit +
      "&categories=" +
      categories
  );
  fetch(
    BASE_URL +
      get_bestsellingproducts_api +
      "?page=" +
      page +
      "&limit=" +
      limit +
      "&categories=" +
      categories,
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
      } else {
        console.log("success false :res status 200");
        console.log("res : ", data);
      }
    })
    .catch((error) => {
      console.error("Error detected -!!! : ", error);
    });
};
const getFlashSalesProducts = async (page = 1, limit = 10, categories = "") => {
  console.log(
    "getproducts getFlashSalesProducts  men :api ",
    BASE_URL +
      "/guest/api/flash_sales" +
      "?page=" +
      page +
      "&limit=" +
      limit +
      "&categories=" +
      categories
  );
  isLoading.value = true;
  fetch(
    BASE_URL +
      "/guest/api/flash_sales" +
      "?page=" +
      page +
      "&limit=" +
      limit +
      "&categories=" +
      categories,
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

watch(sort_by, (newVal) => {
  console.log(
    `watch(
  sort_by 
 men : products`,
    products.value
  );

  router.push({
    name: route.name,
    query: {
      ...route.query,
      sort_by: newVal,
    },
  });
});
watch(
  selectedCategories,
  (newVal) => {
    console.log(
      `watch(
  selectedCategories 
 men : products`,
      products.value
    );
    if (Object.keys(newVal).length > 0) {
      const sel_cat = Object.keys(newVal).filter((c) => newVal[c]);

      router.push({
        name: route.name,
        query: {
          ...route.query,
          categories: sel_cat.join(","),
          page: 1,
        },
      });
    }
  },
  { deep: true }
);
watchEffect(async () => {
  await getCategories();
  const selected = route.query.categories;
  console.log(
    "watchEffect  men  : route.query.categories: ",
    route.query.categories
  );
  console.log("watchEffect men : products", products.value);

  if (selected) {
    // Reset selected categories
    selectedCategories.value = {};
    categories.value.forEach((cat) => {
      selectedCategories.value[JSON.parse(cat.name).en] = selected.includes(
        JSON.parse(cat.name).en
      );
    });
  }

  //   getProducts(route.query.page || 1, 12, route.query.categories || "");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
watch(
  () => [route.query.categories, route.query.page],
  async ([categoriesQuery, pageQuery]) => {
    // await getCategories();

    console.log("mende name ucin products null-!!!!");
    console.log("men pageQuery -", pageQuery);
    console.log("men categoriesQuery -", categoriesQuery);
    console.log("message yook-  ", messageCategory.value);

    await getProducts(pageQuery || 1, 12, categoriesQuery || "");
    console.log("watch men :products -  ", products.value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  { immediate: true }
);
onMounted(() => {
  // getCategories();

  mFilterToggle.value = false;
  window.addEventListener("click", (e) => {
    if (dropdownMenuMobile.value != null) {
      if (!dropdownMenuMobile.value.contains(e.target) && mFilterToggle.value) {
        mFilterToggle.value = false;
      }
    }
  });
});
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

@media (max-width: 360px) {
  #productlist {
    @apply grid-cols-1;
  }
}
</style>
