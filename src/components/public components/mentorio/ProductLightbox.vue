<template>
  <div class="backdrop">
    <div class="modal" v-on-click-outside="closeLightbox">
      <header>
        <button class="close-btn" @click="closeLightbox()" aria-label="Close lightbox">
          <FontAwesomeIcon icon="xmark" />
        </button>
      </header>
      <div class="lightbox-gallery-wrapper">
        <Swiper
          class="lightbox-gallery"
          @swiper="onSwiper"
          @realIndexChange="updateActiveIndex"
          :navigation="{
            prevEl: prevBtn,
            nextEl: nextBtn
          }"
          :controller="{
            control: controller
          }"
          :initial-slide="controller.realIndex"
          keyboard
          :modules="[Navigation,Controller,Keyboard]">
          <SwiperSlide
            v-for="({full}, index) in images"
            :key="`lightbox.full.image.${index}`">
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
          :key="`lightbox.thumbnail.image.${index}`"
          :class="{'active': swiper && activeIndex === index}"
          @click="showImage(index)"
          :aria-label="`Thumbnail of Product Image ${index}`">
          <img :src="thumbnail" :alt="`Thumbnail of Product Image ${index}`">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Controller, Keyboard } from 'swiper'
import { vOnClickOutside } from '@vueuse/components'

const props = defineProps({
  images: Array,
  controller: Object,
})

const emit = defineEmits(['close-lightbox'])

const swiper = ref(null)
const prevBtn = ref(null)
const nextBtn = ref(null)
const activeIndex = ref(0)

const onSwiper = (_swiper) => {
  const realIndex = props.controller.realIndex

  swiper.value = _swiper
  _swiper.realIndex = realIndex

  updateActiveIndex(_swiper)
}

const showImage = (index) => {
  swiper.value.slideTo(index, 300)
}

const updateActiveIndex = (_swiper) => {
  activeIndex.value = _swiper.realIndex
}

const closeLightbox =  () => {
  emit('close-lightbox')
}
</script>

<style lang="scss" scoped>
.backdrop {
  @apply
    fixed
    inset-0
    bg-neutral-black
    bg-opacity-75
    z-50
    md:flex
    hidden
    items-center
    justify-center;

    .modal {
      @apply max-w-[510px];

      header {
        @apply text-right;

        .close-btn {
          @apply text-2xl text-neutral-white hover:text-primary-orange ml-auto mb-4;
        }
      }

      .lightbox-gallery-wrapper {
        @apply relative;

        .lightbox-gallery {
          @apply rounded-2xl mb-8;
        }

        .navigation {
          &.navigation-previous {
            @apply left-0 -translate-x-1/2;
          }

          &.navigation-next {
            @apply right-0 translate-x-1/2;
          }
        }
      }

      .thumbnails {
        @apply grid grid-flow-col gap-8 items-center justify-center px-6;

        button {
          @apply rounded-xl aspect-square overflow-hidden bg-neutral-white;

          &.active {
            @apply border-2 border-primary-orange;

            img {
              @apply opacity-50;
            }
          }

          &:hover,
          &.active {
            img {
              @apply opacity-50;
            }
          }
        }
      }
    }
}
</style>
