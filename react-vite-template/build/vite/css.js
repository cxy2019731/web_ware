const { getThemeVariables } = require('antd/dist/theme');

const createViteCss = () => {
	const config = {
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
					customTheme: {
						'primary-color': '#0aa679',
					},
				}),
			},
			scss: {
				additionalData: "@import '@/styles/base.scss';", //全局样式,针对scss文件生效,可直接使用里面的变量
			},
		},
	};

	return config;
};

module.exports = {
	createViteCss,
};
