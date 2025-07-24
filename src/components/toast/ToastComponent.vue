<template>
  <div>
    <transition name="toast">
      <div class="fixed top-10 right-6 z-[21]">
        <div
          v-for="(toast, i) in toastStore.toasts"
          :key="i"
          class="flex flex-col"
        >
          <div
            class="transition-all py-3 px-5 duration-300 rounded-sm border z-50 flex items-center justify-between gap-20 my-1"
            :class="{
              'border-green-400 bg-green-100/90': toast.type == 'success',
              'border-red-400 bg-red-100/90': toast.type == 'error',
              'border-blue-400 bg-blue-100/90': toast.type == 'info',
            }"
          >
            <div class="flex items-center gap-2">
              <!-- tick icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
                :class="{
                  'text-green-400': toast.type == 'success',
                  'text-red-400': toast.type == 'error',
                  'text-blue-400': toast.type == 'info',
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <!-- text -->
              <div
                class="text-sm font-medium"
                :class="{
                  'text-green-400': toast.type == 'success',
                  'text-red-400': toast.type == 'error',
                  'text-blue-400': toast.type == 'info',
                }"
              >
                {{ toast.message }}
              </div>
            </div>
            <!-- close icon -->
            <svg
              @click="toastStore.removeToastByIndex(i)"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 cursor-pointer"
              :class="{
                'text-green-400': toast.type == 'success',
                'text-red-400': toast.type == 'error',
                'text-blue-400': toast.type == 'info',
              }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useToast } from "../../stores/stores";

const toastStore = useToast();
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
.toast-enter-to,
.toast-leave-from {
  opacity: 1;
}
</style>
