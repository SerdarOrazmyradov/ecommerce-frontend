<template>
  <div
    class="cursor-pointer max-w-2xs h-[500px] relative group ml-5 sm:ml-10 md:ml-0 shadow-md duration-500 transform transition hover:scale-105 hover:z-20 hover:shadow-xl"
  >
    <!-- discount -->
    <div
      v-if="Number(product.discount || 0) > 0"
      class="select-none absolute top-3 left-3 flex items-center justify-center bg-red-400 rounded-sm text-neutral-50 h-6 w-14 py-1 z-20"
    >
      -{{ product.discount }}%
    </div>

    <!-- new -->
    <div
      v-else-if="product.isNew"
      class="absolute top-3 left-3 bg-[#00FF66] text-[#FAFAFA] text-xs sm:text-sm px-3 py-1 rounded-md z-20"
    >
      NEW
    </div>

    <!-- heart & wishlist icons -->

    <!-- Action Buttons -->
    <div class="absolute top-3 right-3 flex flex-col gap-2 z-10">
      <!-- heart -->

      <button
        @click="
          () => {
            toggleLike();
            console.log('salam');
          }
        "
        class="w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center rounded-full bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm cursor-pointer"
        aria-label="Add to wishlist"
      >
        <svg
          ref="heart"
          xmlns="http://www.w3.org/2000/svg"
          :fill="isLiked ? 'red' : 'none'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 sm:size-6"
          :class="isLiked ? 'text-red-400' : 'text-black'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
      <!-- <HeartAnim :product="product" @toggle-like="(id) => toggleLike()" /> -->
      <!-- <ToggleFavorite /> -->
    </div>

    <div
      class="absolute top-0 left-0 h-[200px] w-full bg-gray-100 rounded-sm"
    ></div>
    <div
      v-lazyload
      class="select-none absolute top-0 left-0 w-full rounded-2xl"
    >
      <!-- image -->
      <img
        v-if="product.main_image"
        @click="
          router.push({
            name: 'product_details',
            params: { id: productId },
          })
        "
        :data-url="'http://localhost:3000/' + product.main_image"
        alt="product image "
        loading="lazy"
        class="h-60 mt-9 mx-auto object-scale-down transition-opacity opacity-100 duration-200 ease-in-out"
      />
      <img
        v-else
        @click="
          router.push({
            name: 'product_details',
            params: { id: productId },
          })
        "
        :data-url="'http://localhost:3000/uploads/images' + product.image"
        alt="product image "
        loading="lazy"
        class="w-42 h-36 mt-9 mx-auto object-scale-down transition-opacity opacity-100 duration-200 ease-in-out"
      />
      <!-- add to cart button -->
      <div
        v-if="!useCartStore.cartProducts.some((p) => p.id == productId)"
        @click="
          showSuccessToast();
          useCartStore.addProduct(product);
        "
        :class="supportsHover() ? 'opacity-0 group-hover:opacity-100' : ''"
        class="bg-black w-full h-10 rounded-bl-sm rounded-br-sm text-base text-neutral-50 font-medium flex items-center justify-center mt-3 py-px cursor-pointer hover:bg-black/80 transition duration-300 active:shadow-none active:translate-y-0"
        style="
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        "
      >
        Add To Cart
      </div>
      <div
        v-else
        :class="supportsHover() ? 'opacity-0 group-hover:opacity-100' : ''"
        class="bg-black w-full h-10 rounded-bl-sm rounded-br-sm text-base text-neutral-50 font-medium flex items-center justify-center mt-3 py-px transition duration-300 active:shadow-none active:translate-y-0"
        style="
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        "
      >
        <div class="flex w-full items-center justify-around">
          <!-- decrease button -->
          <div
            @click="useCartStore.addProduct(product, false)"
            class="size-10 flex items-center justify-center hover:bg-gray-800/80 active:bg-gray-100/40 rounded-sm"
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div style="font-variant-numeric: tabular-nums">
            {{
              useCartStore.cartProducts.filter((p) => p.id === productId)[0]
                .count
            }}
          </div>
          <!-- increase button -->
          <div
            @click="useCartStore.addProduct(product)"
            class="size-10 flex items-center justify-center hover:bg-gray-800/80 active:bg-gray-100/40 rounded-sm"
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- title & price & review-->
      <div class="mt-4 flex flex-col gap-2">
        <div v-if="product.name" class="text-base font-medium">
          {{ product.name }}
        </div>
        <div v-else class="text-base font-medium">
          {{ product.title }}
        </div>
        <div class="flex gap-2 md:gap-3">
          <div class="text-base text-red-400 font-medium">
            ${{ product.price }}
          </div>
          <div
            v-if="product.oldprice"
            class="line-through text-base text-gray-600 font-medium"
          >
            ${{ product.oldprice }}
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div v-if="product.rating" class="flex gap-1">
            <i
              v-for="(n, index) in 5"
              :key="index"
              class="text-yellow-400 text-base"
              :class="
                n <= Math.round(product.rating) ? 'fas fa-star ' : 'far fa-star'
              "
            >
            </i>
          </div>
          <div class="text-xs lg:text-sm text-gray-500">
            ({{ product.reviews || 10 }})
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref, watch } from "vue";
import { useLiked, useCart, useToast } from "../../stores/stores";
import { useRoute, useRouter } from "vue-router";
import HeartAnim from "../../views/favorite/HeartAnim.vue";
import FavoriteIcon from "../../views/favorite/FavoriteIcon.vue";
import ToggleFavorite from "../../views/favorite/ToggleFavorite.vue";
import { supportsHover } from "../../compasable/hover";

const toastStore = useToast();
const useCartStore = useCart();
const useLikedStore = useLiked();

const router = useRouter();
const route = useRoute();

const props = defineProps({
  product: { type: Object },
});

const productId = computed(() => props.product.id ?? props.product.product_id);

const isLiked = computed(() =>
  useLikedStore.likedProducts.some((p) => p.id === productId.value)
);

const toggleLike = () => {
  if (isLiked.value) {
    useLikedStore.removeProduct(props.product);
  } else {
    useLikedStore.addProduct(props.product);
  }
};

const showSuccessToast = () => {
  toastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "success",
  });
};
</script>

<style scoped>
.blurred-img {
  background-repeat: no-repeat;
  background-size: cover;
}

.blurred-img::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  animation: pulse 2.5s infinite;
  background-color: var(--text-color);
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
  }
}

.blurred-img.loaded::before {
  animation: none;
  content: none;
}

.blurred-img img {
  opacity: 0;
  transition: opacity 250ms ease-in-out;
}

.blurred-img.loaded img {
  opacity: 1;
}

.br {
  border-radius: 8px;
}
.w80 {
  width: 80%;
}
.card {
  border: 2px solid #fff;
  box-shadow: 0px 0px 10px 0 #a9a9a9;
  padding: 30px 40px;
  width: 80%;
  margin: 50px auto;
}
.profilePic {
  height: 65px;
  width: 65px;
  border-radius: 50%;
}
.comment {
  height: 10px;
  background: #777;
  margin-top: 20px;
}

.wrapper {
  width: 0px;
  animation: fullView 0.5s forwards linear;
}

@keyframes fullView {
  100% {
    width: 100%;
  }
}

.animate {
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>
