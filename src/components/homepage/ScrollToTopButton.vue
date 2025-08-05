<template>
  <div
    v-show="scrollToTopBtnIsVisible"
    :class="[
      'scroll-to-top',
      isOverFooter ? 'relative bottom-0' : 'fixed bottom-[32px]',
    ]"
    @click="scrollToTop"
    class="w-[46px] h-[46px] flex group items-center justify-center rounded-full bg-[#F5F5F5] right-[10%] shadow-lg z-50 transition-opacity duration-300 hover:bg-[#e0e0e0] duration-300 transition-colors active:shadow-none active:translate-y-0"
    style="
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 group-hover:-translate-y-0.5 duration-300 transition-transform active:translate-y-0"
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
      scrollToTopBtnIsVisible: false,
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
      this.scrollToTopBtnIsVisible = window.scrollY > 300;

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
