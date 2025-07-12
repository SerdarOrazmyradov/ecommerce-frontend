<template>
  <div>
    <!--navbar-->
    <Navbar />
    <!--2nd parent item-->
    <SecondParentItem />
    <!--3rd parent item-->
    <ThirdParentItem />
    <!--4th parent item-->
    <divBackgroungImgVue />
    <!--5th parent item-->
    <div class="mt-12">
      <div
        class="text-[16px] md:text-3xl text-[#34547F] font-bold flex justify-center"
      >
        2 milliondan gowrak 5 ýyldyzly baha berildi.
      </div>
      <!--1st Swiper-->
      <TestSwiper :people="peopleTM" />
    </div>
    <!--6th parent item-->
    <adsPremium />
    <!--7th parent item-->
    <BlogsComponent />
    <!--8th parent item-->
    <FrequentlyAskedQuestions />

    <!--Footer-->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import SecondParentItem from "../components/SecondParentItem.vue";
import ThirdParentItem from "../components/ThirdParentItem.vue";
import TestSwiper from "../components/TestSwiper.vue";
import adsPremium from "../components/premium/adsPremium.vue";
import BlogsComponent from "../components/blogs/BlogsComponent.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/bundle";
import { peopleTM, swiper2TM } from "../compasable/people.js";

import FooterComponent from "../components/FooterComponent.vue";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.vue";
import divBackgroungImgVue from "../components/background_div/divBackgroungImg.vue";

function onSwiperInit(swiper) {
  swiper.navigation.init();
  swiper.navigation.update();
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
