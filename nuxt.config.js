export default {
  target: 'server',
  head: {
    title: 'Asylum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'wip' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/fb1eb6ccbc.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
};
//
/*
export default {
  buildDir: 'nuxt-dist',
  target: 'server',
  head: {
    title: 'MyAsylum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'wip' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http'
  ],
  serverMiddleware: {
    '/api': '~/api'
  },
  build: {
    analyze: false
  }
}
*/