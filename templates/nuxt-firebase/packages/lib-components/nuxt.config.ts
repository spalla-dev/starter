// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    includeWorkspace: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon'],
  colorMode: {
    dataValue: 'theme',
    classSuffix: '',
  },
});
