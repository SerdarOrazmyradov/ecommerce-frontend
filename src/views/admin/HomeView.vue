<template>
  <div><NavBarAdmin /></div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavBarAdmin from "./NavBarAdmin.vue";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
