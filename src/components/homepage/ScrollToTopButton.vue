<template>
  <div
    v-show="isVisible"
    :class="['scroll-to-top', isOverFooter ? 'relative bottom-0' : 'fixed bottom-[32px]']"
    @click="scrollToTop"
    class="w-[46px] h-[46px] flex items-center justify-center rounded-full bg-[#F5F5F5] right-[10%] shadow-lg z-50 transition-opacity duration-300 hover:bg-[#e0e0e0]"
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
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      isVisible: false,
      isOverFooter: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 300;

      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        this.isOverFooter = footerTop < windowHeight;
      }
    },
  },
};
</script>
