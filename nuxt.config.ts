// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:['@pinia/nuxt'],
  css:['~/assets/css/main.css'],
  // ssr: false,
  app:{
    head:{
      title: 'my Title',
      meta:[
        {name: 'description', content: 'My description' },
      ],
      bodyAttrs:{
        class: 'test'
      }
    }
  }
})