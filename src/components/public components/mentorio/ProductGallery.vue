<template>
  <div>
    <div class="main-gallery-wrapper">
      <Swiper
        class="main-gallery"
        :modules="[Navigation]"
        :navigation="{
          prevEl: prevBtn,
          nextEl: nextBtn
        }"
        @swiper="onSwiper">
        <SwiperSlide
          v-for="({full}, index) in images"
          :key="`product.image.${index}`"
          class="cursor-pointer"
          @click="lightBoxToggle()">
          <figure>
            <img :src="full" :alt="`Product Image ${index}`">
          </figure>
        </SwiperSlide>
      </Swiper>

      <button class="navigation navigation-previous" ref="prevBtn" aria-label="Previous">
          <FontAwesomeIcon icon="chevron-left" />
      </button>
      <button class="navigation navigation-next" ref="nextBtn" aria-label="Next">
        <FontAwesomeIcon icon="chevron-right" />
      </button>
    </div>

    <div class="thumbnails">
      <button
        v-for="({thumbnail}, index) in images"
        :key="`thumbnail.image.${index}`"
        :class="{'active': swiper && swiper.realIndex === index}"
        @click="showImage(index)"
        :aria-label="`Thumbnail of Product Image ${index}`">
        <img :src="thumbnail" :alt="`Thumbnail of Product Image ${index}`">
      </button>
    </div>

    <Teleport to="body">
      <ProductLightbox
        v-if="lightBoxOpen"
        :images="images"
        :controller="swiper"
        @close-lightbox="lightBoxToggle()" />
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import ProductLightbox from './ProductLightbox.vue'

defineProps({
  images: Array
})

const swiper = ref(null)
const lightBoxOpen = ref(false)
const prevBtn = ref(null)
const nextBtn = ref(null)

const onSwiper = (_swiper) => {
  swiper.value = _swiper
}

const showImage = (index) => {
  swiper.value.slideTo(index, 300)
}

const lightBoxToggle = () => {
  lightBoxOpen.value = !lightBoxOpen.value
}
</script>

<style lang="scss" scoped>
.main-gallery-wrapper {
  @apply relative;

  .navigation {
    @apply w-[40px] h-[40px] md:hidden;

    &.navigation-previous {
      @apply left-0 translate-x-1/4;
    }

    &.navigation-next {
      @apply right-0 -translate-x-1/4;
    }
  }
}

.main-gallery {
  @apply md:rounded-2xl md:mb-8 mb-6;

  figure {
    @apply overflow-hidden md:aspect-auto aspect-[7/6];

    img {
      @apply object-cover;
    }
  }
}

.thumbnails {
  @apply md:grid hidden grid-flow-col gap-8 items-center justify-center;

  button {
    @apply rounded-xl aspect-square overflow-hidden hover:opacity-50;

    &.active {
      @apply border-2 border-primary-orange opacity-50;
    }
  }
}
</style>
