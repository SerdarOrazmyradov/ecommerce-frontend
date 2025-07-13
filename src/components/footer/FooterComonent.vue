<template>
  <!-- footer -->
  <div class="bg-black h-full">
    <footer
      class="container px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 text-[#fafafa] mx-auto"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center  sm:text-start"
      >
        <!-- Column 1 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-2xl font-bold">Exclusive</div>
          <div class="text-lg sm:text-xl font-medium cursor-pointer">
            Subscribe
          </div>
          <div class="text-base sm:text-lg cursor-pointer">
            Get 10% off your first order
          </div>
          <div
            class="flex gap-1 border-2 border-white rounded-sm h-12 sm:h-14 w-fit sm:w-full items-center self-center sm:self-start"
           >
            <input
              type="email"
              class="px-3 text-sm sm:text-base border-none outline-none bg-transparent w-full"
              placeholder="Enter your email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">Support</div>
          <div class="text-base sm:text-lg cursor-pointer">
            exclusive@gmail.com
          </div>
        </div>

        <!-- Column 3 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">Account</div>
          <div class="text-base sm:text-lg cursor-pointer">My Account</div>
          <div class="text-base sm:text-lg cursor-pointer">
            Login / Register
          </div>
          <div class="text-base sm:text-lg cursor-pointer">Cart</div>
          <div class="text-base sm:text-lg cursor-pointer">Wishlist</div>
          <div class="text-base sm:text-lg cursor-pointer">Shop</div>
        </div>

        <!-- Column 4 -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="text-xl font-bold">Quick Link</div>
          <div class="text-base sm:text-lg cursor-pointer">Privacy Policy</div>
          <div class="text-base sm:text-lg cursor-pointer">Terms Of Use</div>
          <div class="text-base sm:text-lg cursor-pointer">FAQ</div>
          <div
            class="text-base sm:text-lg cursor-pointer hover:text-gray-500 transition duration-300"
          >
            Contact
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
/* You can add custom SCSS here if needed */
</style>
