import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth/api/signup",
    name: "signup",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/auth/api/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/auth/api/logout",
    name: "logout",
    component: () => import("../views/LogoutView.vue"),
  },
  {
    path: "/auth/api/authredirect",
    name: "authredirect",
    component: () => import("../views/auth/AuthRedirect.vue"),
  },

  {
    path: "/",
    name: "home",
    component: () => import("../views/home/HomeView.vue"),
  },
  {
    path: "/myaccount",
    name: "myaccount",
    component: () => import("../views/myaccount/MyAccount.vue"),
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
    path: "/categories",
    name: "categorylist",
    component: () => import("../views/categorylist/CategoryList.vue"),
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
    path: "/about",
    name: "about",
    component: () => import("../views/about/AboutComponent.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("../views/error/500.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact/ContactUs.vue"),
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import("../views/favorite/WishlistComponent.vue"),
  },
  {
    path: "/tracing-order/:id",
    name: "tracing-order",
    component: () => import("../views/order/TrackingOrder.vue"),
  },
  {
    path: "/my-orders",
    name: "my-orders",
    component: () => import("../views/order/MyOrders.vue"),
  },
  {
    path: "/orderdetails/:id",
    name: "orderdetails",
    component: () => import("../views/order/OrderDetails.vue"),
  },

  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/HomeView.vue"),
    children: [
      {
        path: "profile",
        name: "UserProfile",
        component: () => import("../views/admin/UserProfileComponent.vue"),
      },
      {
        path: "settings",
        name: "UserSettings",
        component: () => import("../views/admin/UserSettingsComponent.vue"),
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/admin/DashboardComponent.vue"),
      },
      {
        path: "order",
        name: "Order",
        component: () => import("../views/admin/OrderComponent.vue"),
      },
      {
        path: "listing",
        name: "Listing",
        component: () => import("../views/admin/ListingComponent.vue"),
      },
      {
        path: "admin",
        name: "Admin",
        component: () => import("../views/admin/AdminComponent.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*", // Catch-all route for Vue 3
    name: "NotFound",
    component: () => import("../views/notfound/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
