<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div class="">
      <div class="fixed top-10 w-full h-full z-[12]">
        <div
          class="mx-auto z-[12] max-w-96 flex rounded-sm px-10 py-10 justify-center bg-gray-100"
        >
          <div class="text-black relative">
            <!-- <div
          class="absolute top-0 z-[12] bg-neutral-50 rounded-sm w-96 h-[500px]"
        ></div> -->

            <div class="flex z-[13] flex-col gap-20 relative">
              <!-- close button -->
              <div
                @click="handleCloseClick"
                class="absolute top-0 right-10 rounded-full size-7 hover:bg-gray-200 flex transition-all duration-300 items-center justify-center active:shadow-none active:translate-y-0"
                style="
                  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                  transform: translateY(-2px);
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <!-- circle icon -->
              <div class="w-96 flex justify-center">
                <div
                  class="size-40 rounded-full flex items-center justify-center"
                  :class="isError ? 'bg-red-400 ' : 'bg-green-400'"
                >
                  <svg
                    v-if="isError"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="size-32 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="size-32 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
              <!-- card item -->
              <div class="w-96">
                <div class="flex flex-col gap-5">
                  <div v-if="isError" class="text-5xl text-center">Error</div>
                  <div v-else class="text-5xl text-center">Success</div>
                  <div class="text-center text-xl font-light">
                    {{ message }}
                  </div>
                  <div
                    @click="handleAgainClick"
                    v-if="isError"
                    class="w-50 text-base font-medium cursor-pointer flex items-center justify-center mx-auto text-neutral-50 py-3 px-5 bg-red-400 hover:bg-red-300 rounded-sm active:shadow-none active:translate-y-0 transition-all duration-300"
                    style="
                      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                      transform: translateY(-2px);
                    "
                  >
                    Again
                  </div>
                  <div
                    @click="handleContinueClick"
                    v-else
                    class="w-50 text-base font-medium cursor-pointer flex items-center justify-center mx-auto text-neutral-50 transition-all duration-300 py-3 px-5 bg-green-400 hover:bg-green-300 rounded-sm active:shadow-none active:translate-y-0"
                    style="
                      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                      transform: translateY(-2px);
                    "
                  >
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></transition
  >
</template>

<script setup>
defineProps({
  isError: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
  },
});

const emit = defineEmits(["again", "continue", "close"]);
const handleAgainClick = () => {
  emit("again");
};
const handleContinueClick = () => {
  emit("continue");
};
const handleCloseClick = () => {
  emit("close");
};
</script>

<style scoped></style>
