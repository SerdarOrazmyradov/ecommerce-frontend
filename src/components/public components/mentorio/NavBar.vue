<template>
  <nav>
    <NavSideMenu class="menu-btn" />

    <h1><img src="/logo.svg" alt="Sneakers"></h1>

    <ul class="nav-items categories">
      <li v-for="(navItem, index) in NAV_ITEMS" :key="`nav.item.${index}`">
        <a href="#" @click.prevent>{{ navItem }}</a>
      </li>
    </ul>

    <ul class="nav-items right">
      <li>
        <NavBarShoppingCart />
      </li>
      <li>
        <figure>
          <img src="/car3_3.jpg" alt="Avatar">
        </figure>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import NavBarShoppingCart from './NavBarShoppingCart.vue'
import NavSideMenu from './NavSideMenu.vue'
import { NAV_ITEMS } from '../mentorio/js/constants'
</script>

<style lang="scss" scoped>
nav {
  @apply flex items-center md:py-7 py-4 px-4 md:border-b border-neutral-grayish-blue border-opacity-50 relative;

  :deep(.menu-btn ) {
    @apply md:hidden mr-4 mt-1;
  }

  h1 {
    @apply mr-14;
  }

  .nav-items {
    @apply grid auto-cols-min grid-flow-col text-neutral-dark-greyish-blue md:gap-8 gap-6 leading-none;

    &.categories {
      @apply md:grid hidden;

      li {
        @apply relative;

        &::after {
          @apply content-[''] w-full border-b-4 border-[transparent] absolute top-[3.4rem] left-0;
        }

        &:hover {
          a {
            @apply text-neutral-very-dark-blue;
          }

          &::after {
            @apply border-primary-orange;
          }
        }
      }
    }

    &.right {
      @apply auto-cols-auto ml-auto items-center;

      figure {
        @apply w-[45px] aspect-square rounded-full border-2 border-[transparent] hover:border-primary-orange;
      }
    }
  }
}
</style>
