<template>
<div class="mobile-layout">
  <!-- Hamburger menyu -->
  <button class="menu-btn" @click="toggleMenu">☰</button>

  <!-- Kategoriýa menyusy -->
  <div v-if="menuOpen" class="categories-menu">
    <div v-for="category in categories" :key="category">
      {{ category }}
    </div>
  </div>

  <!-- Esasy karousel -->
  <div class="carousel">
    <div class="slide">
      <h3>iPhone 14 Series</h3>
      <h2>Up to 10% off Voucher</h2>
      <button>Shop Now →</button>
    </div>
    <div class="dots">...</div>
  </div>

  <!-- Wagt görkeziji -->
  <div class="timer">
    <div class="time-block">
      <span>Days</span>
      <strong>03</strong>
    </div>
    <span>:</span>
    <!-- ... -->
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
/* Mobil üçin */
@media (max-width: 768px) {
  .categories-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100vh;
    background: white;
    z-index: 100;
    padding: 20px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }
  
  .timer span {
    display: none;
  }
  
  .timer:after {
    content: ":";
    margin: 0 5px;
  }
}</style>
