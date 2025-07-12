<template>
  <div class="flex flex-wrap gap-5 justify-center p-10 bg-gray-100">
    <ProductCard
      v-for="(p, i) in products"
      :key="i"
      :product="p"
      :discount="p.discount"
    />
  </div>
</template>

<script setup>
import ProductCard from "../homepage/ProductCart.vue";

const products = [
  {
    title: "HAVIT HV-G92 Gamepad",
    image: "https://i.imgur.com/dM7Thhn.png",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    id:1,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: "https://i.imgur.com/YZ9JfPn.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    id:1,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: "https://i.imgur.com/WfYXf7I.png",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    id:1,
  },
  {
    title: "S-Series Comfort Chair",
    image: "https://i.imgur.com/zNKT1Kh.png",
    price: 375,
    oldPrice: 500,
    discount: 25,
    rating: 4,
    reviews: 99,
    id:1,
  },
];
</script>
