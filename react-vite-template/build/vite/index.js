// 插件
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
// 插件-独立配置
import styleImport from './styleImport';
import legacy from './legacy';
import mock from './mock';

const createVitePlugins = (isService, isBuild, isProd, isDev) => {
	const vitePlugins = [reactRefresh(), svgr(), styleImport(), mock(isService, isBuild, isProd, isDev)];

	if (isBuild) {
		vitePlugins.push(legacy());
	}

	return vitePlugins;
};

module.exports = {
	createVitePlugins,
};
