<template>
  <div
    class="bg-black h-auto py-2 text-[#fafafa] text-sm leading-tight flex flex-col items-center md:h-[48px] md:flex-row md:justify-center md:text-[14px]"
  >
    <div
      class="w-full px-4 flex flex-col items-center md:max-w-[859px] md:flex-row md:justify-between md:py-[12px]"
    >
      <div
        class="flex flex-col items-center md:flex-row md:max-w-[781px] md:items-center"
      >
        <div class="text-center md:text-left">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div @click=" router.push({
            name: 'productlist',
            query: {
              page: 1,
              message: 'flashsales',
            },
          })"
          class="transition-all duration-300 mt-2 md:mt-0 md:ml-[8px] font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
        >
          ShopNow
        </div>
      </div>

      <select
        :value="locale"
        class="outline-none py-2 px-2 rounded-sm text-xs font-light"
        name=""
        id=""
        @change="locale = $event.target.value"
      >
        <!-- <option value="" class="text-xs font-light" hidden disabled selected>
          Select
        </option> -->
        <option class="text-xs text-black font-light" value="tk">
          Türkmen
        </option>

        <option class="text-xs text-black font-light" value="ru">
          Русский
        </option>
        <option class="text-xs text-black font-light" value="en">
          English
        </option>
      </select>

      <!-- <select class="mt-2 md:mt-0 outline-none border-none text-white">
        <option class="text-black" value="english">English</option>
        <option class="text-black" value="Russian">Russian</option>
        <option class="text-black" value="Turkmen">Turkmen</option>
      </select> -->
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const { t, locale } = useI18n({ useScope: "global" });
</script>

<style scoped>
select {
  appearance: base-select;
  color: #fff;
  background-color: transparent;
  width: 100px;
  box-sizing: border-box;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e4e4e7;
  border-radius: calc(0.5rem - 2px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
select > button {
  display: flex;
  width: 100%;
  font-family: inherit;
  color: currentColor;
}

select > button > svg {
  margin: 0 0 0 auto;
  width: 1.2rem;
  height: 1.2rem;
}

select::picker(select) {
  appearance: base-select;
  border: 1px solid #e4e4e7;
  padding: 0.25rem;
  margin-top: 0.25rem;
  border-radius: calc(0.5rem - 2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  cursor: default;
  transition: opacity 225ms ease-in-out, transform 225ms ease-in-out;
  transform-origin: top;
  transform: translateY(0);
  opacity: 1;

  @starting-style {
    transform: translateY(-0.25rem) scale(0.95);
    opacity: 0;
  }
}
select:focus-visible {
  outline: 2px solid #a1a1aa;
  outline-offset: -1px;
}

select:has(option:not([hidden]):checked) {
  /* color: #18181b; */
}
select option::after {
  content: "";
  width: 1rem;
  height: 1.5rem;
  margin-left: auto;
  opacity: 0;
  background: center / contain no-repeat
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2318181b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'%3E%3C/path%3E%3C/svg%3E");
}

select option:checked::after {
  opacity: 1;
}
</style>
