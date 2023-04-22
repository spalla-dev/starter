// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  nitro: {
    preset: 'firebase',
    prerender: {
      routes: ['/'],
    },
  },
  extends: ['lib-components', 'server'],
});
