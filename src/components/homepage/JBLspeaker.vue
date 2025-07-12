<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8"
  >
    <!-- Left Side (Text and Timer) -->
    <div class="md:w-1/2 space-y-6">
      <p class="text-green-400 font-medium">Categories</p>
      <h1 class="text-4xl font-bold leading-tight">
        Enhance Your<br />Music Experience
      </h1>

      <!-- Countdown Timer -->
      <div class="flex space-x-4">
        <div class="text-center">
          <div
            class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold"
          >
            23
          </div>
          <p class="mt-2">Hours</p>
        </div>
        <div class="text-center">
          <div
            class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold"
          >
            05
          </div>
          <p class="mt-2">Days</p>
        </div>
        <div class="text-center">
          <div
            class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold"
          >
            59
          </div>
          <p class="mt-2">Minutes</p>
        </div>
        <div class="text-center">
          <div
            class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold"
          >
            35
          </div>
          <p class="mt-2">Seconds</p>
        </div>
      </div>

      <!-- Button -->
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded mt-4"
      >
        Buy Now!
      </button>
    </div>

    <!-- Right Side (Image) -->
    <div class="md:w-1/2 mt-10 md:mt-0">
      <img
        src="http://localhost:5173/exchange/JBL_BOOMBOX_2_HERO_020_x1%20(1)%201.png"
        alt="Speaker"
        class="w-full max-w-md mx-auto"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
