module.exports = {
  title: "gkkirilov blog",
  description: "Just playing around! 🚀",
  head: [
    [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/logo.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Twitter", link: "https://twitter.com/gkkirilov" },
      { text: "GitHub", link: "https://github.com/gkkirilov" },
      {
        text: "YouTube",
        link: "https://youtube.com/channel/UCyxPZRn94PPwDTsfejtqX2w"
      },
      { text: "About", link: "/about/" }
    ]
  },

  plugins: {
    "@vuepress/search": {
      test: "/posts/"
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    "@vuepress/plugin-nprogress": true,
    "@vuepress/plugin-last-updated": true,

    "@vuepress/google-analytics": {
      ga: "UA-82262537-3'"
    },
    "@vuepress/blog": true,
    "@vuepress/back-to-top": true,
    sitemap: {
      hostname: "https://gkkirilov.com"
    },
    seo: {
      /* options */
    }
  }
};
