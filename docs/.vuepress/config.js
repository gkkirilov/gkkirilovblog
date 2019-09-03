module.exports = {
  title: "@gkkirilov blog",
  description: "Just playing around! 🚀",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/shocked-face-with-exploding-head_1f92f.png"
      }
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
      { text: "About", link: "/about" }
    ]
  },

  plugins: {
    "@vuepress/search": {
      test: "/posts/"
    },
    "@vuepress/pwa": true,
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
