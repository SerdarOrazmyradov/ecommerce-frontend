<template>
  <div class="image-modal" :class="{ active: showLayer }">
    <div class="modal-content">
      <button @click="emit('changeShowLayerValue')" class="close-button">
        <i class="fas fa-times"></i>
      </button>

      <div
        class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
      >
        <Galleria
          :value="product_images"
          :activeIndex="activeIndex"
          :circular="true"
          containerStyle="max-width: 640px"
          :showItemNavigators="true"
          :showThumbnails="true"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item"
              alt="galleria image"
              class="w-full h-auto"
            />
          </template>
          <template #thumbnail="slotProps">
            <div class="flex">
              <img
                :src="slotProps.item"
                alt="galleria thumbnail"
                class="size-20"
              />
            </div>
          </template>
        </Galleria>
      </div>
    </div>
  </div>
</template>

<script setup>
import Galleria from "primevue/galleria";
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  showLayer: { type: Boolean },
  product_images: { type: Array },
  main_image: { type: String },
});
const emit = defineEmits(["changeShowLayerValue"]);

// Set the active index to the main image
const activeIndex = ref(0);
watch(
  () => props.main_image,
  (val) => {
    activeIndex.value = props.product_images.indexOf(val);
  },
  { immediate: true }
);
</script>

<style scoped>
/* Trailer Modal */
.image-modal {
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

.image-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  position: relative;
  width: 90%;
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

.image-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.image-container iframe {
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
