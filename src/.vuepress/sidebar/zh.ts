import { sidebar } from "vuepress-theme-hope";
import * as lvglWidgets from "../../api/lvgl/widgets/sidebar.json";


export const zhSidebar = sidebar({
  "/": [
    {
      text: "快速开始",
      icon: "laptop-code",
      prefix: "guide/",
      link: "demo/",
      children: [
        {
          text: "安装",
          link: "setup",
        } ,
        {
          text: "交互式运行",
          link: "interactive",
        } ,
        {
          text: "写第一个 JS 脚本文件",
          link: "run-js-file",
        } ,
        {
          text: "用 C++ 写一个 JS Class",
          link: "run-js-file",
        } ,

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
    {
      text: "高级",
      icon: "laptop-code",
      prefix: "guide/",
      link: "demo/",
      children: [
        {
          text: "Native 开发",
          link: "native/overview",
          children: [
            {
              text: "JS Native 模块",
              link: "interactive",
            } ,
            {
              text: "JS Native 类",
              link: "interactive",
            } ,
            {
              text: "驱动",
              link: "interactive",
            } ,
          ]
        } ,
        {
          text: "上位机协议",
          link: "interactive",
        } ,

      ],
    },
  ],
});
