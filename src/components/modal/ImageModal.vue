<template>
  <!-- Trailer Modal -->
  <div class="trailer-modal" :class="{ active: showLayer }">
    <div class="modal-content">
      <button @click="emit('changeShowLayerValue')" class="close-button">
        <i class="fas fa-times"></i>
      </button>
      <div class="video-container">
        <div class="px-2 sm:px-4">
          <Swiper
            :slides-per-view="1.2"
            :space-between="10"
            @swiper="onSwiperInit"
            :breakpoints="{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }"
            :modules="[Navigation]"
          >
            <SwiperSlide v-for="(image, i) in product_images" :key="i">
              <img :src="image" alt="product" class="w-full h-full" />
              <!-- <ProductCard :product="product" :discount="product.discount" /> -->
              <!-- <ProductCard :product="product" :discount="product.discount" /> -->
            </SwiperSlide>
          </Swiper>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Manipulation } from "swiper/modules";

import { defineProps } from "vue";
import { defineEmits } from "vue";

const props = defineProps({
  showLayer: { type: Boolean },
  product_images: { type: Array },
});
const emit = defineEmits(["changeShowLayerValue"]);

function onSwiperInit(swiper) {
  swiper.navigation.init();
  swiper.navigation.update();
}
</script>

<style scoped>
/* Trailer Modal */
.trailer-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.trailer-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 900px;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.no-trailer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
}

.no-trailer i {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>
