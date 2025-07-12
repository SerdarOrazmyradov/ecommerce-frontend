<template>
  <div
    class="bg-gray-100 pt-4 sm:pt-6 md:pt-8 rounded-lg relative group hover:shadow-md transition-shadow duration-300 w-full"
  >
    <!-- Discount/New Badge -->
    <div
      @click.stop="emit('myCustomEvent', 'Hello from child!')"
      v-if="discount"
      class="absolute top-3 left-3 bg-[#DB4444] text-[#FAFAFA] text-xs sm:text-sm px-3 py-1 rounded-md z-10"
    >
      -{{ discount }}%
    </div>
    <div
      v-else-if="isNew"
      class="absolute top-3 left-3 bg-[#00FF66] text-[#FAFAFA] text-xs sm:text-sm px-3 py-1 rounded-md z-10"
    >
      NEW
    </div>

    <!-- Action Buttons -->
    <div class="absolute top-3 right-3 flex flex-col gap-2 z-10">
      <button
        class="w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm cursor-pointer"
        aria-label="Add to wishlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 sm:size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
      <button
        class="w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm cursor-pointer"
        aria-label="Quick view"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 sm:size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
    </div>
    <router-link
      :to="{ name: 'product_details', query: {}, params: { id: product.id } }"
    >
      <!-- Product Image -->
      <div class="mx-auto w-full px-4 sm:px-6">
        <div
          class="w-full h-40 sm:h-48 md:h-56 flex items-center justify-center"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </router-link>
    <!-- Add to Cart Button -->
    <button
      v-if="showCartBtn"
      class="mt-2 sm:mt-3 w-full bg-black text-white py-2 sm:py-2.5 rounded-md hover:opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 text-sm sm:text-base font-medium"
    >
      Add To Cart
    </button>

    <!-- Product Details -->
    <div class="p-3 sm:p-4">
      <h2 class="text-sm sm:text-base font-medium line-clamp-2 h-[2.5em]">
        {{ product.title }}
      </h2>

      <!-- Price -->
      <div class="flex items-center mt-2 gap-2">
        <span class="text-[#DB4444] font-medium text-sm sm:text-base">
          ${{ product.price }}
        </span>
        <span
          v-if="product.oldPrice"
          class="line-through text-[#7F7F7F] text-xs sm:text-sm"
        >
          ${{ product.oldPrice }}
        </span>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-1 mt-2">
        <div class="flex text-yellow-500">
          <template v-for="n in 5" :key="n">
            <i
              :class="
                n <= Math.round(product.rating) ? 'fas fa-star' : 'far fa-star'
              "
              class="text-xs sm:text-sm"
            ></i>
          </template>
        </div>
        <span class="text-[#7F7F7F] text-xs sm:text-sm ml-1">
          ({{ product.reviews }})
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["myCustomEvent", "anotherEvent"]);
defineProps({
  product: {
    type: Object,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  showCartBtn: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth hover transitions */
.group:hover .group-hover\:opacity-100 {
  transition: opacity 0.3s ease;
}
</style>
