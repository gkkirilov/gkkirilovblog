module.exports = {
  title: "gkkirilov",
  description: "Just playing around! 🚀",
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'og:image', content: '/icons/logo.png' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-G0GL5Z1J1R',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-G0GL5Z1J1R');",
      ],
    ],
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    defaultTheme: 'dark',

    nav: [
      { text: "Home", link: "/" },
      { text: "Twitter", link: "https://twitter.com/gkkirilov" },
      { text: "GitHub", link: "https://github.com/gkkirilov" },
      {
        text: "Investor Simulator",
        link: "/investor/"
      },
      {
        text: "Email",
        link: "mailto:gkkirilov@gmail.com"
      },
      { text: "About", link: "/about/" }
    ],
    smoothScroll: true
  },

  plugins: {
    "@vuepress/search": {
      test: "/posts/" // Path to search on
    },
    // '@vuepress/pwa': {
    //   serviceWorker: true,
    //   updatePopup: {
    //     message: "New content is available.",
    //     buttonText: "Refresh"
    //   }
    // },
    "@vuepress/plugin-nprogress": true,
    "@vuepress/plugin-last-updated": true,

    "@vuepress/blog": true,
    "@vuepress/back-to-top": true,
    sitemap: {
      hostname: "https://gkkirilov.com"
    },
    seo: {
      /* options */
    },
    'robots': {
      /**
       * @host
       * Mandatory, You have to provide the host URL
       */
      host: "https://gkkirilov.com",
      /**
       * @disallowAll
       * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
       */
      disallowAll: false,
      /**
       * @allowAll
       * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
       */
      allowAll: true,
      /**
       * @sitemap
       * Optional, by default: sitemap.xml
       */
      sitemap: "/sitemap.xml",
    },
  }
};
