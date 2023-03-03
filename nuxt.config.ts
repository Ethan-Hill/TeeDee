// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css", "@formkit/themes/genesis"],

  modules: [
    "@nuxtjs/supabase",
    "nuxt-icon",
    "nuxt-delay-hydration",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@formkit/nuxt",
  ],

  extends: ["nuxt-seo-kit"],
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      siteName: "Awesome Site",
      siteDescription: "Welcome to my awesome site!",
      language: "en",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      "Nunito+Sans": true,
    },
  },
});
