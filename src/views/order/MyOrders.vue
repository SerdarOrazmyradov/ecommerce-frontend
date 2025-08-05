<template>
  <section class="bg-white py-8 antialiased md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl">
        <div class="gap-4 sm:flex sm:items-center sm:justify-between">
          <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            {{ t("myOrdersTitle") }}
          </h2>
        </div>
        <div class="mt-6 flow-root sm:mt-8">
          <div class="divide-y divide-gray-200">
            <div
              class="flex flex-wrap items-center gap-y-4 py-6"
              v-for="order in orders.orders"
            >
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("orderID") }}
                </dt>
                <dd class="mt-1.5 text-base font-semibold text-gray-900">
                  <a href="#" class="hover:underline">#{{ order.id }}</a>
                </dd>
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("date") }}:
                </dt>
                <dd class="mt-1.5 text-base font-semibold text-gray-900">
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

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("price") }}:
                </dt>
                <dd class="mt-1.5 text-base font-semibold text-gray-900">
                  ${{ order.total_price }}
                </dd>
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">
                  {{ t("status") }}
                </dt>

                <dd
                  v-if="order.ispaid"
                  class="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                >
                  <svg
                    class="me-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11.917 9.724 16.5 19 7.5"
                    />
                  </svg>
                  {{ t("paid") }}
                </dd>
                <dd
                  v-else
                  class="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800"
                >
                  <i class="fa-solid fa-xmark mr-1"></i>
                  {{ t("unpaid") }}
                </dd>
              </dl>

              <div
                class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
              >
                <RouterLink
                  :to="{ name: 'productlist' }"
                  type="button"
                  class="w-full inline-flex justify-center rounded-lg bg-green-400 px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 lg:w-auto"
                >
                  {{ t("orderAgainButton") }}
                </RouterLink>
                <router-link
                  :to="{ name: 'orderdetails', params: { id: order.id } }"
                  type="button"
                  class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto"
                >
                  {{ t("viewDetailsButton") }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useAuth } from "../../stores/stores";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

const auth = useAuth();
const token = auth.token; // Pinia-dan token alyp goýýarys

const orders = ref({ orders: [] });
const orderStatus = ref(null);
const selectedOrderId = ref("");

const onShipping = computed(() =>
  orders.value.orders.map((o) => o.status === "pending")
);
const arrived = computed(() =>
  orders.value.orders.map((o) => o.status === "delivered")
);

// ähli order-leri fetch etmek
const fetchOrders = async () => {
  try {
    const res = await fetch("http://localhost:3000/user/api/my-orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    orders.value = await res.json();
  } catch (error) {
    console.error("Orders fetch error:", error);
  }
};

const fetchOrderStatus = async () => {
  if (!selectedOrderId.value) return;
  try {
    const res = await fetch(
      `http://localhost:3000/track-order-status/${selectedOrderId.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    orderStatus.value = await res.json();
  } catch (error) {
    console.error("Order status fetch error:", error);
  }
};

// komponent açylanda fetch et
onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>
.triangle-right {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-left: 50px solid #555;
  border-bottom: 25px solid transparent;
}
</style>
