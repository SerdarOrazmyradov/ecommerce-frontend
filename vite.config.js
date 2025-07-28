import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";
// import tailwindConfig from "./tailwind.config";

export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools()],
});
