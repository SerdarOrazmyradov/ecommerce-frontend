<template>
  <div>
    <transition name="toast">
      <div class="fixed top-10 right-6 z-[1000]">
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
                v-if="toast.type == 'success'"
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

              <!-- error icon -->
              <svg
                v-else-if="toast.type == 'error'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-red-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                />
              </svg>
              <!-- info icon -->
              <svg
                v-else-if="toast.type == 'info'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-blue-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
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
