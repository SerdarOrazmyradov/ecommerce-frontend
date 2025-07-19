<template>
  <!-- Loading Animation -->
  <div class="">
    <div class="loading-spinner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <!-- Reused your existing SVG loading animation -->

        <g>
          <g transform="translate(80,50)">
            <g transform="rotate(0)">
              <circle fill-opacity="1" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.875s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.875s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
              <circle fill-opacity="0.875" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.75s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.75s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(50,80)">
            <g transform="rotate(90)">
              <circle fill-opacity="0.75" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.625s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.625s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
              <circle fill-opacity="0.625" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.5s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.5s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(20,50.00000000000001)">
            <g transform="rotate(180)">
              <circle fill-opacity="0.5" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.375s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.375s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(28.78679656440357,28.786796564403577)">
            <g transform="rotate(225)">
              <circle fill-opacity="0.375" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.25s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.25s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(49.99999999999999,20)">
            <g transform="rotate(270)">
              <circle fill-opacity="0.25" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.125s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="-0.125s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,28.78679656440357)">
            <g transform="rotate(315)">
              <circle fill-opacity="0.125" fill="#000" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="0s"
                  type="scale"
                  attributeName="transform"
                ></animateTransform>
                <animate
                  begin="0s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                ></animate>
              </circle>
            </g>
          </g>
          <g></g>
        </g>
      </svg>
      <p class="loading-text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ text: { type: String } });
</script>

<style scoped>
/* Loading Styles */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-spinner svg {
  width: 80px;
  height: 80px;
}

.loading-text {
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
