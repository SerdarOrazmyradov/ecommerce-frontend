import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import TestSwiper from "../views/TestSwiper.vue";
import NavBar from "../views/NavBar.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  {
    path: "/landingpage",
    name: "landingpage",
    component: LandingPage,
  },
  {
    path: "/test",
    name: "test",
    component: TestSwiper,
  },
  {
    path: "/navbar",
    name: "navbar",
    component: NavBar,
  },
  {
    path: "/auth/api/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/auth/api/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/auth/api/logout",
    name: "logout",
    component: LogoutView,
  },

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "product_details",
    component: () => import("../views/details/ProductDetails.vue"),
  },
  {
    path: "/productlist",
    name: "productlist",
    component: () => import("../views/productlist/ProductList.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/checkout/CheckOut.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart/CartComponent.vue"),
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for Vue 3
    name: 'NotFound',
    component:  () => import("../views/notfound/NotFound.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
