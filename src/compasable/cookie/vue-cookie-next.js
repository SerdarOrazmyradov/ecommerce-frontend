import { VueCookieNext } from "vue-cookie-next";

// this.$cookie.set(data.details.name, data.token);

export const setToken = (name, value) => {
  VueCookieNext.setCookie(name, value, {
    expire: Infinity,
  });
};
export const getToken = (name) => {
  return VueCookieNext.getCookie(name);
};
export const getCookie= () => {
  return VueCookieNext;
};

// VueCookieNext.set(data.details.name, data.token);
