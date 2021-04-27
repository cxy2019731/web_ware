/*
 * @Author: itmanyong
 * @Date: 2021-04-08 13:42:26
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:39:21
 * @FilePath: \react-vite2-template\vite.config.js
 */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';
import styleImport from 'vite-plugin-style-import';
const { getThemeVariables } = require('antd/dist/theme');
// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: 'request', replacement: '/src/service/request.js' },
			{ find: 'http', replacement: '/src/service/http' },
			{ find: 'utils', replacement: '/src/utils/index.js' },
			{ find: 'less', replacement: '/src/styles/local' },
			{ find: 'cstMod', replacement: '/src/base/cstMod.js' },
			{ find: 'useConcent', replacement: '/src/base/useConcent.js' },
			{ find: 'useSetup', replacement: '/src/base/useSetup.js' },
			{ find: /^~/, replacement: '' },
		],
	},
	server: {
		port: 9000,
		proxy: {
			'/api': {
				target: 'http://192.168.0.127:8080',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	css: {
		postcss: {
			plugins: [
				require('postcss-pxtorem')({
					rootValue: 32,
					propList: ['*'],
					unitPrecision: 5,
					exclude: /(node_module)/,
				}),
			],
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: getThemeVariables({
					compact: false,
					//自定义antd主题
					customTheme: {
						'primary-color': '#0aa679',
					},
				}),
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
			targets: ['defaults', 'not IE 11'],
		}),
		styleImport({
			libs: [
				{
					libraryName: 'antd',
					esModule: true,
					resolveStyle: (name) => {
						return `antd/es/${name}/style/index`;
					},
				},
			],
		}),
	],
});
