<template>
  <div
    class="cursor-pointer max-w-2xs h-[500px] relative group ml-5 sm:ml-10 md:ml-0 shadow-md duration-500 transform transition hover:scale-105 hover:z-20 hover:shadow-xl"
  >
    <div
      class="absolute top-0 left-0 h-[200px] w-full bg-gray-100 rounded-sm"
    ></div>
    <div class="select-none absolute top-0 left-0 w-full rounded-2xl">
      <!-- image -->
      <img
        v-if="product.main_image"
        @click="
          router.push({
            name: 'product_details',
            params: { id: productId },
          })
        "
        :src="'https://ecommerce-backend-fh32.onrender.com/' + product.main_image"
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
        :src="'https://ecommerce-backend-fh32.onrender.com/uploads/images' + product.image"
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
        class="bg-black w-full h-10 rounded-bl-sm rounded-br-sm text-base text-neutral-50 font-medium flex items-center justify-center mt-3 py-px cursor-pointer hover:bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 active:shadow-none active:translate-y-0"
        style="
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        "
      >
        Add To Cart
      </div>
      <div
        v-else
        class="bg-black w-full h-10 rounded-bl-sm rounded-br-sm text-base text-neutral-50 font-medium flex items-center justify-center mt-3 py-px transition duration-300 opacity-0 group-hover:opacity-100 active:shadow-none active:translate-y-0"
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

const toastStore = useToast();
const useCartStore = useCart();

const router = useRouter();
const route = useRoute();
const useLikedStore = useLiked();

const props = defineProps({
  category: { type: Object },
});

const categoryId = computed(
  () => props.category.id ?? props.category.category_id
);

// const isLiked = computed(() =>
//   useLikedStore.likedProducts.some((p) => p.id === productId.value)
// );
// const toggleLike = () => {
//   if (isLiked.value) {
//     useLikedStore.removeProduct(props.product);
//   } else {
//     useLikedStore.addProduct(props.product);
//   }
// };

const showSuccessToast = () => {
  toastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "success",
  });
};
</script>

<style lang="scss" scoped></style>
