module.exports = {
  title: '@gkkirilov blog',
  description: 'Just playing around! 🚀',
  head: [['link', { rel: 'icon', href: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/shocked-face-with-exploding-head_1f92f.png' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Twitter', link: 'https://twitter.com/gkkirilov' },
      { text: 'GitHub', link: 'https://github.com/gkkirilov' },
      { text: 'About', link: '/about' }
    ]
  },

  plugins: {
    '@vuepress/search': {
      test: '/posts/'
    },
    '@vuepress/pwa': true,
    '@vuepress/plugin-nprogress': true,
    '@vuepress/plugin-last-updated': true,

    '@vuepress/google-analytics': {
      ga: '' // UA-00000000-0
    },
    '@vuepress/blog': true,
    '@vuepress/back-to-top': true,
    sitemap: {
      hostname: 'https://gkkirilov.com'
    },
    seo: {
      /* options */
    }
  }
};
