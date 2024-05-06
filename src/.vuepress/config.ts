import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = "/"

const config = defineUserConfig({
  base,

  head: [
    ["link", { rel: "stylesheet", href: base+"doc.css" }],
  ] ,

  locales: {
    "/en/": {
      lang: "en-US",
      title: "",
      description: "BeShell Documents",
    },
    "/": {
      lang: "zh-CN",
      title: "",
      description: "BeShell的文档",
    },
  },

  theme,

  // markdown: {
  //   anchor: {
  //     // permalink: true, 
  //     // permalinkBefore: true, 
  //     permalinkSymbol: '🔗', 
  //     // renderPermalink: function (slug, anchorOpts, state, idx) {
  //     //   console.log(slug)
  //     //   return slug
  //     // } ,
  //     // callback(token, output) {
  //     //   console.log(token.attrs[0][1],output)
  //     //   token.attrs[0][1] = "yyyyyyyyyy"
  
  //     //   output.slug = "xxxxxxxxxx"
  //     // }
  //   },
  // },

  

  // Enable it with pwa
  // shouldPrefetch: false,
});

console.log(config)

export default config
