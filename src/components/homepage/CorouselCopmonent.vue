<template>
  <Swiper
    :modules="[Autoplay]"
    :loop="true"
    :autoplay="{ delay: 4000 }"
    grabCursor
    class="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[344px] max-w-3xl"
  >
    <SwiperSlide
      v-for="(product, i) in slides"
      :key="i"
      class="px-2 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black py-3 md:py-0"
      style="box-sizing: border-box"
    >
      <router-link
        class="sm:relative flex flex-row-reverse justify-center sm:justify-normal sm:flex-row gap-6"
        :to="{ name: 'productlist', query: { categories: 'Phones' } }"
      >
        <!-- Text content -->
        <div class="mb-6 md:mb-0 text-neutral-50 mt-10">
          <div v-lazyload class="flex items-center justify-start">
            <!-- apple logo -->
            <img
              :data-url="'https://ecommerce-frontend-bx39.onrender.com/' + image_src_logo"
              alt="Apple"
              class="w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 mb-3 md:mb-0"
            />
            <p class="text-neutral-50 text-base sm:text-lg mb-2 ml-4 sm:ml-6">
              {{ t("iphoneSeries") }}
            </p>
          </div>
          <h1
            class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-wrap max-w-2xs"
          >
            {{ voucherLines }}
          </h1>
          <div
            class="flex gap-2 items-center group text-neutral-50 text-base sm:text-lg transition-opacity"
          >
            <div class="h-full shrink">{{ t("shopNow") }}</div>
            <span
              class="h-full text-2xl shrink duration-300 ease-in-out group-hover:translate-x-1 group-active:translate-x-1 transform"
              >→</span
            >
          </div>
        </div>

        <div v-lazyload class="sm:absolute sm:top-10 mt-10 sm:mt-0 sm:right-20">
          <img
            :data-url=" product.image"
            alt=""
            class="size-48 sm:size-64 object-scale-down"
          />
        </div>
      </router-link>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "../../stores/stores";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

// voucherOffer array almak üçin computed
const voucherLines = computed(() =>
  t("voucherOffer", {}, { returnObjects: true })
);

const toastStore = useToast();
const image_src_logo = ref("/hero_section/1200px-Apple_gray_logo 1.png");

const slides = ref([
  { image: "https://ecommerce-frontend-bx39.onrender.com/hero_section/color_large_2x.png" },
  { image: "https://ecommerce-frontend-bx39.onrender.com/hero_section/flex_magsafe_large_2x.png" },
  { image: "https://ecommerce-frontend-bx39.onrender.com/hero_section/flex_applecare_large_2x.png" },
]);

const currentIndex = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const showSuccessToast = () => {
  toastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "success",
  });
};
</script>
