<script setup>
import { onMounted, ref } from "vue";
// import BaseIcon from "./base-icon.vue";

defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Object,
    default: {},
  },
});
const emit = defineEmits(["update:modelValue"]);
const showDropdown = ref(false);
const dropdownMenu = ref();

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

<template>
  <div class="relative">
    <label :class="error == '' ? 'text-primary' : 'text-danger'">{{
      label
    }}</label>
    <div
      @click.stop="showDropdown = !showDropdown"
      :class="[
        '',
        showDropdown ? 'rounded-t-[6px]' : 'rounded-[6px]',
        error == '' ? 'border-primary' : 'border-danger',
      ]"
      class="bg-white border w-full h-[50px] flex items-center justify-between pl-4 pr-2 mt-1 text-sm shadow-sm cursor-pointer transition-all duration-150"
    >
      <p
        v-if="!modelValue?.name"
        class="text-primary"
        :class="error !== '' ? 'text-danger' : 'text-primary'"
      >
        {{ !modelValue?.name ? placeholder : modelValue?.name }}
      </p>
      <p v-else class="font-bold text-primary">
        {{ modelValue?.name }}
      </p>
      <span class="border-l-2 border-primary pl-2">
        <!-- <BaseIcon
          :class="showDropdown ? '-rotate-90' : 'rotate-90'"
          class="transition-all duration-150 text-primary"
          name="chevron"
        ></BaseIcon> -->
      </span>
    </div>
    <div ref="dropdownMenu">
      <div
        v-if="showDropdown"
        :class="[error == '' ? 'border-primary' : 'border-danger']"
        class="absolute right-0 bg-white border-x h-auto duration-250 ease-in-out z-10 shadow-lg w-full max-h-[400px] overflow-auto"
      >
        <ul v-for="(option, index) in options" :key="index">
          <li
            @click="
              showDropdown = false;
              $emit('update:modelValue', option);
            "
            :class="[error == '' ? 'border-b-primary' : 'border-b-danger']"
            class="py-4 px-7 hover:bg-slate-200 text-primary cursor-pointer border-b"
          >
            {{ option?.name }}
          </li>
        </ul>
        <div
          class="cursor-pointer text-secondary text-end text-sm py-2 px-2"
          @click="
            showDropdown = false;
            $emit('update:modelValue');
          "
        >
          filteri arassala
        </div>
      </div>
    </div>
  </div>
</template>
