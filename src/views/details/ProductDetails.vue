<template>
  <div>
    <div class="bg-black h-px"></div>
    <div class="container px-1 md:px-3 xl:px-7 lg:mx-auto">
      <div class="mt-20 h-5 py-px flex items-center">
        <div class="text-xs lg:text-sm ml-3 text-gray-500 cursor-pointer">Account</div>
        <div class="h-3.5 w-[1px] ml-3 bg-gray-500 rotate-[30grad]"></div>
        <div class="text-xs lg:text-sm ml-3 text-gray-500 cursor-pointer">Gaming</div>
        <div class="h-3.5 w-[1px] ml-3 bg-gray-500 rotate-[30grad]"></div>
        <div class="text-xs lg:text-sm ml-3 cursor-pointer" >Havic HV G-92 Gamepad</div>
      </div>

      <div class="mt-20 mb-40 flex flex-col lg:flex-row gap-4">
        <div class="hidden lg:flex lg:flex-col gap-4">
          <div
            class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
          >
            <img
              src="../../../public/details/image 57.png"
              alt="practising"
              class="cursor-pointer"
            />
          </div>
          <div
            class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
          >
            <img
              src="../../../public/details/image 58.png"
              alt="practising"
              class="cursor-pointer"
            />
          </div>
          <div
            class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
          >
            <img
              src="../../../public/details/image 61.png"
              alt="practising"
              class="cursor-pointer"
            />
          </div>
          <div
            class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
          >
            <img
              src="../../../public/details/image 59.png"
              alt="practising"
              class="cursor-pointer"
            />
          </div>
        </div>
        <div
          class="hidden lg:flex flex-1 lg:w-full bg-gray-100 items-center justify-center rounded-sm"
        >
          <img
            src="../../../public/details/image 63.png"
            alt="practising"
            class="mx-auto cursor-pointer"
          />
        </div>
        <div class="flex gap-4">
          <div class="flex flex-col lg:hidden gap-4">
            <div
              class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
            >
              <img
                src="../../../public/details/image 57.png"
                alt="practising"
                class="cursor-pointer"
              />
            </div>
            <div
              class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
            >
              <img
                src="../../../public/details/image 58.png"
                alt="practising"
                class="cursor-pointer"
              />
            </div>
            <div
              class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
            >
              <img
                src="../../../public/details/image 61.png"
                alt="practising"
                class="cursor-pointer"
              />
            </div>
            <div
              class="w-40 h-32.5 bg-gray-100 rounded-sm flex justify-center items-center"
            >
              <img
                src="../../../public/details/image 59.png"
                alt="practising"
                class="cursor-pointer"
              />
            </div>
          </div>
          <div
            class="lg:hidden flex flex-1 lg:w-full bg-gray-100 items-center justify-center rounded-sm"
          >
            <img
              src="../../../public/details/image 63.png"
              alt="practising"
              class="mx-auto cursor-pointer"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-xl lg:text-2xl font-semibold">
            Havic HV G-92 Gamepad
          </div>
          <div class="flex items-center gap-2">
            <!-- stars -->
            <div class="flex text-yellow-500">
              <template v-for="n in 5" :key="n"
                ><i
                  :class="n < Math.round(5) ? 'fas fa-star ' : 'far fa-star'"
                  class="sm:text-sm text-xs"
                ></i>
              </template>
            </div>
            <!-- review -->
            <div class="text-xs lg:text-sm text-gray-500">(150 Reviews)</div>
            <!-- line -->
            <div class="h-4 w-px bg-gray-500 ml-2"></div>
            <!-- stock -->
            <div class="ml-2 text-xs lg:text-sm text-[#00FF66]">In Stock</div>
          </div>
          <div class="text-2xl">$192.00</div>
          <div class="text-xs lg:text-sm pt-2">
            PlayStation 5 Controller Skin High quality vinyl with air <br />
            channel adhesive for easy bubble free install & mess <br />
            free removal Pressure sensitive.
          </div>
          <div class="w-full mt-2 h-px bg-black/90"></div>
          <!-- colors -->
          <div class="flex gap-6 mt-2 items-center">
            <div class="text-lg lg:text-xl">Colours:</div>
            <div class="flex gap-2 items-center">
              <div class="w-5 h-5 rounded-full bg-black cursor-pointer"></div>
              <div class="w-5 h-5 rounded-full bg-red-400 cursor-pointer"></div>
            </div>
          </div>
          <!-- size -->
          <div class="flex gap-6 mt-2 items-center">
            <div class="text-lg lg:text-xl">Size:</div>
            <div class="flex gap-4 items-center">
              <div
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-sm flex items-center justify-center text-xs lg:text-sm border cursor-pointer"
              >
                XS
              </div>
              <div
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-sm flex items-center justify-center text-xs lg:text-sm border cursor-pointer"
              >
                S
              </div>
              <div
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-sm flex items-center justify-center text-xs lg:text-sm border bg-red-400 border-red-400 text-neutral-50 cursor-pointer"
              >
                M
              </div>
              <div
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-sm flex items-center justify-center text-xs lg:text-sm border cursor-pointer"
              >
                L
              </div>
              <div
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-sm flex items-center justify-center text-xs lg:text-sm border cursor-pointer"
              >
                XL
              </div>
            </div>
          </div>
          <!-- quantity -->
          <div class="flex gap-4">
            <div class="flex">
              <div
                class="h-8 w-7 lg:h-11 lg:w-10 flex items-center border hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer rounded-l-sm rounded-bl-sm justify-center"
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
                    d="M5 12h14"
                  />
                </svg>
              </div>
              <div
                class="h-8 w-15 lg:h-11 lg:w-20 text-lg lg:text-xl flex items-center justify-center border-y font-medium"
              >
                2
              </div>
              <div
                class="h-8 w-7 lg:h-11 lg:w-10 flex items-center border hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer rounded-r-sm rounded-br-sm justify-center"
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="h-8 lg:h-11 w-32 lg:w-40 flex items-center justify-center text-neutral-50 bg-red-400 rounded-sm cursor-pointer"
              >
                Buy Now
              </div>
              <div
                class="h-8 lg:h-11 w-7 lg:w-10 flex items-center border hover:bg-red-400 hover:text-white hover:border-red-400 cursor-pointer rounded-sm justify-center"
              >
                <!-- heart icon -->
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <!-- free delivery -->
            <div
              class="mt-4 lg:mt-6 border rounded-tl-sm rounded-tr-sm h-16 md:h-20 lg:h-24 flex items-center"
            >
              <div class="h-12 ml-2 lg:ml-4 flex gap-2 lg:gap-4 items-center">
                <img
                  src="../../../public/icons/icon-delivery (1).png"
                  alt="icon delivary"
                />
                <div class="flex flex-col gap-2">
                  <div class="text-sm lg:text-base font-medium">
                    Free Delivery
                  </div>
                  <div
                    class="underline text-xs/4 lg:text-xs font-medium cursor-pointer"
                  >
                    Enter your postal code for Delivery Availability
                  </div>
                </div>
              </div>
            </div>
            <div
              class="border-x border-b rounded-br-sm rounded-bl-sm h-16 md:h-20 lg:h-24 flex items-center"
            >
              <div class="h-12 ml-2 lg:ml-4 flex gap-2 lg:gap-4 items-center">
                <img
                  src="../../../public/icons/Icon-return.png"
                  alt="icon delivary"
                />
                <div class="flex flex-col gap-2">
                  <div class="text-sm lg:text-base font-medium">
                    Return Delivery
                  </div>
                  <div class="text-xs/4 lg:text-xs font-medium">
                    Free 30 Days Delivery Returns.
                    <span class="underline text-xs font-medium cursor-pointer">
                      Details</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
