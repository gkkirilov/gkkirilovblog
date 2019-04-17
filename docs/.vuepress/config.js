module.exports = {
  title: '@gkkirilov blog',
  description: 'Just playing around! 🚀',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }]
  },
  plugins: [
    '@vuepress/pwa',
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-last-updated',
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    '@vuepress/blog',
    '@vuepress/back-to-top',
    'sitemap', {
      hostname: 'https://gkkirilov.com'
    },
    {'seo': { /* options */ }}
  ]
};
