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
          <div class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold">
            {{ timer.days }}
          </div>
          <p class="mt-2">Days</p>
        </div>
        <div class="text-center">
          <div class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold">
            {{ timer.hours }}
          </div>
          <p class="mt-2">Hours</p>
        </div>
        <div class="text-center">
          <div class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold">
            {{ timer.minutes }}
          </div>
          <p class="mt-2">Minutes</p>
        </div>
        <div class="text-center">
          <div class="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-xl font-bold">
            {{ timer.seconds }}
          </div>
          <p class="mt-2">Seconds</p>
        </div>
      </div>

      <!-- Button -->
      <button
        @click="showSuccessToast"
        class="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded mt-4 active:shadow-none active:translate-y-0"
        style="
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        "
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

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "../../stores/stores";

const showSuccessToast = () => {
  useToast().addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "success",
  });
};

// Countdown timer
const timer = ref({ days: "00", hours: "00", minutes: "00", seconds: "00" });
let countdownInterval = null;

// 24 sagat soň gutarýan countdown üçin target wagty bir gezek hasapla
const target = new Date();
target.setHours(target.getHours() + 24, 0, 0, 0);

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = target - now;

    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      timer.value = {
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      };
    } else {
      timer.value = { days: "00", hours: "00", minutes: "00", seconds: "00" };
      clearInterval(countdownInterval);
    }
  }, 1000);
};

onMounted(startCountdown);
</script>

<style lang="scss" scoped></style>
