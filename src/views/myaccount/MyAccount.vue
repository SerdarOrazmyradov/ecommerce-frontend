<template>
  <message-modal
    v-if="showMessageModal"
    @close="showMessageModal = false"
    @again="
      () => {
        showMessageModal = false;
        console.log('showMessageModal :', showMessageModal);
        saveChange();
      }
    "
    @continue="
      () => {
        showMessageModal = false;
        console.log('showMessageModal :', showMessageModal);
        // setTimeout(() => {showMessageModal = }, 2000);
        // router.push({
        //   name: 'home',
        // });
      }
    "
    :isError="isError"
    :message="message"
  />
  <div
    v-if="isLoading"
    class="fixed top-0 bg-gray-100/90 w-full h-full flex items-center justify-center z-20"
  >
    <loading-animation text="Process" />
  </div>
  <div
    class="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12"
  >
    <!-- header -->
    <div class="flex justify-between w-full mt-20 h-5 py-px">
      <!-- header -->
      <div class="flex items-center">
        <router-link
          :to="{ name: 'home' }"
          class="text-xs lg:text-sm ml-2 sm:ml-3 text-gray-500 cursor-pointer"
        >
          Home
        </router-link>
        <div class="h-3.5 w-px ml-2 sm:ml-3 bg-gray-500 rotate-[30grad]"></div>
        <div class="text-xs lg:text-sm ml-3 cursor-pointer">My Account</div>
      </div>
      <div class="mr-2 sm:mr-3 flex items-center gap-1">
        <div class="text-xs lg:text-sm">Welcome</div>
        <div class="text-xs lg:text-sm text-red-400">
          {{ useAuthStore.user.name }}
        </div>
      </div>
    </div>
    <!-- main -->
    <div class="mt-20 flex lg:gap-10 xl:gap-30 mb-36">
      <!-- left side -->
      <div class="invisible">
        <!-- Manage My Account -->
        <div class="mx-2 lg:mx-3">
          <div class="text-sm lg:text-base font-medium">Manage My Account</div>
          <div class="ml-7 flex flex-col gap-2 mt-4">
            <div class="text-sm lg:text-base cursor-pointer text-red-500">
              My Profile
            </div>
            <div
              class="hidden text-sm lg:text-base cursor-pointer text-gray-500"
            >
              Address Book
            </div>
            <div class="hidden text-sm lg:text-base cursor-pointer text-gray-500">
              My Payment Options
            </div>
          </div>
        </div>
        <!--My Orders  -->
        <div class="hidden mx-2 lg:mx-3 mt-6">
          <div class="text-sm lg:text-base font-medium">My Orders</div>
          <div class="ml-7 flex flex-col gap-2 mt-4">
            <div class="text-sm lg:text-base cursor-pointer text-gray-500">
              My Returns
            </div>
            <div class="text-sm lg:text-base cursor-pointer text-gray-500">
              My Cancellations
            </div>
          </div>
        </div>
        <!-- My WishList -->
        <div class="hidden mx-2 lg:mx-3 mt-6">
          <div class="text-sm lg:text-base font-medium">My WishList</div>
        </div>
      </div>
      <!-- right side -->
      <div class="mx-2 lg:mx-3 mt-8">
        <!-- Edit Your Profile -->
        <div class="text-red-500 text-xl font-medium ml-6">
          Edit Your Profile
        </div>
        <div>
          <div>
            <div class="ml-6 flex flex-col gap-2 mt-4">
              <div class="text-sm lg:text-base">USERNAME</div>
              <input
                v-model="name"
                type="text"
                id="name"
                class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 text-gray-500 focus:ring-1 focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
              />
            </div>
            <div class="ml-6 flex flex-col gap-2 mt-4">
              <div class="text-sm lg:text-base">Password Changes</div>
              <!-- <input
                type="text"
                id="currentpassword"
                placeholder="Current Passwod"
                class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 focus:ring-1 text-black focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
              /> -->

              <div class="relative">
                <input
                  :type="toggle_password ? 'text' : 'password'"
                  id="currentpassword"
                  v-model="password"
                  placeholder="Current Passwod"
                  class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 focus:ring-1 focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] text-gray-500 rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
                />

                <span
                  class="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  @click="toggle_password = !toggle_password"
                >
                  <i
                    :class="toggle_password ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  ></i>
                </span>
              </div>
            </div>
            <div
              class="ml-6 flex flex-col gap-2 mt-4 sm:w-sm md:w-lg lg:w-xl xl:w-2xl"
            >
              <!-- <input
                type="text"
                id="newpassword"
                placeholder="New Passwod"
                class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 focus:ring-1 text-black focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
              /> -->

              <div class="relative">
                <input
                  :type="toggle_newpasswod ? 'text' : 'password'"
                  id="newpassword"
                  v-model="newpassword"
                  placeholder="New Passwod"
                  class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 focus:ring-1 focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] text-gray-500 rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
                />

                <span
                  class="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  @click="toggle_newpasswod = !toggle_newpasswod"
                >
                  <i
                    :class="
                      toggle_newpasswod ? 'fas fa-eye-slash' : 'fas fa-eye'
                    "
                  ></i>
                </span>
              </div>
            </div>
            <div
              class="ml-6 flex flex-col gap-2 mt-4 sm:w-sm md:w-lg lg:w-xl xl:w-2xl"
            >
              <!-- <input
                type="text"
                id="confirm_new_passwod"
                placeholder="Confirm New Passwod"
                class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 focus:ring-1 text-black focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
              /> -->

              <div class="relative">
                <input
                  :type="toggle_confirm_new_passwod ? 'text' : 'password'"
                  id="confirm_new_passwod"
                  v-model="confirm_new_passwod"
                  placeholder="Confirm New Passwod"
                  class="w-full px-[0.375rem] py-[0.75rem] border-gray-300 focus:ring-1 focus:ring-blue-400 outline-none transition duration-[0.6s] h-[52px] bg-[#fff] text-gray-500 rounded-[5px] shadow-none border-[1px] border-solid-[rgba(0, 0, 0, 0.1)] tracking-[1.5] font-normal overflow-clip"
                />

                <span
                  class="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  @click="
                    toggle_confirm_new_passwod = !toggle_confirm_new_passwod
                  "
                >
                  <i
                    :class="
                      toggle_confirm_new_passwod
                        ? 'fas fa-eye-slash'
                        : 'fas fa-eye'
                    "
                  ></i>
                </span>
              </div>
            </div>
            <div class="ml-6 mt-4 sm:w-sm md:w-lg lg:w-xl xl:w-2xl flex">
              <div class="flex w-full justify-end">
                <div
                  class="text-sm lg:text-base py-3 px-5 cursor-pointer bg-gray-100 rounded"
                >
                  Cancel
                </div>
                <div
                  @click="saveChange()"
                  class="bg-red-400 text-sm lg:text-base text-neutral-50 hover:bg-red-300 cursor-pointer rounded py-3 px-5"
                >
                  Save Changes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MessageModal from "../../components/modal/MessageModal.vue";

import LoadingAnimation from "../../components/loader/LoadingAnimation.vue";

import { useAuth } from "../../stores/stores.js";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const useAuthStore = useAuth();

const showMessageModal = ref(false);
const toggle_password = ref(true);
const toggle_newpasswod = ref(true);
const toggle_confirm_new_passwod = ref(true);
const isLoading = ref(false);
const isError = ref(false);

const confirm_new_passwod = ref("");
const password = ref("");
const newpassword = ref("");
const name = ref(useAuthStore.user.name);
const message = ref("");

const BASE_URL = "http://localhost:3000/";

const saveChange = () => {
  const token = localStorage.getItem("token");
  if (token) {
    isLoading.value = true;
    const postData = {
      username: name.value,
      password: password.value,
      newpassword: newpassword.value,
      confirm_password: confirm_new_passwod.value,
    };
    console.log("iberiljek maglumatlar ", postData);

    fetch(BASE_URL + "auth/api/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        isLoading.value = false;
        showMessageModal.value = true;

        console.log(data);
        if (data.success) {
          isError.value = false;
          message.value = data.message;
          useAuthStore.login(data.token);
          // redirect
        } else {
          isError.value = true;
          message.value = data.message;
        }
      })
      .catch((error) => {
        console.error("Error detected -!!! : ", error);
      });
  } else {
    setTimeout(() => {
      router.push({
        name: "signup",
      });
    }, 1000);
  }
};
</script>

<style lang="scss" scoped></style>
