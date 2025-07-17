<template>
  <div class="container mx-auto px-3 md:px-5">
    <!-- header -->
    <div class="mt-20 h-5 py-px flex items-center">
      <div class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer">
        Home
      </div>
      <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">404 Error</div>
    </div>
    <!-- body -->
    <div>
      <div
        class="max-w-6xl flex flex-col gap-8 md:gap-10 mx-auto mt-16 md:mt-36"
      >
        <div
          class="text-4xl md:text-8xl font-medium flex justify-center items-center"
        >
          404 Not Found
        </div>
        <div class="text-sm md:text-base flex justify-center">
          Your visited page not found. You may go home page.
        </div>
        <!-- back to home button -->
        <router-link
          :to="{ name: 'home' }"
          class="mb-28 sm:mb-32 md:mb-40 self-center cursor-pointer mt-6 md:mt-10 w-56 bg-red-400 rounded-sm md:w-64 py-2 md:py-4 h-11 md:h-14 text-neutral-50 flex items-center justify-center hover:bg-red-300"
        >
          Back to home page
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
