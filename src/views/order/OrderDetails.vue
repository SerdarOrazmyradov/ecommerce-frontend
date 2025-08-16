<template>
  <section class="bg-white py-8 antialiased md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl">
        <div class="gap-4 sm:flex sm:items-center sm:justify-between">
          <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            {{ t("orderId") + orderID }}
          </h2>
        </div>
        <div class="mt-6 flow-root  sm:mt-8">
          <div class="divide-y divide-gray-200">
            <div class="flex flex-wrap items-center gap-y-4 py-6 hidden">
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("productImage") }}:
                </dt>

                <dd class="mt-1.5 text-base font-semibold text-gray-900">
                  <a href="#" class="hover:underline">#{{ order.id }}</a>
                </dd>
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("name") }}:
                </dt>
              </dl>
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("date") }}:
                </dt>
              </dl>
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("price") }}:
                </dt>
              </dl>
            </div>
            <div
              class="flex flex-wrap items-center gap-y-4 py-6"
              v-for="(orderItem, index) in orderItems"
            >
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("productImage") }}:
                </dt>
                <img
                  :src="orderItem.product.main_image"
                  class="size-32 object-scale-down"
                />
                <!-- <dd class="mt-1.5 text-base font-semibold text-gray-900">
                  <a href="#" class="hover:underline">#{{ order.id }}</a>
                </dd> -->
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("name") }}:
                </dt>
                <dd class="h-32 mt-1.5 text-base font-semibold text-gray-900">
                  {{ orderItem.product.name }}
                </dd>
              </dl>
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("date") }}:
                </dt>
                <dd class="h-32 mt-1.5 text-base font-semibold text-gray-900">
                  {{
                    new Date(order.created_at).toLocaleDateString(
                      $i18n.locale,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  }}
                </dd>
              </dl>
              <dl class="w-1/2 sm:w-1/4 lg:w-auto ">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("price") }}:
                </dt>
                <dd class="h-32 mt-1.5 text-base font-semibold text-gray-900">
                  ${{ orderItem.product.price }}
                </dd>
              </dl>
              <!-- 
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  Total Price:
                </dt>
                <dd class="mt-1.5 h-32 text-base font-semibold text-gray-900">
                  ${{ orderItem.product  }}
                </dd>
              </dl> -->

              <!-- <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Name</dt>

                <dd
                  class="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                >
                  {{ orderItem.product.name }}
                </dd>
              </dl> -->

              <!-- <div
                class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
              >
                <RouterLink
                  :to="{ name: 'productlist' }"
                  type="button"
                  class="w-full inline-flex justify-center rounded-lg bg-green-400 px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 lg:w-auto"
                >
                  Order again
                </RouterLink>
                <router-link
                  :to="{ name: 'orderdetails', params: { id: order.id } }"
                  type="button"
                  class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                >
                  View details
                </router-link>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Order Id: {{ orderID }}</h4>
      </div>
    </div>

    <div
      v-for="(orderItem, index) in orderItems"
      :key="index"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-1"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <img
          :src="orderItem.product.main_image"
          class="w-100 card-img-top embed-responsive-item"
        />
        <hr />
      </div>

      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">{{ orderItem.product.name }}</h6>
          <p id="item-price" class="mb-0 font-weight-bold">
            ${{ orderItem.product.price }} per unit
          </p>
          <p id="item-quantity" class="mb-0">
            Quantity : {{ orderItem.quantity }}
          </p>
          <p id="item-total-price" class="mb-0">
            Total Price : $<span class="font-weight-bold">{{
              orderItem.product.price * orderItem.quantity
            }}</span>
          </p>
        </div>
      </div>
      <div class="col-1"></div>
    </div>

    <div class="total-cost pt-2 text-right">
      <h5>Total Cost : $ {{ order.totalPrice }}</h5>
    </div>
  </div> -->
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "../../stores/stores";
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

const BASE_URL = "https://ecommerce-backend-fh32.onrender.com";

const orderItems = ref([]);
const order = ref({});
const orderID = ref(0);

const route = useRoute();

const getOrder = async () => {
  try {
    const authStore = useAuth();
    const token = authStore.token;

    const response = await fetch(
      `${BASE_URL}/user/api/my-order/${orderID.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    order.value = data;

    // gelen `products` array-ini frontend üçin formatlaýarys
    orderItems.value = data.products.map((p) => ({
      quantity: 1, // eger backend quantity bermese
      product: {
        id: p.product_id,
        name: p.product_name,
        price: parseFloat(p.price),
        main_image: `${BASE_URL}/${p.main_image.replace(/\\/g, "/")}`,
      },
    }));
  } catch (error) {
    console.error("Error fetching order:", error);
  }
};

onMounted(() => {
  orderID.value = route.params.id;
  getOrder();
});
</script>

<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}

.embed-responsive .card-img-top {
  object-fit: cover;
}
</style>
