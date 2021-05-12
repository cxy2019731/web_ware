import styleImport from 'vite-plugin-style-import';

module.exports = () =>
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
	});
