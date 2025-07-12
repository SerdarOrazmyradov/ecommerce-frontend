<template>
  <div class="container px-5">
    <!-- <div class="bg-black h-px"></div> -->
    <!-- header -->
    <div class="mt-20 h-5 py-px flex items-center">
      <div class="text-xs lg:text-sm ml-3 text-gray-500 cursor-pointer">
        Account
      </div>
      <div class="h-3.5 w-[1px] ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 text-gray-500 cursor-pointer">
        My Account
      </div>
      <div class="h-3.5 w-[1px] ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 text-gray-500 cursor-pointer">
        Product
      </div>
      <div class="h-3.5 w-[1px] ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 text-gray-500 cursor-pointer">
        View Cart
      </div>
      <div class="h-3.5 w-[1px] ml-3 bg-gray-500 rotate-[30grad]"></div>
      <div class="text-xs lg:text-sm ml-3 cursor-pointer">CheckOut</div>
    </div>
    <!-- body -->
    <div class="flex justify-around">
      <div class="">
        <div class="text-4xl font-medium mt-20">Billing Details</div>
        <!-- form -->
        <div class="flex flex-col gap-8 mt-12 mb-36 max-w-xl">
          <div class="">
            <div class="text-base text-gray-500">
              First Name <span class="text-red-400">*</span>
            </div>
            <input
              name="name"
              class="px-3 w-xs mt-2 h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">Company Name</div>
            <input
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">
              Street Address <span class="text-red-400">*</span>
            </div>
            <input
              class="px-3 mt-2 w-xs h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">
              Apartment, floor, etc. (optional)
            </div>
            <input
              class="px-3 mt-2 w-xs w-48 h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">
              Phone Number <span class="text-red-400">*</span>
            </div>
            <input
              class="px-3 mt-2 w-xs w-48 h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="">
            <div class="text-base text-gray-500">
              Email Address <span class="text-red-400">*</span>
            </div>
            <input
              class="px-3 mt-2 w-xs w-48 h-12 border outline-none rounded-sm shadow-none focus:ring-1 focus:ring-blue-400 transition duration-500"
              type="text"
            />
          </div>
          <div class="flex gap-4 items-center">
            <input type="checkbox" name="fast_checkout" class="w-6 h-6" />
            <label class="text-base"
              >Save this information for faster check-out next time</label
            >
          </div>
        </div>
      </div>
      <!-- right  side -->
      <div class="relative">
        <div class="flex flex-col gap-8 relative top-52">
          <div class="h-xl w-lg">
            <div class="w-md flex flex-col gap-8">
              <!-- first product -->
              <div class="flex gap-6 items-center">
                <img
                  src="../../../public/best_selling/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
                  alt="product"
                  class="w-14 h-14"
                />
                <div class="flex justify-between flex-1">
                  <div class="text-base">LCD Monitor</div>
                  <div class="text-base">$650</div>
                </div>
              </div>
              <!-- second product -->
              <div class="flex gap-6 items-center">
                <img
                  src="../../../public/best_selling//672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
                  alt="product"
                  class="w-14 h-14"
                />
                <div class="flex justify-between flex-1">
                  <div class="text-base">LCD Monitor</div>
                  <div class="text-base">$1100</div>
                </div>
              </div>
              <!-- subtotal -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">Subtotal:</div>
                  <div class="text-base">$1750</div>
                </div>
                <div class="h-px w-full bg-gray-500"></div>
              </div>
              <!-- shopping -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">Shipping:</div>
                  <div class="text-base">Free</div>
                </div>
                <div class="h-px w-full bg-gray-500"></div>
              </div>

              <!-- tool -->
              <div class="flex flex-col gap-4">
                <div class="flex justify-between flex-1">
                  <div class="text-base">Total:</div>
                  <div class="text-base">$1750</div>
                </div>
              </div>
              <!-- cash -->
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <input type="radio" class="w-6 h-6" />
                  <div>Bank</div>
                </div>
                <div class="flex gap-2 h-10 items-center">
                  <img
                    src="../../../public/bcash/image 30.png"
                    class="cursor-pointer"
                    alt=""
                  />
                  <img
                    src="../../../public/bcash/image 31.png"
                    class="cursor-pointer"
                    alt=""
                  />
                  <img
                    src="../../../public/bcash/image 32.png"
                    class="cursor-pointer"
                    alt=""
                  />
                  <img
                    src="../../../public/bcash/image 33.png"
                    class="cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
              <!-- Cash on delivery -->
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <input
                    type="radio"
                    style="accent-color: #000"
                    checked="true"
                    class="w-6 h-6"
                  />
                  <div>Cash on delivery</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between gap-4">
            <input
              placeholder="Coupon Code"
              type="text"
              class="text-base py-4 focus:ring-1 duration-500 transition outline-none border rounded-sm pl-6"
            />
            <div
              class="hover:bg-red-300 cursor-pointer text-base py-4 bg-red-400 rounded-sm flex items-center justify-center flex-1 text-neutral-50"
            >
              Apply Coupon
            </div>
          </div>
          <!-- place order -->
          <div
            class="w-48 text-base font-medium bg-red-400 py-4 text-neutral-50 rounded-sm flex items-center justify-center"
          >
            Place Order
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
