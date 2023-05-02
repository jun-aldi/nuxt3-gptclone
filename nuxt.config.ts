// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    OPEN_AI_KEY: process.env.OPEN_AI_KEY,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
