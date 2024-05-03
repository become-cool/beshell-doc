import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

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
