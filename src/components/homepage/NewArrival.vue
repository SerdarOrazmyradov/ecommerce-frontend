<template>
  <div class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Heading Section -->
    <div class="flex mb-8 sm:mb-12 md:mb-16">
      <div class="flex flex-col">
        <div class="flex items-center mb-4 sm:mb-6">
          <div class="bg-[#DB4444] w-4 sm:w-5 h-8 sm:h-10 rounded"></div>
          <div class="text-[#DB4444] text-sm sm:text-base ml-3 sm:ml-4">
            Featured
          </div>
        </div>
        <div class="flex">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
          >
            New Arrival
          </h2>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
      <!-- PlayStation 5 (Left Column) -->
      <div
        v-lazyload
        class="w-full lg:w-[58%] h-auto lg:h-[600px] bg-black relative rounded overflow-hidden"
      >
        <img
          data-url="https://ecommerce-frontend-bx39.onrender.com/new_arrival/ps5-slim-goedkope-playstation_large%201.png"
          alt="playstation_large"
          class="w-full h-auto lg:w-[90%] lg:h-[85%] object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
        <div
          class="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-[60%] sm:w-[242px]"
        >
          <div>
            <h3
              class="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-tight"
            >
              PlayStation 5
            </h3>
            <p class="text-xs sm:text-sm text-white leading-tight mt-2 sm:mt-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button
              class="text-neutral-50 text-sm sm:text-base mt-2 sm:mt-4 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column (Women + Speakers + Perfume) -->
      <div class="w-full lg:w-[42%] flex flex-col gap-4 sm:gap-6 md:gap-8">
        <!-- Women's Collection (Top) -->
        <div
          v-lazyload
          class="bg-[#0D0D0D] w-full h-48 sm:h-56 md:h-64 lg:h-[284px] relative rounded overflow-hidden"
        >
          <img
            data-url="https://ecommerce-frontend-bx39.onrender.com/new_arrival/attractive-woman-wearing-hat-posing-black-background 1.png"
            alt="women_collection"
            class="w-[70%] h-full object-cover absolute right-0"
          />
          <div
            class="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-[60%] sm:w-[242px]"
          >
            <h3
              class="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-tight"
            >
              Women's Collections
            </h3>
            <p class="text-xs sm:text-sm text-white leading-tight mt-2 sm:mt-4">
              Featured woman collections that give you another vibe.
            </p>
            <button
              class="text-neutral-50 text-sm sm:text-base mt-2 sm:mt-4 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>

        <!-- Bottom Row (Speakers + Perfume) -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
          <!-- Speakers -->
          <div
            v-lazyload
            class="bg-[#0D0D0D] w-full sm:w-1/2 h-48 sm:h-56 md:h-64 lg:h-[284px] relative rounded overflow-hidden"
          >
            <img
              data-url="https://ecommerce-frontend-bx39.onrender.com/new_arrival/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
              alt="speakers"
              class="w-[60%] h-auto object-contain absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            />
            <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-[70%]">
              <h3
                class="text-lg sm:text-xl text-white font-semibold leading-tight"
              >
                Speakers
              </h3>
              <p class="text-xs sm:text-sm text-white leading-tight mt-2">
                Amazon wireless speakers
              </p>

              <button
                class="text-neutral-50 text-sm sm:text-base mt-2 sm:mt-4 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>

          <!-- Perfume -->
          <div
            v-lazyload
            class="bg-[#0D0D0D] w-full sm:w-1/2 h-48 sm:h-56 md:h-64 lg:h-[284px] relative rounded overflow-hidden"
          >
            <img
              data-url="https://ecommerce-frontend-bx39.onrender.com/new_arrival/652e82cd70aa6522dd785109a455904c.png"
              alt="perfume"
              class="w-[50%] h-auto object-contain absolute bottom-4 sm:bottom-8 right-4 sm:right-8"
            />
            <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-[70%]">
              <h3
                class="text-lg sm:text-xl text-white font-semibold leading-tight"
              >
                Perfume
              </h3>
              <p class="text-xs sm:text-sm text-white leading-tight mt-2">
                GUCCI INTENSE OUD EDP
              </p>
              <button
                class="text-neutral-50 text-sm sm:text-base mt-2 sm:mt-4 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArrivals",
};
</script>

<style lang="scss" scoped>
/* Additional custom styles can be added here if needed */
</style>
