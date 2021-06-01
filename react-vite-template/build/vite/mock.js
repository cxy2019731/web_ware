import { viteMockServe } from 'vite-plugin-mock';
const createViteMock = (isService, isBuild, isProd, isDev) => {
	return viteMockServe({
		mockPath: 'mock', //mock目录
		supportTs: false, //读取ts模块,打开无法读取js
		watchFiles: true, //监视mock文件的修改
		logger: true, //控制台请求日志
		localEnabled: isService,
		prodEnabled: !isService && true,
		injectCode: `
          import { setupProdMockServer } from './_createProductionServer';
          setupProdMockServer();
        `,
	});
};

export default createViteMock;
