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
    "@sidebase/nuxt-auth",
  ],

  extends: ["nuxt-seo-kit"],
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      siteName: "TeeDee",
      siteDescription: "A task manager which uses cutting edge technology",
      language: "en",
      titleSeparator: "|",
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

  auth: {
    enableGlobalAppMiddleware: true,
    enableSessionRefreshPeriodically: 100000,
  },

  app: {
    head: {
      titleTemplate: "%pageTitle %titleSeparator %siteName",
    },

    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  linkChecker: {
    failOn404: true,
  },
});
