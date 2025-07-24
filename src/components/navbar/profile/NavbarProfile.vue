<template>
  <div
    v-if="useAuth().isAuthenticated"
    class="w-8 ml-4 rounded-full relative"
    :class="{ 'bg-red-400': showDropdown }"
  >
    <svg
      @click.stop="showDropdown = !showDropdown"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      :stroke="showDropdown ? 'white' : 'black'"
      class="size-8 cursor-pointer"
      :class="{ 'bg-white/0  transition duration-75': showDropdown }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>

    <!-- dropdown -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div>
        <div
          ref="dropdownMenu"
          v-show="showDropdown"
          class="transition duration-300 ease-in-out absolute w-72 z-20 rounded px-5 py-2 bg-linear-to-br from-gray-500 to-black top-10 right-0"
        >
          <!-- my account -->
          <div
            @click="
              () => {
                showDropdown = false;
                changerouter('myaccount');
              }
            "
            class="py-2 flex gap-3 items-center cursor-pointer hover:bg-linear-to-br hover:from-gray-500/90 hover:to-black/90 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <div class="text-sm text-neutral-50 select-none">
              Manage My Account
            </div>
          </div>
          <!-- my order -->
          <div
            class="py-2 flex gap-3 items-center cursor-pointer hover:bg-linear-to-br hover:from-gray-500/90 hover:to-black/90 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <div class="text-sm text-neutral-50 select-none">My Order</div>
          </div>
          <!-- my cancellation -->
          <div
            class="py-2 flex gap-3 items-center cursor-pointer hover:bg-linear-to-br hover:from-gray-500/90 hover:to-black/90 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <div class="text-sm text-neutral-50 select-none">
              My Cancellations
            </div>
          </div>

          <!-- my reviews -->
          <div
            class="py-2 flex gap-3 items-center cursor-pointer hover:bg-linear-to-br hover:from-gray-500/90 hover:to-black/90 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>

            <div class="text-sm text-neutral-50 select-none">My Reviews</div>
          </div>
          <!-- logout -->
          <div
            @click="
              showInfoToast();
              useAuthStore.logout();
            "
            class="py-2 flex gap-3 items-center cursor-pointer hover:bg-linear-to-br hover:from-gray-500/90 hover:to-black/90 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>

            <div class="text-sm text-neutral-50 select-none">Logout</div>
          </div>
        </div>
      </div></transition
    >
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuth, useToast } from "../../../stores/stores";
import { useRoute, useRouter } from "vue-router";
import OutsideClick from "../outsideClick/OutsideClick.vue";
const router = useRouter();
const route = useRoute();
const useAuthStore = useAuth();
const toastStore = useToast();
const dropdownMenu = ref();
const showDropdown = ref(false);

const changerouter = (routename) => {
  router.push({ name: routename });
};

const showInfoToast = () => {
  toastStore.addToast({
    message: "Üstünlikli ýerine ýetirildi!",
    type: "info",
  });
};
onMounted(() => {
  window.addEventListener("click", (e) => {
    if (dropdownMenu.value != null) {
      if (!dropdownMenu.value.contains(e.target) && showDropdown.value) {
        showDropdown.value = false;
      }
    }
  });
});
</script>

<style lang="scss" scoped></style>
