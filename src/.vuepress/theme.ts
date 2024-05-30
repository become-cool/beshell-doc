import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { shikiPlugin } from "@vuepress/plugin-shiki";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  iconAssets: "fontawesome-with-brands",

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  toc: true ,

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "copyright © become.cool 2020-2024",

      displayFooter: true,

      metaLocales: {
        // editLink: "在 GitHub 上编辑此页",
      },
    },

    /**
     * Chinese locale config
     */
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    
    prismjs: {
      light: "one-light",
      dark: "atom-dark",
    } ,
    // shikiPlugin: {
    //   themes: {
    //     light: "github-light",
    //     dark: "one-dark-pro",
    //   },
    // },
    
    copyCode: {},

    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Giscus",
      repo: "become-cool/beshell",
      repoId: "R_kgDOMAdaxA",
      category: "Q&A",
      categoryId: "DIC_kwDOMAdaxM4CfniL",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install katex before enabling it
      // katex: true,

      // Install mathjax-full before enabling it
      // mathjax: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
