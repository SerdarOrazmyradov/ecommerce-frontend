<template>
  <div class="wrapper">
    <div class="qty">
      <button @click="increment(-1)" aria-label="Decrease quantity"><FontAwesomeIcon icon="fa-minus" /></button>
      <input type="text" maxlength="2" aria-label="Quantity" :value="qty" @input="e => qty = e.target.value" />
      <button @click="increment(1)" aria-label="Increase quantity"><FontAwesomeIcon icon="fa-plus" /></button>
    </div>

    <button class="add-to-cart-btn" @click="addToCart" aria-label="Add to cart">
      <FontAwesomeIcon icon="fa-cart-shopping" class="mr-4" /> <span>Add to cart</span>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useStore from '../mentorio/js/store'

const props = defineProps({
  product: Object
})

const qty = ref(1)

const store = useStore()

const increment = (value) => {
  if (!qty.value) {
    qty.value = 0
  }

  qty.value += +value
}

const addToCart = () => {
  store.addItem(props.product, qty.value)
}

watch(
  qty,
  (val) => {
    if (typeof val === 'string') {
      qty.value = val.replace(/[\Wa-z]/ig, '')
    }

    if (val < 1) {
      qty.value = 0
    }

    if (val >= 10) {
      qty.value = 10
    }
  }
)
</script>

<style lang="scss" scoped>
.wrapper {
  @apply md:flex;
}

.qty {
  @apply flex items-stretch rounded-lg overflow-hidden bg-neutral-light-grayish-blue md:mr-6 md:w-5/12 md:mb-0 mb-4;

  button,
  input {
    @apply bg-[transparent] outline-none;
  }

  button {
    @apply flex-1 w-4/12 px-5 hover:opacity-50 text-primary-orange;
  }

  input {
    @apply text-center md:w-4/12 font-bold py-4;
  }
}

.add-to-cart-btn {
  @apply text-neutral-white bg-primary-orange shadow-md shadow-primary-orange font-bold rounded-lg px-8 py-4 flex items-center justify-center md:w-7/12 w-full hover:opacity-50;
}
</style>
