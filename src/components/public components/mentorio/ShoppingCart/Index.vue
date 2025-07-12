<template>
  <div v-if="!isCartEmpty" class="cart">
    <div class="cart-items">
      <CartItem v-for="item in cartItems" :key="`cart.item.${item.id}`" :item="item" />
    </div>

    <button class="checkout-btn">Checkout</button>
  </div>
  <div v-else class="cart empty-cart">
    <p>Your cart is empty</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useStore from '../../mentorio/js/store'
import CartItem from './CartItem.vue';

const store = useStore()
const { cartItems, isCartEmpty } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.cart {
  @apply p-6 min-h-[175px] flex flex-col;

  &.empty-cart {
    @apply items-center justify-center font-bold text-neutral-dark-greyish-blue;
  }

  .cart-items {
    @apply mb-6;
  }

  .checkout-btn {
    @apply mt-auto text-neutral-white bg-primary-orange font-bold rounded-lg px-8 py-4 flex items-center justify-center w-full hover:opacity-50;
  }
}
</style>
