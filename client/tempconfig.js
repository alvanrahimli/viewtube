const conf = {
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'An alternative YouTube frontend.'
      },
      { name: 'theme-color', content: '#121212' },
      {
        hid: 'ogTitle',
        property: 'og:title',
        content: 'ViewTube'
      },
      {
        hid: 'ogImage',
        property: 'og:image',
        itemprop: 'image',
        content: 'https://viewtube.io/icon-192.png'
      },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: 'An alternative YouTube frontend using the invidio.us API.'
      },
      {
        hid: 'ogType',
        property: 'og:type',
        content: 'website'
      },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'ViewTube' }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'search',
        type: 'application/opensearchdescription+xml',
        title: 'Search ViewTube',
        href: 'https://viewtube.io/viewtubesearch.xml'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  pwa: {
    icon: false,
    workbox: {
      debug: true,
      importScripts: ['notifications-sw.js']
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
      name: null,
      author: 'Maurice Oegerli',
      theme_color: null,
      lang: null,
      ogType: null,
      ogSiteName: null,
      ogTitle: null,
      ogDescription: null,
      ogHost: null,
      ogImage: null,
      ogUrl: null
    },
    manifest: {
      name: 'ViewTube',
      short_name: 'ViewTube',
      display: 'standalone',
      background_color: '#121212',
      description: 'An alternative YouTube frontend',
      lang: 'en',
      theme_color: '#272727',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-192-maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/icon-256-maskable.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/icon-512-maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  }
};