<template>
  <div>
    <CategoriesComponent />

    <div class="p-3">
      <FlashSales />
    </div>
    <!-- <ProductList /> -->
    <div class="p-3">
      <browse-category />
    </div>

    <div class="max-w-[1170px] h-[1px] bg-[#B3B3B3] mx-auto my-[70px]"></div>
    <div class="p-3 max-w-6xl mx-auto">
      <BestSelling />
    </div>

    <div class="max-w-[1170px] h-auto mx-auto mt-[140px]">
      <JBLspeaker />
    </div>
    <div class="p-3">
      <ExploreOurProducts />
    </div>

    <div class="p-3">
      <NewArrival />
    </div>
    <div class="mb-[140px]">
      <ServiceComponent />
    </div>
    <div></div>
    <!-- 
    14px-sm
    18px-lg
    16px-xl
    20px-xl
    24px-2xl
    28px-3xl -->
    <ScrollToTopButton />
    <!-- <NewScrollUpButton /> -->
  </div>
</template>

<script setup>
import CategoriesComponent from "../../components/homepage/CategoriesComponent.vue";
// import ProductList from "../../components/homepage/ProductList.vue";
import FlashSales from "../../components/homepage/FlashSales.vue";
import BrowseCategory from "../../components/homepage/BrowseCategory.vue";
import BestSelling from "../../components/homepage/BestSelling.vue";
import JBLspeaker from "../../components/homepage/JBLspeaker.vue";

import ExploreOurProducts from "../../components/homepage/ExploreOurProducts.vue";
import NewArrival from "../../components/homepage/NewArrival.vue";
import ServiceComponent from "../../components/homepage/ServiceComponent.vue";
import ScrollToTopButton from "../../components/homepage/ScrollToTopButton.vue";
import NewScrollUpButton from "../../components/homepage/NewScrollUpButton.vue";
import { useLiked } from "../../stores/stores";

const useLikedStore = useLiked();
</script>

<style scoped></style>
