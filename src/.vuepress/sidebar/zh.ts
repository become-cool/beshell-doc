import { sidebar } from "vuepress-theme-hope";
import * as lvglWidgets from "../../api/lvgl/widgets/sidebar.json";


export const zhSidebar = sidebar({
  "/": [
    {
      text: "快速开始",
      icon: "laptop-code",
      prefix: "guide/",
      link: "guide/",
      children: [
        {
          text: "安装",
          link: "install.md",
          children: [
            {
              text: "在 Arduino 中安装",
              link: "install_arduino.md",
            } ,
            {
              text: "在 ESP IDF 中安装",
              link: "install_esp-idf.md",
            } ,

          ]
        } ,
        // {
        //   text: "交互式运行",
        //   link: "interactive",
        // } ,
        {
          text: "写第一个 JS 脚本文件",
          link: "run-js-script.md",
        } ,
        {
          text: "用 JS 处理 GPIO",
          link: "gpio.md",
        } ,
        {
          text: "用 JS 连接 WiFi",
          link: "wifi.md",
        } ,
        {
          text: "在 ESP32 上用 JS 开发 WEB 后端",
          link: "http-server.md",
        } ,
        // {
        //   text: "用 C++ 写一个 JS Class",
        //   link: "run-js-file",
        // } ,

      ],
    },

    {
      text: "API 文档",
      icon: "book",
      prefix: "api/",
      children: [
        {
          text: "process",
          link: "process",
        } ,
        {
          text: "文件系统",
          link: "fs",
        } ,
        {
          text: "GPIO",
          link: "gpio",
        } ,
        {
          text: "WiFi",
          link: "wifi",
        } ,
        {
          text: "网络",
          link: "mg/",
          collapsible: true ,
          children: [
            {
              text: "概述",
              link: "mg/",
            } ,
            {
              text: "Server",
              link: "mg/Server",
            } ,
            {
              text: "Client",
              link: "mg/Client",
            } ,
            {
              text: "HTTPRequest",
              link: "mg/HTTPRequest",
            } ,
            {
              text: "Response",
              link: "mg/Response",
            } ,
          ]
        } ,
        {
          text: "串口",
          link: "serial/overview",
          prefix: "serial/",
          collapsible: true ,
          children: [
            {
              text: "概述",
              link: "overview",
            } ,
            {
              text: "UART",
              link: "UART",
            } ,
            {
              text: "I2C",
              link: "I2C",
            } ,
            {
              text: "SPI",
              link: "SPI",
            } ,
          ]
        } ,
        {
          text: "NVS",
          link: "nvs",
        } ,
        {
          text: "图形界面(GUI)",
          link: "lvgl/overview",
          prefix: "lvgl/",
          collapsible: true ,
          children: [
            {
              text: "概述",
              link: "overview",
            } ,
            {
              text: "组件",
              link: "widgets/Obj",
              prefix: "widgets/",
              collapsible: true ,
              children: lvglWidgets.default
            } ,
            {
              text: "常量",
              link: "consts",
            } ,
            {
              text: "样式",
              link: "styles",
            } ,
            {
              text: "动画",
              link: "animation",
            } ,
          ]
        } ,
      ],
    },
    // {
    //   text: "高级",
    //   icon: "laptop-code",
    //   prefix: "guide/",
    //   link: "demo/",
    //   children: [
    //     {
    //       text: "Native 开发",
    //       link: "native/overview",
    //       children: [
    //         {
    //           text: "JS Native 模块",
    //           link: "interactive",
    //         } ,
    //         {
    //           text: "JS Native 类",
    //           link: "interactive",
    //         } ,
    //         {
    //           text: "驱动",
    //           link: "interactive",
    //         } ,
    //       ]
    //     } ,
    //     {
    //       text: "上位机协议",
    //       link: "interactive",
    //     } ,

    //   ],
    // },
  ],
});
