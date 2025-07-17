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
            class="fas fa-user"
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
        Have an account?
      </h3>

      <form @submit.prevent="handle" class="space-y-5">
        <!-- Full Name -->

        <div>
          <label
            class="block  text-gray-700 uppercase font-bold text-[12px] tracking-[1px] mb-[0.5rem]"
            for="name"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            id="name"
            placeholder="John Doe"
            class="w-full px-[0.375rem] py-[0.75rem]  border-gray-300  focus:ring-1 focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] text-[#000] rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
          />
        </div>
        <span class="flex items-center" v-if="error_username">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#b50000"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <div class="text-[#b50000] px-[0.375rem] ">{{ error_username }}</div>
        </span>

        <!-- Password -->

        <div class="relative">
          <label
            class="block  text-gray-700 uppercase font-bold text-[12px] tracking-[1px] mb-[0.5rem]"
            for="password"
            >Password</label
          >
          <input
            v-model="password"
            :type="toggle_password ? 'text' : 'password'"
            id="password-field"
            placeholder="Password"
            class="w-full px-[0.375rem] py-[0.75rem]  border-gray-300  focus:ring-1 focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] text-[#000] rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
          />
          <span
            class="absolute top-9 right-3 text-gray-500 cursor-pointer"
            @click="toggle_password = !toggle_password"
          >
            <i :class="toggle_password ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </span>
        </div>
        <span class="flex items-center" v-if="error_password">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#b50000"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <div class="text-[#b50000] px-[0.375rem] ">{{ error_password }}</div>
        </span>

        <!-- Checkbox && forgot password -->
        <div class="flex justify-between">
          <div class="flex items-start">
            <input type="checkbox" id="terms" class="mt-1 mr-2" />
            <label
              for="terms"
              class="text-sm text-gray-600 cursor-pointer mb-[12px]"
            >
              Remember me
            </label>
          </div>
          <div class="flex items-start">
            <label class="text-sm text-gray-600 cursor-pointer mb-[12px]">
              Forgot Password
            </label>
          </div>
        </div>

        <!-- Submit Button -->

        <div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white p-[] !px-[1rem] !rounded-[0.25rem] cursor-pointer shadow-none !h-[52px] text-[15px] font-normal text-center tracking-[1.5]"
          >
            Login
          </button>
        </div>
      </form>

      <!-- <p class="mt-4 text-sm text-gray-600">
        I'm already a member!
        <a
          href="#signin"
          class="text-blue-500 hover:underline"
          style="transition: 0.3s all ease; box-sizing: border-box"
          >Sign In</a
        >
      </p> -->
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
import { getToken, setToken } from "../compasable/cookie/vue-cookie-next";
const BASE_URL = "http://localhost:3000";

const username = ref("");
const password = ref("");
const toggle_password = ref(false);
const isVisiable = ref(false);
const isCompleted = ref(false);
const error_username = ref("");
const error_password = ref("");

const handle = () => {
  loginFn(username.value, password.value);
};
const loginFn = (username, password) => {
  isVisiable.value = true;
  error_username.value = "";
  error_password.value = "";

  isCompleted.value = false;
  let hasError = false;
  if (!username) {
    error_username.value = "username boş bolup bilenok";
    hasError = true;
  } else {
    if (username.length < 3) {
      error_username.value = "username 3-den az harp bolup bilenok";
      hasError = true;
    }
    if (username.length > 30) {
      error_username.value = "username 30-dan köp harp bolup bilenok";
      hasError = true;
    }
    if (typeof username != "string") {
      error_username.value = "username string bolmaly";
      hasError = true;
    }
  }
  if (!password) {
    error_password.value = "password boş bolup bilenok";
    hasError = true;
  } else {
    if (password.length < 8) {
      error_password.value = "password 8-den az harp bolup bilenok";
      hasError = true;
    }
    if (password.length > 30) {
      error_password.value = "password 30-dan köp harp bolup bilenok";
      hasError = true;
    }
    if (typeof password != "string") {
      error_password.value = "password string bolmaly";
      hasError = true;
    }
  }

  const postData = {
    username: username,
    password: password,
  };
  if (hasError) {
    isVisiable.value = false;
    isCompleted.value = false;
    return;
  }
  // const error = signupValidation(postData);
  // if (error) {
  //   console.log("error validation ", error);
  //   error_validation.value = error;
  //   return;
  // }

  fetch(BASE_URL + "/auth/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
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
        isVisiable.value = true;
        isCompleted.value = true;

        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", data.token);
        }

        setTimeout(() => {
          router.replace({
            name: "home",
            // params: { genre: route.params.genre, page: route.params.page || "" },
            // query: {
            //   searchedText: route.query.searchedText || "",
            //   page: route.query.page || "1",
            // },
          });
        }, 1500);

        // this.$cookie.set(data.details.name, data.token, { expires: "1Y" });
        // setToken(data.details.name, data.token);
        // console.log('token : ', getToken(data.details.name));

        // Get a cookie
        // const value = this.$cookie.get('myKey'); // For vue-cookie

        // redirect
      } else {
        isVisiable.value = false;
        error_username.value = data.message;
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
