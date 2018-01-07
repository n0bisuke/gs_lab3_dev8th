module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: 'auth'
  },
  head: {
    titleTemplate : '%s | My Other Half',
    title: 'moh_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { requiresAuth: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    // provide path to the file with resources
    // '@nuxtjs/onesignal',
    // '@nuxtjs/pwa'
  ],
  // oneSignal: {
  //   init: {
  //     appId: '設定したappId',
  //     allowLocalhostAsSecureOrigin: true,
  //     welcomeNotification: {
  //       disable: true
  //     }
  //   }
  // },
  // workbox: {
  //   dev: true
  // },
  env: {
    apiKey: "AIzaSyAuLIEO9MIgylAQ8GV7A2PmoB63fh0mtkw",
    authDomain: "moh-app.firebaseapp.com",
    databaseURL: "https://moh-app.firebaseio.com",
    projectId: "moh-app",
    storageBucket: "moh-app.appspot.com",
    messagingSenderId: "848015601717"
  },
  mode: 'spa'
}
