// https://nuxt.com/docs/api/configuration/nuxt-config
/*export default defineNuxtConfig({

})*/

export default {
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}