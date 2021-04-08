/*
 * @Author: itmanyong
 * @Date: 2021-04-08 13:42:26
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:39:21
 * @FilePath: \react-vite2-template\vite.config.js
 */
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";
import svgr from "vite-plugin-svgr";
import styleImport from "vite-plugin-style-import";
const { getThemeVariables } = require("antd/dist/theme");
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      "@": "/src",
      request: "/src/service/request.js",
      http: "/src/service/http",
      utils:"/src/utils/index.js",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.127:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        require("postcss-pxtorem")({
          rootValue: 32,
          propList: ["*"],
          unitPrecision: 5,
          exclude: /(node_module)/,
        }),
      ],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: getThemeVariables({
          compact: true,
        }), //自定义antd主题
      },
      scss: {
        additionalData: "@import '@/styles/base.scss';", //全局样式,针对scss文件生效,可直接使用里面的变量
      },
    },
  },
  plugins: [
    reactRefresh(),
    svgr(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
});
