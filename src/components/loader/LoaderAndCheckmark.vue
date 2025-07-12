<template>
  <div class="">
    <div class="circle-loader" :class="{ 'load-complete': isCompleted }">
      <div v-show="isCompleted" class="checkmark draw"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  isCompleted: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@use "sass:math";
body {
  padding: 5em;
  text-align: center;
}

.container {
  text-align: center;
}

h1 {
  margin-bottom: 1em;

  small {
    font-size: 0.5em;
    color: gray;
  }
}

$brand-success: #5cb85c;
$loader-size: 3em;
$check-height: math.div($loader-size, 2);
$check-width: math.div($check-height, 2);
$check-left: math.div($loader-size, 6) + math.div($loader-size, 12);
$check-thickness: 3px;
$check-color: $brand-success;

// Variables
// $brand-success: #5cb85c;
// $loader-size: 7em;
// $check-height: $loader-size / 2;
// $check-width: $check-height / 2;
// $check-left: ($loader-size / 6 + $loader-size / 12);
// $check-thickness: 3px;
// $check-color: $brand-success;

.circle-loader {
  margin-bottom: calc($loader-size / 2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left-color: $check-color;
  animation: loader-spin 1.2s infinite linear;
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
  width: $loader-size;
  height: $loader-size;
}

.load-complete {
  animation: none;
  border-color: $check-color;
  transition: border 500ms ease-out;
}

// .checkmark {
//   display: none;

//   &.draw:after {
//     animation-duration: 800ms;
//     animation-timing-function: ease;
//     animation-name: checkmark;
//     transform: scaleX(-1) rotate(135deg);
//   }

//   &:after {
//     opacity: 1;
//     height: $check-height;
//     width: $check-width;
//     transform-origin: left top;
//     border-right: $check-thickness solid $check-color;
//     border-top: $check-thickness solid $check-color;
//     content: '';
//     left: $check-left;
//     top: $check-height;
//     position: absolute;
//   }
// }

.checkmark {
  display: block; // ! düzedilen ýer

  &.draw:after {
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
  }

  &:after {
    opacity: 1;
    height: $check-height;
    width: $check-width;
    transform-origin: left top;
    border-right: $check-thickness solid $check-color;
    border-top: $check-thickness solid $check-color;
    content: "";
    left: $check-left;
    top: $check-height;
    position: absolute;
  }
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: $check-width;
    opacity: 1;
  }
  40% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
  100% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
}
</style>
