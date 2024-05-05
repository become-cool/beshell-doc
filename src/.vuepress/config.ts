import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = "/"

export default defineUserConfig({
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

  // Enable it with pwa
  // shouldPrefetch: false,
});
