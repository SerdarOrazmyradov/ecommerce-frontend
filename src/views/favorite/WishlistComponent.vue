<template>
  <div class="w-full mt-20">
    <div class="container mx-auto px-10">
      <div class="flex gap-1">
        <div class="text-xl">Wishlist</div>
        <div class="text-xl">({{ products.length }})</div>
      </div>
      <div class="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
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
