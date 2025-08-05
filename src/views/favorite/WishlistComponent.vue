<template>
  <div class="w-full mt-20">
    <div
      v-if="products.length > 0"
      class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
    >
      <div class="flex gap-1">
        <div class="text-xl">{{ t("wishlist") }}</div>
        <div class="text-xl">({{ products.length }})</div>
      </div>
      <div
        id="wishlist"
        class="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
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
      <!-- <div class="text-5xl font-medium">Your Wishlist is empty!</div>
      <div class="text-2xl font-normal text-blue-400">
        seem's like you don't have wishes here
      </div>
      <div class="text-2xl font-normal">Make a wish</div> -->
      <div class="text-5xl font-medium">{{ t("wishlistEmpty") }}</div>
      <div class="text-2xl font-normal text-blue-400">
        {{ t("wishlistHint") }}
      </div>
      <div class="text-2xl font-normal">
        {{ t("makeWish") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductCard from "../../components/product/ProductCard.vue";
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

const products = ref([]);

onMounted(() => {
  products.value = JSON.parse(localStorage.getItem("likedProducts"));
});
</script>

<style scoped>
@media (max-width: 360px) {
  #wishlist {
    @apply grid-cols-1;
  }
}
</style>
