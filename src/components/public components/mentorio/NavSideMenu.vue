<template>
  <button v-bind="$attrs" @click="toggleAll()" aria-label="Menu">
    <FontAwesomeIcon icon="bars" size="lg" />
  </button>

  <Teleport to="body">
    <Transition name="fade">
      <div class="backdrop" v-show="isMenuOpen" @click="toggleAll()"></div>
    </Transition>
  </Teleport>
  <Teleport to="body">
    <Transition name="slide">
      <div class="menu" v-show="isMenuOpen">
        <header>
          <button @click="toggleAll()" aria-label="Close Menu">
            <FontAwesomeIcon icon="xmark" />
          </button>
        </header>
        <ul>
          <li v-for="item in NAV_ITEMS" :key="`nav.side.${item}`">
            <a href="#" @click="toggleAll()">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useToggle, useScrollLock } from '@vueuse/core'
import { NAV_ITEMS } from '../mentorio/js/constants'

const isMenuOpen = ref(false)
const toggleMenu = useToggle(isMenuOpen)
const isLocked = useScrollLock(document.body)
const toggleLock = useToggle(isLocked)

const toggleAll = () => {
  toggleMenu()
  toggleLock()
}
</script>

<style lang="scss" scoped>
.backdrop {
  @apply md:hidden fixed inset-0 bg-neutral-black bg-opacity-75 z-40;
}

.menu {
  @apply md:hidden fixed inset-0 z-50 bg-neutral-white text-neutral-very-dark-blue w-2/3;

  header {
    @apply p-6 text-xl text-neutral-dark-greyish-blue;
  }

  ul {
    @apply py-4 px-6;

    a {
      @apply block text-neutral-very-dark-blue font-bold text-lg py-2;
    }
  }
}
</style>
