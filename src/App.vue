<template>
  <promotional_message />
  <navbar-component />
  <router-view /> 
  <footer-comonent/>
</template>

<script setup>
import NavbarComponent from "./components/navbar/NavbarComponent.vue";
import promotional_message from "./components/promotional_message/promotional_message.vue";
import FooterComonent from "./components/footer/FooterComonent.vue";
</script>

<style>
nav a.router-link-exact-active {
  color: #44a4db;
  text-decoration: underline;
  font-weight: bold;
}
</style>
