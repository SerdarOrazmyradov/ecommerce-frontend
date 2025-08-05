<template>
  <div class="flex items-center gap-4">
    <div class="text-xs font-light">{{ t("sortBy") }}</div>
    <select
      :value="sort_by"
      @change="$emit('update:sort_by', $event.target.value)"
      class="outline-none py-2 px-2 rounded-sm border border-gray-300 text-xs font-light"
      name=""
      id=""
    >
      <option value="" class="text-xs font-light" hidden disabled selected>
        {{ t("select") }}
      </option>

      <option class="text-xs font-light" value="low_to_high">
        {{ t("lowToHigh") }}
      </option>
      <option class="text-xs font-light" value="high_to_low">
        {{ t("highToLow") }}
      </option>
      <option class="text-xs font-light" value="newest">
        {{ t("newest") }}
      </option>
      <option class="text-xs font-light" value="user_rating">
        {{ t("userRating") }}
      </option>
      <!-- <option class="text-xs font-light" value="best-selling">
                  best-selling
                </option> -->
    </select>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n({ useScope: "global" });

defineProps({
  sort_by: {
    type: String,
    default: "low_to_high",
  },
});

defineEmits(["update:sort_by"]);
</script>

<style scoped>
select {
  appearance: base-select;
  color: #71717a;
  background-color: transparent;
  width: 180px;
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
  color: #18181b;
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
