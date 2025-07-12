<template>
  <div class="product-details">
    <h2>{{ brand }}</h2>
    <h1>{{ name }}</h1>

    <p class="description">{{ description }}</p>

    <div class="price">
      <p>{{ priceFormat(price.sell) }}</p>
      <del v-if="price.original">{{ priceFormat(price.original) }}</del>
      <div v-if="price.original" class="reduction">
        <div>{{ reduction }}</div>
      </div>
    </div>

    <ProductAddToCart :product="product" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductAddToCart from './ProductAddToCart.vue'
import useProduct from '../mentorio/js/useProduct'
import { priceFormat } from '../mentorio/js/utils'

const props = defineProps({
  product: Object
})

const { name, brand, description, price, images } = useProduct(props.product)

const reduction = computed(() => {
  return `${(price.sell / price.original) * 100}%`
})
</script>

<style lang="scss" scoped>
.product-details {
  @apply md:px-0 px-6;
}

h2 {
  @apply uppercase text-primary-orange tracking-widest text-xs md:mb-6 mb-4 font-bold;
}

h1 {
  @apply text-neutral-black md:text-4xl text-3xl font-bold md:mb-8 mb-4;
}

p.description {
  @apply text-neutral-dark-greyish-blue leading-relaxed md:mb-8 mb-6;
}

.price {
  @apply md:inline-grid flex grid-cols-2 md:grid-rows-2 gap-x-5 leading-none items-center md:mb-8 mb-6;

  p {
    @apply font-bold text-2xl;
  }

  .reduction {
    div {
      @apply inline-block bg-primary-pale-orange text-primary-orange text-sm font-bold py-0.5 px-2 rounded-lg;
    }
  }

  del {
    @apply text-base font-bold text-neutral-grayish-blue row-start-2 row-end-2 col-start-1 col-end-1 order-1 md:ml-0 ml-auto;
  }
}
</style>
