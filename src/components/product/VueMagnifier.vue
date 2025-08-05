<script lang="ts">
import {
  computed,
  defineEmits,
  defineProps,
  onMounted,
  onUnmounted,
  ref,
} from "vue";

import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
export type MgShape = "circle" | "square";

export interface Props {
  // Image
  src: string;
  width?: string | number;
  height?: string | number;
  className?: string;

  // Zoom image
  zoomImgSrc?: string;
  zoomFactor?: number;

  // Magnifying glass
  mgWidth?: number;
  mgHeight?: number;
  mgBorderWidth?: number;
  mgShape?: MgShape;
  mgShowOverflow?: boolean;
  mgMouseOffsetX?: number;
  mgMouseOffsetY?: number;
  mgTouchOffsetX?: number;
  mgTouchOffsetY?: number;

  // Custom prop for vue-magnifier to show or hide magnifying glass
  mgShow?: boolean;
  // Custom prop for magnifying glass border background color
  mgCornerBgColor?: string;
}

const {
  // Image
  src = "",
  width = "100%",
  height = "auto",
  className = "",

  // Zoom image
  zoomImgSrc = "",
  zoomFactor = 1.5,

  // Magnifying glass
  mgWidth = 150,
  mgHeight = 150,
  mgBorderWidth = 2,
  mgShape = "circle",
  mgShowOverflow = true,
  mgMouseOffsetX = 0,
  mgMouseOffsetY = 0,
  mgTouchOffsetX = -50,
  mgTouchOffsetY = -50,

  // Custom prop to show or hide magnifying glass
  mgShow = true,
  // Custom prop for magnifying glass border background color
  mgCornerBgColor = "#fff",
} = defineProps<Props>();

const emit = defineEmits<{
  (e: "image:load", event: Event): void;
}>();

const img = ref<HTMLImageElement | null>(null);

let imgBounds = ref<DOMRect>(new DOMRect());
let showZoom = ref(false);
let mgOffsetX = ref(0);
let mgOffsetY = ref(0);
let relX = ref(0);
let relY = ref(0);

const mgClasses = computed(() => {
  let classes = "vue-magnifier__magnifying-glass";

  if (showZoom.value) classes += " vue-magnifier__visible";
  if (mgShape === "circle") classes += " vue-magnifier__circle";

  return classes;
});

const mgWrapperStyle = computed(() => ({
  width,
  height,
  overflow: mgShowOverflow ? "visible" : "hidden",
}));

const mgImgStyle = computed(() => ({
  cursor: mgShow ? "none" : "",
  width: "100%",
  height: "100%",
}));

const mgStyle = computed(() => ({
  width: `${mgWidth}px`,
  height: `${mgHeight}px`,
  left: `calc(${relX.value * 100}% - ${mgWidth / 2}px + ${mgOffsetX.value}px - ${mgBorderWidth}px)`,
  top: `calc(${relY.value * 100}% - ${mgHeight / 2}px + ${mgOffsetY.value}px - ${mgBorderWidth}px)`,
  backgroundImage: `url(${zoomImgSrc || src})`,
  backgroundPosition: `calc(${relX.value * 100}% + ${mgWidth / 2}px - ${relX.value * mgWidth}px) calc(${relY.value * 100}% + ${mgHeight / 2}px - ${relY.value * mgWidth}px)`,
  backgroundSize: `${zoomFactor * imgBounds.value.width}% ${zoomFactor * imgBounds.value.height}%`,
  borderWidth: `${mgBorderWidth}px`,
  backgroundColor: mgCornerBgColor,
}));

const calcImgBounds = () => {
  if (img.value) {
    imgBounds.value = img.value.getBoundingClientRect();
  }
};

const onImageLoad = (event: Event) => {
  emit("image:load", event);
  calcImgBounds();
};

const onMouseEnter = () => {
  calcImgBounds();
};

const throttledMouseMove = throttle((e: MouseEvent) => {
  if (imgBounds.value) {
    const target = e.target as HTMLElement;
    mgOffsetX.value = mgMouseOffsetX;
    mgOffsetY.value = mgMouseOffsetY;

    relX.value = (e.clientX - imgBounds.value.left) / target.clientWidth;
    relY.value = (e.clientY - imgBounds.value.top) / target.clientHeight;
    showZoom.value = true;
  }
}, 20, { trailing: false });

const onMouseOut = () => {
  showZoom.value = false;
};

const onTouchStart = () => {
  calcImgBounds();
};

const throttledTouchMove = throttle((e: TouchEvent) => {
  if (imgBounds.value) {
    const target = e.target as HTMLElement;
    const relXLocal =
      (e.targetTouches[0].clientX - imgBounds.value.left) / target.clientWidth;
    const relYLocal =
      (e.targetTouches[0].clientY - imgBounds.value.top) / target.clientHeight;

    if (relXLocal >= 0 && relYLocal >= 0 && relXLocal <= 1 && relYLocal <= 1) {
      mgOffsetX.value = mgTouchOffsetX;
      mgOffsetY.value = mgTouchOffsetY;
      relX.value = relXLocal;
      relY.value = relYLocal;
      showZoom.value = true;
    } else {
      showZoom.value = false;
    }
  }
}, 20, { trailing: false });

const onTouchEnd = () => {
  showZoom.value = false;
};

const calcImgBoundsDebounced = debounce(calcImgBounds, 200);

const registerEventListeners = () => {
  window.addEventListener("resize", calcImgBoundsDebounced);
  window.addEventListener("scroll", calcImgBoundsDebounced, true);
};

const unRegisterEventListeners = () => {
  window.removeEventListener("resize", calcImgBoundsDebounced);
  window.removeEventListener("scroll", calcImgBoundsDebounced, true);
};

onMounted(() => {
  registerEventListeners();
});

onUnmounted(() => {
  unRegisterEventListeners();
});
</script>

<template>
  <div :class="`vue-magnifier__magnifier ${className}`" :style="mgWrapperStyle">
    <img
      ref="img"
      :src="src"
      v-bind="$attrs"
      class="vue-magnifier__magnifier-image"
      :style="mgImgStyle"
      @load="onImageLoad($event)"
      @mouseenter="onMouseEnter()"
      @mousemove="throttledMouseMove($event)"
      @mouseout="onMouseOut()"
      @touchstart.prevent="onTouchStart()"
      @touchmove.prevent="throttledTouchMove($event)"
      @touchend="onTouchEnd()"
    />

    <div v-if="imgBounds && mgShow" :class="mgClasses" :style="mgStyle" />
  </div>
</template>
