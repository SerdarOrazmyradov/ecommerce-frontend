<template>
  <div
    class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
  >
    <div>
      <div class="text-xl font-medium mt-20">My Orders</div>
      <div
        class="flex justify-around border border-gray-100 py-2 rounded mt-10"
      >
        <div
          class="flex items-center bg-green-200 rounded py-2 px-7 gap-3 cursor-pointer"
        >
          <div class="text-base py-2">On Shipping</div>
          <div
            class="rounded-full bg-black text-neutral-50 size-5 flex items-center justify-center"
          >
            {{ onShipping.length }}
          </div>
        </div>
        <div
          class="flex items-center rounded py-2 px-7 gap-3 cursor-pointer text-gray-300"
        >
          <div class="text-base">Arrived</div>
          <div class="rounded-full size-5 flex items-center justify-center">
            {{ arrived.length }}
          </div>
        </div>
        <div
          class="flex items-center rounded py-2 px-7 gap-3 cursor-pointer text-gray-300"
        >
          <div class="text-base">Cancelled</div>
          <div
            class="hidden rounded-full size-5 flex items-center justify-center"
          >
            3
          </div>
        </div>
      </div>

      <!-- first order -->
      <div class="m-10" v-for="(order, index) in orders" :key="index">
        <!-- order id with status -->
        <div class="flex w-full justify-between">
          <div class="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <div>Order id: {{ order.id }}</div>
          </div>
          <div class="flex py-2 px-4 gap-4 items-center rounded bg-orange-300">
            <div class="size-5 rounded-full bg-orange-600"></div>
            <div class="">
              {{ order.status }}
            </div>
          </div>
        </div>
        <!-- tracing -->
        <div>
          <div class="flex gap-4 mt-5 items-center">
            <!-- delivered icon -->
            <div
              class="flex truncate max-w-28 px-3 py-2 gap-3 justify-center items-center"
            >
              <i class="fas fa-truck"></i>
              <div>Asgabat</div>
            </div>
            <!-- track start-->
            <div class="flex items-center">
              <div class="size-3 rounded-full bg-black"></div>
              <div class="flex gap-1">
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
              </div>
            </div>
            <!-- garaşylýan güni -->
            <div class="truncate max-w-64">Estimated arrival: 28 May 2024</div>
            <!-- track end -->
            <div class="flex items-center">
              <div class="flex gap-1">
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
                <div class="w-2 bg-black h-px"></div>
              </div>
              <div class="triangle-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ähli order maglumatlary -->

    <div class="m-10" v-for="(order, index) in orders.orders" :key="index">
      <div class="flex gap-3">
        <div v-for="(product, i) in order.products">
          <img
            class="size-10 object-scale-down"
            :src="'https://ecommerce-backend-fh32.onrender.com/' + product.main_image"
            alt="orderes main_image"
          />
        </div>
      </div>
    </div>

    <!-- Saýlanan order statusyny görkezmek üçin -->
    <!-- <div v-if="selectedOrderId" class="mt-4">
        <h3 class="text-lg font-semibold">
          Order Status (ID: {{ selectedOrderId }})
        </h3>
        <pre>{{ orderStatus }}</pre>
      </div> -->

    <!-- Button bilen order status fetch etmek -->
    <!-- <div class="mt-4">
        <input
          v-model="selectedOrderId"
          type="number"
          placeholder="Order ID giriz"
          class="border p-2"
        />
        <button
          @click="fetchOrderStatus"
          class="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Track Status
        </button>
      </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useAuth } from "../../stores/stores";
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
    const res = await fetch("https://ecommerce-backend-fh32.onrender.com/user/api/my-orders", {
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
      `https://ecommerce-backend-fh32.onrender.com/track-order-status/${selectedOrderId.value}`,
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
