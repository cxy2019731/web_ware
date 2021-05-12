// 插件
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
// 插件-独立配置
import styleImport from './styleImport';
import legacy from './legacy';

const createVitePlugins = () => {
	const vitePlugins = [reactRefresh(), svgr(), legacy(), styleImport()];

	return vitePlugins;
};

module.exports = {
	createVitePlugins,
};
