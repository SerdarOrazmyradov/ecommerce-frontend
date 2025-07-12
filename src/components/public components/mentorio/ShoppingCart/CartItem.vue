<template>
  <div class="cart-item">
    <div class="cart-item-image">
      <figure>
        <img :src="productImage" :alt="name">
      </figure>
    </div>
    <div class="cart-item-meta">
      <h3>{{ name }}</h3>
      <p>{{ priceFormat(price.sell) }} x {{ item.qty }} <strong>{{ priceFormat(itemTotal) }}</strong></p>
    </div>
    <div class="cart-item-action">
      <button @click="removeItem" aria-label="Remove item">
        <FontAwesomeIcon icon="trash-can" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useStore from '../../mentorio/js/store'
import useProduct from '../../mentorio/js/useProduct'
import { priceFormat } from '../../mentorio/js/utils'

const props = defineProps({
  item: Object
})

const store = useStore()
const { name, price, productImage } = useProduct(props.item)

const itemTotal = computed(() => price.sell * props.item.qty)

const removeItem = () => {
  store.removeItem(props.item)
}
</script>

<style lang="scss" scoped>
.cart-item {
  @apply flex items-center;

  .cart-item-image {
    @apply w-[50px] mr-[20px] flex-1;

    img {
      @apply rounded-md;
    }
  }

  .cart-item-meta {
    @apply mr-[20px] text-neutral-dark-greyish-blue text-sm;
  }

  .cart-item-action {
    button {
      @apply hover:opacity-50;
    }
  }
}
</style>
