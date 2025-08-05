import { defineStore } from "pinia";
import { ref } from "vue";

export const useLiked = defineStore("liked", () => {
  const likedProducts = ref(
    JSON.parse(localStorage.getItem("likedProducts") || "[]")
  );

  const addProduct = (prod) => {
    if (!likedProducts.value.find((p) => p.id === prod.id)) {
      likedProducts.value.push(prod);
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(likedProducts.value)
      );
    }
  };

  const removeProduct = (prod) => {
    likedProducts.value = likedProducts.value.filter((p) => p.id !== prod.id);
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts.value));
  };

  return {
    likedProducts,
    addProduct,
    removeProduct,
  };
});

export const useCart = defineStore("cart", () => {
  const cartProducts = ref(
    JSON.parse(localStorage.getItem("cartProducts") || "[]")
  );

  const addProduct = (prod, isIncrease = true) => {
    const existing = cartProducts.value.find((p) => p.id === prod.id);

    if (!existing) {
      if (prod.stock > 0) {
        prod.count = 1;
        cartProducts.value.push(prod);
      }
    } else {
      if (isIncrease) {
        if (existing.count < prod.stock) {
          existing.count += 1;
        } else {
          console.warn("Stock limit reached");
        }
      } else {
        existing.count -= 1;
        if (existing.count <= 0) {
          cartProducts.value = cartProducts.value.filter(
            (p) => p.id !== prod.id
          );
        }
      }
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts.value));
  };

  const setProducts = (newProducts) => {
    console.log("salam cart store pinia :test edyas nace gezek isleyanini");

    cartProducts.value = [...newProducts];
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts.value));
  };

  const removeProduct = (prod) => {
    cartProducts.value = cartProducts.value.filter((p) => p.id !== prod.id);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts.value));
  };

  return {
    cartProducts,
    addProduct,
    removeProduct,
    setProducts,
  };
});

export function parseJwt(token) {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

export const useAuth = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"));
  const user = ref(token.value ? parseJwt(token.value) : null);
  const isAuthenticated = ref(!!token.value);

  const login = (newToken) => {
    user.value = parseJwt(newToken);
    token.value = newToken;
    isAuthenticated.value = true;
    localStorage.setItem("token", newToken);
  };
  const logout = () => {
    token.value = null;
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("token");
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  };
});

export const useToast = defineStore("toast", {
  state: () => ({
    toasts: [],
  }),
  actions: {
    /**
     *
     * @param {{message:string,type:'success' | 'error' | 'info' ,duration? :number}} toast
     */

    addToast(toast) {
      const id = Date.now();
      const newToast = {
        id,
        message: toast.message,
        type: toast.type || "info",
        duration: toast.duration || 2000,
      };

      this.toasts.push(newToast);

      setTimeout(() => {
        this.removeToast(id);
      }, newToast.duration);
    },
    /**
     * @param {number} id
     */
    removeToast(id) {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    },
    removeToastByIndex(i) {
      this.toasts = this.toasts.filter((t, index) => index !== i);
    },
  },
});
