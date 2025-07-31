<template>
  <figure v-lazyload class="image__wrapper">
    <!-- <VueSpinner v-if="true" size="40" color="red" class="image__spinner" /> -->
    <img class="image__item" :data-url="source" alt="random image" />
  </figure>
</template>

<script>
import {
  VueSpinner,
  // ...
} from "vue3-spinners";
export default {
  name: "ImageItem",
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  components: {
    VueSpinner,
  },
};
</script>

<style lang="scss" scoped></style>
