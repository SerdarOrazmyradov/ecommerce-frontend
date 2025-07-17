import { defineStore } from "pinia";

export const useSearchedTextStore = defineStore("searchedText", {
  state: () => ({ searchedText: "" }),
  actions: {
    setSearchedText(newSearchText) {
      this.searchedText = newSearchText;
    },
  },
});

export const useCurrentPage = defineStore("currentPage", {
  state: () => ({ currentPage: "" }),
  actions: {
    setCurrentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
    },
  },
});

export const useTotaPage = defineStore("totalPages", {
  state: () => ({
    totalPages: 0,
  }),
  actions: {
    setTotalPages(newTotal) {
      this.totalPages = newTotal;
    },
  },
});

export const useSearchedMovie = defineStore("searchedMovie", {
  state: () => ({
    searchedMoviePage: "0",
  }),
  actions: {
    setSearchedMoviePage(newTotal) {
      this.searchedMoviePage = newTotal;
    },
  },
});

export const useCount = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // store.js/faýlyňda
    setCountVal(newVal) {
      this.count = newVal;
    },

    increment() {
      this.count++;
    },
  },
});
export const useLiked = defineStore("like", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // store.js/faýlyňda
    setCountVal(newVal) {
      this.count = newVal;
    },

    increment() {
      this.count++;
    },
    decreament() {
      this.count--;
    },
  },
});
export const useCartQuentity = defineStore("cart_quentity", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // store.js/faýlyňda
    setCountVal(newVal) {
      this.count = newVal;
    },

    increment() {
      this.count++;
    },
    decreament() {
      this.count--;
    },
  },
});
