<template>
  <section>
    <ProductGallery class="product-gallery" :images="PRODUCT.images" />
    <ProductDetails :product="PRODUCT" />
  </section>
</template>

<script setup>
import ProductGallery from './ProductGallery.vue'
import ProductDetails from './ProductDetails.vue'

import { PRODUCT } from '../mentorio/js/constants'
</script>

<style lang="scss" scoped>
section {
  @apply lg:pt-20 md:pt-10 pb-20 md:px-10 md:grid md:grid-cols-2 lg:gap-32 md:gap-10 items-center;
}
</style>
