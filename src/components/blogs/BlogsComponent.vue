<template>
  <div class="w-full p-4">
    <h2
      class="text-[18px] md:text-[36px] text-[#34547F] mt-10 mx-auto w-fit text-center"
    >
      Meditasiýa, uky, stress we ruhy saglyk barada has köp maglumat üçin
      blogymyzy gözden geçiriň.
    </h2>
    <div
      class="mt-10"
      style="background-color: linear-gradient(#f7f7f7, #e3ebff)"
    >
      <Swiper
        :modules="[Navigation]"
        loop
        :navigation="{
          nextEl: '.custom-next-button2',
          prevEl: '.custom-prev-button2',
        }"
        @swiper="onSwiperInit"
        class="mySwiper w-full"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
      >
        <SwiperSlide
          v-for="(slide, index) in swiper2TM"
          :key="index"
          class="swiper-slide hover:text-[#34547F] w-[180px] md:w-[400px] gap-[5px] md:gap-[10px] flex flex-col items-start cursor-pointer"
        >
          <img
            :src="slide.imgUrl"
            :alt="slide.imgAlt"
            style="
              object-fit: cover;
              border-top-left-radius: 16px;
              border-top-right-radius: 16px;
            "
          />
          <div class="text-[10px] text-start ml-[10px] !text-[#1A3E6F]">
            {{ slide.title }}
          </div>
          <p class="text-start ml-[10px]">{{ slide.description }}</p>
        </SwiperSlide>
      </Swiper>
      <!-- Custom Buttons -->
      <div class="flex w-full justify-between items-center">
        <span
          class="underline md:text-2xl flex-1 text-start md:text-end md:mr-40 cursor-pointer"
          >Ähli bloglary gör
        </span>
        <div class="flex gap-2 justify-end mt-4 md:mr-[20%]">
          <button class="cursor-pointer custom-prev-button2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              class="rounded-[50%] bg-[#7B7C7F] w-[40px] h-[40px] p-[5px]"
            >
              <path
                d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                fill="#000000"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button class="cursor-pointer custom-next-button2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              class="rotate-180 rounded-[50%] bg-[#7B7C7F] w-[40px] h-[40px] p-[5px]"
            >
              <path
                d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                fill="#000000"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { swiper2TM } from "../../compasable/people";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/bundle";
</script>
