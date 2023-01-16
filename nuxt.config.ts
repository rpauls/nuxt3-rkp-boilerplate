// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    /*** DevDependencies ***/
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://github.com/nuxt-modules/fontaine
    '@nuxtjs/fontaine',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
    // https://tailwindcss.nuxt.dev/getting-started/setup
    '@nuxtjs/tailwindcss',
    // https://sidebase.io/nuxt-auth/getting-started
    // '@sidebase/nuxt-auth',
    // https://github.com/sidebase/nuxt-session
    // '@sidebase/nuxt-session',
    // https://github.com/johannschopplich/nuxt-api-party#readme
    'nuxt-api-party',
    // https://github.com/harlan-zw/nuxt-seo-kit
    // 'nuxt-seo-kit',
    // https://nuxt-typed-router.vercel.app/guide
    'nuxt-typed-router',
    // https://v1.image.nuxtjs.org/get-started
    '@nuxt/image-edge',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-modules/icon
    'nuxt-icon',
    // https://github.com/harlan-zw/nuxt-delay-hydration
    'nuxt-delay-hydration',
    // https://github.com/nuxt-modules/partytown#quick-setup
    '@nuxtjs/partytown',
    // https://github.com/cipami/nuxt-lodash
    'nuxt-lodash',

    /*** Production Dependencies ***/
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    '@pinia-plugin-persistedstate/nuxt',
    // https://vueuse.org/nuxt/readme.html
    '@vueuse/nuxt',
    // https://nuxt-security.vercel.app/getting-started/quick-start
    'nuxt-security',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/cpreston321/nuxt-swiper#readme
    'nuxt-swiper',
    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],
  // https://github.com/harlan-zw/nuxt-delay-hydration
  // delayHydration: {
  //   // enables nuxt-delay-hydration in dev mode for testing
  //   debug: process.env.NODE_ENV === 'development'
  // }
})
