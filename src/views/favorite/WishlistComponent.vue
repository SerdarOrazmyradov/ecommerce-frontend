<template>
  <div class="w-full mt-20">
    <div
      v-if="products.length > 0"
      class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
    >
      <div class="flex gap-1">
        <div class="text-xl">Wishlist</div>
        <div class="text-xl">({{ products.length }})</div>
      </div>
      <div
        class="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
    <div
      v-else
      class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
    >
      <div class="text-5xl font-medium">Your Wishlist is empty!</div>
      <div class="text-2xl font-normal text-blue-400">
        seem's like you don't have wishes here
      </div>
      <div class="text-2xl font-normal">
        Make a wish
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductCard from "../../components/product/ProductCard.vue";

const products = ref([]);

onMounted(() => {
  products.value = JSON.parse(localStorage.getItem("likedProducts"));
});
</script>

<style lang="scss" scoped></style>
