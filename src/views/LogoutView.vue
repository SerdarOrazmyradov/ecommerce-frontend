<template>
  <section
    class="py-16 bg-gray-100 min-h-screen flex items-center justify-center"
  >
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <div
        class="flex items-center justify-center w-[80px] h-[80px] bg-blue-500 rounded-full text-[30px] mx-auto mb-[10px]"
      >
        <span class="text-3xl text-blue-500">
          <i
            class="fas fa-sign-out"
            style="
              color: white;
              display: inline-block;
              font: normal normal normal 14px / 1 FontAwesome;
              font-size: inherit;
              text-rendering: auto;
              -webkit-font-smoothing: antialiased;
              box-sizing: border-box;
            "
          ></i>
        </span>
      </div>
      <h3
        class="text-center font-light mb-[1.5rem] text-[1.75rem] leading-[1.5] font-['Lato', Arial, sans-serif]"
      >
        Are you logging out?
      </h3>

      <div class="space-y-5">
        <!-- Checkbox -->
        <div class="flex justify-center">
          <label
            for="terms"
            class="text-sm text-gray-600 text-center mb-[12px]"
          >
            You can always log back in at any time. If you <br />
            just want to switch accounts, you can
            <a href="" class="underline">
              add <br />
              another account.</a
            >
          </label>
        </div>

        <!-- Submit Button -->

        <div class="flex justify-center gap-8">
          <div>
            <button
              class="w-full bg-white text-blue-500 hover:text-blue-600 border-1 p-[] !px-[1rem] !rounded-[0.25rem] cursor-pointer shadow-none !h-[52px] text-[15px] font-normal text-center tracking-[1.5]"
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              @click="handle"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white p-[] !px-[1rem] !rounded-[0.25rem] cursor-pointer shadow-none !h-[52px] text-[15px] font-normal text-center tracking-[1.5]"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>

    <loader-and-checkmark
      v-show="isVisiable"
      :isCompleted="isCompleted"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { signupValidation } from "../../validation/validations";
import LoaderAndCheckmark from "../components/loader/LoaderAndCheckmark.vue";
import { getCookie, getToken } from "../compasable/cookie/vue-cookie-next";

const BASE_URL = "http://localhost:3000/";

const toggle_password = ref(false);
const isVisiable = ref(false);
const isCompleted = ref(false);

const handle = () => {
  // const token = getToken("serdar28");

  const token = localStorage.getItem("token");
  logout(token);
};

const logout = (token) => {
  isVisiable.value = true;

  isCompleted.value = false;

  fetch(BASE_URL + "auth/api/logout", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success) {
        // redirect
        isVisiable.value = true;
        isCompleted.value = true;
      } else {
        isVisiable.value = false;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<style scoped>
body {
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
}
</style>

<!-- Font Awesome -->
<!-- Add this in your main HTML if not already included -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /> -->
