<template>
  <button
    ref="button"
    @mouseover="dropdownOpen()"
    @mouseout="dropdownClose()"
    @click="dropdownToggle()"
    aria-label="Shopping cart">
    <div class="relative">
      <div
        v-show="!isCartEmpty"
        class="cart-items-counter"
        :class="{'added': counterTransition}"
        ref="counter">{{ totalCartItems }}</div>

      <FontAwesomeIcon icon="fa-cart-shopping" />
    </div>
  </button>

  <Teleport to="body">
    <div
      ref="dropdown"
      v-show="openDropdown"
      class="cart-dropdown-wrapper"
      @mouseover="dropdownOpen()"
      @mouseout="dropdownClose()"
      v-on-click-outside="onClickOutside"
      :style="{
        top: `${dropdownY}px`,
        left: `${dropdownX}px`
      }">
      <div class="cart-dropdown">
        <header>
          <h3>Cart</h3>
        </header>

        <ShoppingCart />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useElementBounding, useTimeoutFn, useWindowScroll, useWindowSize } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
import ShoppingCart from './ShoppingCart/Index.vue'
import useStore from '../mentorio/js/store'
import { isSm } from '../mentorio/js/utils'

const DROPDOWN_DELAY = 500
const DROPDOWN_OFFSET = {
  lg: {
    x: 0,
    y: 20
  },
  sm: {
    x: 0,
    y: 35
  }
}

const counter = ref(null)
const counterTransition = ref(false)
const button = ref(null)
const dropdown = ref(null)
const openDropdown = ref(false)

const store = useStore()
const { totalCartItems, isCartEmpty } = storeToRefs(store)
const dropdownOffset = computed(() => {
  const { sm, lg } = DROPDOWN_OFFSET

  return isSm.value ? sm : lg
})

const { width: windowWidth } = useWindowSize()
const { y: scrollY, x: scrollX } = useWindowScroll()
const { x, bottom, width } = useElementBounding(button)
const { width: dropdownWidth } = useElementBounding(dropdown)

const dropdownY = computed(() => scrollY.value + bottom.value + dropdownOffset.value.y)
const dropdownX = computed(() => {
  let offset = 0

  let xPosition =
    isSm.value ?
      0 :
      scrollX.value + (x.value + dropdownOffset.value.x) + (width.value / 2) - (dropdownWidth.value / 2)

  // Check if dropdown overflows the body
  if ((xPosition + dropdownWidth.value) > windowWidth.value) {
    offset = xPosition + dropdownWidth.value - windowWidth.value
  }

  return xPosition - offset
})

const { start: startCloseDropdown, stop: stopCloseDropdown } = useTimeoutFn(() => {
  openDropdown.value = false
}, DROPDOWN_DELAY)

const { start: startCounterTransition } = useTimeoutFn(() => {
  counterTransition.value = false
}, 1000)

const dropdownOpen = () => {
  if (!isSm.value) {
    openDropdown.value = true
    stopCloseDropdown()
  }
}

const dropdownClose = () => {
  if (!isSm.value) {
    startCloseDropdown()
  }
}

const onClickOutside = () => {
  if (!isSm.value) {
    openDropdown.value = false
  }
}

const dropdownToggle = () => {
  openDropdown.value = !openDropdown.value
}

watch(
  totalCartItems,
  (val) => {
    counterTransition.value = val > 1
    startCounterTransition()
  }
)
</script>

<style lang="scss" scoped>
.cart-items-counter {
  @apply
    bg-primary-orange
    text-neutral-white
    text-[8px]
    font-bold
    rounded-md
    py-[2px]
    px-[6px]
    leading-none
    absolute
    bottom-[8px]
    left-[5px]
    transition-transform
    scale-100;

    &.added {
      @apply scale-125;
    }
}

.cart-dropdown-wrapper {
  @apply
    absolute
    z-10
    md:p-0
    p-2
    md:w-[335px]
    w-full;
}
.cart-dropdown {
  @apply
    bg-neutral-white
    rounded-lg
    shadow-[0_10px_15px_0px_rgb(0_0_0_/_0.2)];

    header {
      @apply border-b text-neutral-very-dark-blue border-neutral-grayish-blue border-opacity-50 p-4 font-bold;
    }
}
</style>
