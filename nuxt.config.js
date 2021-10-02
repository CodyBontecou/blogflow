export default {
  head: {
    title: 'blogflow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxt/image'],

  vite: {
    ssr: true,
  },

  image: {
    domains: ['https://images.unsplash.com'],
  },

  storybook: {
    addons: ['@storybook/addon-a11y'],
  },

  tailwindcss: {
    jit: true,
  },

  googleFonts: {
    families: {
      Lato: true,
    },
    download: true,
  },

  build: {},

  ignore: ['**/*.cy.*'],
}
