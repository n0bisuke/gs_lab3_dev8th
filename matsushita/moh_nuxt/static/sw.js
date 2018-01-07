importScripts('/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "moh_nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b740cd4abee6d38346e6.js",
    "revision": "f4bbcf29e3cbbc4dbeacb7c8e699ed9c"
  },
  {
    "url": "/_nuxt/common.7f9bb39cd1d22723e8b1.js",
    "revision": "d0aeec921314eaa193c958681311510b"
  },
  {
    "url": "/_nuxt/layouts/default.9fb02d0144cc1af0af55.js",
    "revision": "d77545da1dd4a3681c51e4c770116b93"
  },
  {
    "url": "/_nuxt/manifest.0ccb65463779dddb9d1a.js",
    "revision": "1491412b1603a65ffdf919fa2bc966a2"
  },
  {
    "url": "/_nuxt/pages/index.86a360506641668c328c.js",
    "revision": "74e919a66c16ae35379997dcb8d57d86"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

