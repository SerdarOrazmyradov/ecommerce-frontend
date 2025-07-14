<template>
  <div class="max-w-2xs bg-gray-100 h-96 relative group">
    <!-- discount -->
    <div
      v-if="product.discount"
      class="absolute top-3 left-3 flex items-center justify-center bg-red-400 rounded-sm text-neutral-50 h-6 w-14 py-1"
    >
      -{{ product.discount }}%
    </div>
    <!-- new -->
    <div
      v-else-if="isNew"
      class="absolute top-3 left-3 bg-[#00FF66] text-[#FAFAFA] text-xs sm:text-sm px-3 py-1 rounded-md z-10"
    >
      NEW
    </div>
    <!-- heart & wishlist icons -->

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

    <!-- image -->
    <div class="absolute top-0 left-0 w-full">
      <img
        :src="product.image"
        alt="product image "
        class="w-42 h-36 mt-9 mx-auto"
      />
      <!-- add to cart button -->
      <div
        class="bg-black w-full h-10 rounded-bl-sm rounded-br-sm text-base text-neutral-50 font-medium flex items-center justify-center mt-3 py-px cursor-pointer hover:bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300"
      >
        Add To Cart
      </div>
      <!-- title & price & review-->
      <div class="mt-4 flex flex-col gap-2">
        <div class="text-base font-medium">{{ product.title }}</div>
        <div class="flex gap-2 md:gap-3">
          <div class="text-base text-red-400 font-medium">
            ${{ product.price }}
          </div>
          <div class="line-through text-base text-gray-600 font-medium">
            ${{ product.oldPrice }}
          </div>
        </div>
        <div class="flex gap-1">
          <i
            v-for="(n, index) in 5"
            :key="index"
            class="text-yellow-400 text-base"
            :class="
              n < Math.round(product.rating) ? 'fas fa-star ' : 'far fa-star'
            "
          >
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  product: { type: Object },
});
</script>

<style lang="scss" scoped></style>
